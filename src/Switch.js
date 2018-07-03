import React, { Component } from 'react';
import ComposedComponent from './ComposedComponent';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

class FormSwitch extends Component {
  state = {
    value:this.props.value || false,

  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.onChangeValidate(event);
  };

  render() {

    return (
      <div className={this.props.form.className}>
        <FormControlLabel
          control={
            <Switch
               name={this.props.form.key.slice(-1)[0]}
               value={this.props.form.key.slice(-1)[0]}
               checked={this.state.value}
               disabled={this.props.form.readonly}
               onChange={this.handleChange('value')}
            />
          }
          label={this.props.form.title}
        />
     </div>
    );
  }
}

export default ComposedComponent(FormSwitch);
