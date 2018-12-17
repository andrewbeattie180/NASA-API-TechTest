import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwitchLabels from './selectionControls';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';

import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  margin: {
    margin: theme.spacing.unit,
  },
});



class OutlinedTextFields extends React.Component {

    componentDidMount() {
    this.forceUpdate();
  }

  textChange = (e) => {
    e.preventDefault();
    let textInput = e.target.value.toLowerCase();
    this.props.handleChange(textInput);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className = 'mainInputForm'>
      <form className={classes.container}
      noValidate autoComplete="off" >
        
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel
            ref={ref => {
              this.labelRef = ReactDOM.findDOMNode(ref);
            }}
            htmlFor="component-outlined">
                 Search Input      
            </InputLabel>
          
          <OutlinedInput
            id="component-outlined"
            value={classes.inputText}
            onChange={this.textChange}
            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
          />
        </FormControl>

        </form>
        <SwitchLabels 
        imagesChecked = {this.props.imagesChecked}
        audioChecked = {this.props.audioChecked}
        handleToggle = {this.props.handleToggle}/>
      </div>
     
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);