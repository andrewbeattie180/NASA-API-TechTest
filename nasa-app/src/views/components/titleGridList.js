import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/SearchRounded';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  
});



 
class TitlebarGridList extends React.Component{ 

  handleClick = (event)=>{
    event.preventDefault();
    // console.log(event.target.tagName)
    let json = event.target.value
    // console.log(json)
    this.props.handleImageClick(json);
  }
    render(){
      const{classes} = this.props;
      const tileData = this.props.tileData;

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" cols={4}  style={{ height: 'auto' }}>
          <ListSubheader component="div">{tileData.length>0?<p>Images</p>:null}</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          tile.data[0].media_type === 'image'?
          <GridListTile key={tile.data[0].nasa_id} >
            <img src={tile.links[0].href} alt={tile.data[0].title} />
            <GridListTileBar
              title={tile.data[0].title}
              subtitle={<span>by: {tile.data[0].photographer?tile.data[0].photographer:'NASA'}</span>}
              actionIcon={
                <IconButton className={classes.icon + " searchIcon"} onClick = {this.handleClick} value = {JSON.stringify(tile)}>
                  <InfoIcon onClick = {(e)=>{e.preventDefault(); e.stopPropagation()}} />
                </IconButton>
              }
            /> 
          </GridListTile>:null
        ))}
      </GridList>
    </div>
  );
}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);