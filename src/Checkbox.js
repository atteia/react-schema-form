/**
 * Created by steve on 20/09/15.
 */
import React from 'react';
import ComposedComponent from './ComposedComponent';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';

class Checkbox2 extends React.Component {
    render() {
        return (
            <div className={this.props.form.className}>
              <FormControlLabel
                control={
                    <Checkbox
                        name={this.props.form.key.slice(-1)[0]}
                        value={this.props.form.key.slice(-1)[0]}
                        checked={this.props.value || false}
                        disabled={this.props.form.readonly}
                        color={this.props.form.color || "primary"}
                        onChange={(e, checked) => {this.props.onChangeValidate(e)}}
                        />
                }
                label={this.props.form.title}
              />
             </div>
        );
    }
}

export default ComposedComponent(Checkbox2);
