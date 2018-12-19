import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  card: {
    width: 700,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class CurrentImageModal extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleClose = (e)=>{
      e.preventDefault();
      this.props.handleClose();
  }
  render() {
    const { classes } = this.props;
    const currentImageArray = this.props.currentImage;
    return (
      <Card className={classes.card=' modal'}>
        <CardHeader
          
          action={
            <IconButton>
              <CloseIcon onClick = {this.handleClose}/>
            </IconButton>
          }
          title={currentImageArray[3]}
          subheader={'Date created: '+currentImageArray[4]}
        />
        <CardMedia
          className={classes.media}
          image={currentImageArray[1]}
          title={currentImageArray[3]}
        />
        <CardContent>
          <Typography component="p">
            {currentImageArray[2]}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

CurrentImageModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentImageModal);