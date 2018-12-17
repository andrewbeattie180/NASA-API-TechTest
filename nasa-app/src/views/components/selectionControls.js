import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchLabels extends React.Component {

handleChange = (name) => (e)=>{
    e.preventDefault();
    let status = e.target.checked;
    this.props.handleToggle(name,status);
    }
    

  render() {
    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={this.props.imagesChecked}
              onChange={this.handleChange('imagesChecked')}
              value="imagesChecked"
            />
          }
          label="Images"
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.props.audioChecked}
              onChange={this.handleChange('audioChecked')}
              value="audioChecked"
              color="primary"
            />
          }
          label="Audio"
        />
      </FormGroup>
    );
  }
}


export default SwitchLabels;