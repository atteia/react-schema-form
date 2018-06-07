/**
 * Created by steve on 15/09/15.
 */
import React from 'react';
import ComposedComponent from './ComposedComponent';
import MenuItem from 'material-ui/Menu/MenuItem';
import SelectField from 'material-ui/Select';
import Typography from 'material-ui/Typography';
import Input, { InputLabel } from 'material-ui/Input';

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
        var possibleValue = this.getModelKey(this.props.model, this.props.form.key);
        this.state = {
            currentValue: this.props.model !== undefined && possibleValue ? possibleValue : this.props.form.titleMap != null ? this.props.form.titleMap[0].value : ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.model && nextProps.form.key) {
            this.setState({
                currentValue: this.getModelKey(nextProps.model, nextProps.form.key)
                || (nextProps.form.titleMap != null ? nextProps.form.titleMap[0].value : '')
            });
        }
    }

    getModelKey(model, key) {
        if (Array.isArray(key)) {
            return key.reduce((cur, nxt) => (cur[nxt] || {}), model);
        } else {
            return model[key];
        }
    }

    onSelected(event, selectedIndex, menuItem) {

        this.setState({
            currentValue: menuItem
        });
        event.target.value = menuItem;
        this.props.onChangeValidate(event);
    }

    render() {
        const menuItems = this.props.form.titleMap.map((item, idx) => (
          <MenuItem
            	key={idx}
              value={item.value}
            >
              <Typography>
            	  {item.name}
              </Typography>
          </MenuItem>
        ));

        return (
            <div className={this.props.form.htmlClass}>
               <FormControl>
                  <InputLabel htmlFor={`dropdown-${theUid}`}>{this.props.form.title}</InputLabel>
                  <SelectField
                    value={this.state.currentValue}
                    onChange={this.onSelected}
                    style={{width: '150px'}}
                    disabled={this.props.form.readonly}
                    fullWidth
                      >

                      {menuItems}
                  </SelectField>
              </FormControl>
            </div>
        );
    }
}

// Select.propTypes = {
//
// };

export default ComposedComponent(Select);
