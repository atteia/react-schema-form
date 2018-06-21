/**
 * Created by steve on 15/09/15.
 */
import React from 'react';
import ComposedComponent from './ComposedComponent';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
});

class TextArea extends React.Component {

    render() {
      const { classes } = this.props;
        // FIXME: Obviously fix rowsMax eventually..
        //console.log('TextArea', this.props.form);
        return (
            <div className={this.props.form.htmlClass}>
                <TextField
                  multiline
                  label={this.props.form.title}
                  placeholder={this.props.form.placeholder}
                  helperText={this.props.error}
                  error={(this.props.error)? true : false}
                  onChange={this.props.onChangeValidate}
                  defaultValue={this.props.value}
                  disabled={this.props.form.readonly}
                  style={this.props.form.style || {width: '100%'}}
                  rows={this.props.form.rows || 4}
                  rowsMax={this.props.form.rowsMax}
                />
            </div>
        );
    }
}

export default withStyles(styles)(ComposedComponent(TextArea));
