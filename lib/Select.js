'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _MenuItem = require('material-ui/Menu/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Select = require('material-ui/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Form = require('material-ui/Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by steve on 15/09/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var uid = function uid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) {
        return (a ^ Math.random() * 16 >> a / 4).toString(16);
    });
};

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.onSelected = _this.onSelected.bind(_this);
        var possibleValue = _this.getModelKey(_this.props.model, _this.props.form.key);
        _this.state = {
            currentValue: _this.props.model !== undefined && possibleValue ? possibleValue : _this.props.form.titleMap != null ? _this.props.form.titleMap[0].value : ''
        };
        return _this;
    }

    _createClass(Select, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.model && nextProps.form.key) {
                this.setState({
                    currentValue: this.getModelKey(nextProps.model, nextProps.form.key) || (nextProps.form.titleMap != null ? nextProps.form.titleMap[0].value : '')
                });
            }
        }
    }, {
        key: 'getModelKey',
        value: function getModelKey(model, key) {
            if (Array.isArray(key)) {
                return key.reduce(function (cur, nxt) {
                    return cur[nxt] || {};
                }, model);
            } else {
                return model[key];
            }
        }
    }, {
        key: 'onSelected',
        value: function onSelected(event, selectedIndex, menuItem) {

            this.setState({
                currentValue: menuItem
            });
            event.target.value = menuItem;
            this.props.onChangeValidate(event);
        }
    }, {
        key: 'render',
        value: function render() {

            var menuItems = this.props.form.titleMap.map(function (item, idx) {
                return _react2.default.createElement(
                    _MenuItem2.default,
                    {
                        key: idx,
                        value: item.value
                    },
                    _react2.default.createElement(
                        _Typography2.default,
                        null,
                        item.name
                    )
                );
            });
            var theUid = uid();

            return _react2.default.createElement(
                'div',
                { className: this.props.form.htmlClass },
                _react2.default.createElement(
                    _Form.FormControl,
                    null,
                    _react2.default.createElement(
                        _Input.InputLabel,
                        { htmlFor: 'dropdown-' + theUid },
                        this.props.form.title
                    ),
                    _react2.default.createElement(
                        _Select2.default,
                        {
                            input: _react2.default.createElement(_Input2.default, { id: 'dropdown-' + theUid }),
                            value: this.state.currentValue,
                            onChange: this.onSelected,
                            style: { width: '150px' },
                            disabled: this.props.form.readonly,
                            fullWidth: true
                        },
                        menuItems
                    )
                )
            );
        }
    }]);

    return Select;
}(_react2.default.Component);

// Select.propTypes = {
//
// };

exports.default = (0, _ComposedComponent2.default)(Select);