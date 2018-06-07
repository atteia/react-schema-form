/**
 * Created by steve on 22/12/15.
 */
import React from 'react';
var utils = require('./utils');
var classNames = require('classnames');
import ComposedComponent from './ComposedComponent';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Clear from 'material-ui-icons/Clear';

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
class Date extends React.Component {

    constructor(props) {
        super(props);
        this.onDatePicked = this.onDatePicked.bind(this);
    }


    onDatePicked(empty, date) {
        this.props.onChangeValidate(date);
    }

    render() {
        var value = null;
        if (this.props && this.props.value) {
            value = this.props.value;
        }

        return (
            <div style={{width: '100%', display: 'block'}} className={this.props.form.htmlClass}>
                <TextField
                      id="datetime-local"
                      label={this.props.form.title}
                      type="datetime-local"
                      value={value}
                      onChange={this.onDatePicked}
                      onShow={null}
                      onDismiss={null}
                      style={this.props.form.style || {width: '90%', display: 'inline-block'}}/>
                      disabled={this.props.form.readonly}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
            </div>
        );
    }
}

export default ComposedComponent(Date);
