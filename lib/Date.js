'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by steve on 22/12/15.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var utils = require('./utils');
var classNames = require('classnames');

/**
 * There is no default number picker as part of Material-UI.
 * Instead, use a TextField and validate.
 */
var Date = function (_React$Component) {
    _inherits(Date, _React$Component);

    function Date(props) {
        _classCallCheck(this, Date);

        var _this = _possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).call(this, props));

        _this.onDatePicked = _this.onDatePicked.bind(_this);
        return _this;
    }

    _createClass(Date, [{
        key: 'onDatePicked',
        value: function onDatePicked(empty, date) {
            this.props.onChangeValidate(date);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = null;
            if (this.props && this.props.value) {
                value = this.props.value;
            }

            return _react2.default.createElement(
                'div',
                { style: { width: '100%', display: 'block' }, className: this.props.form.htmlClass },
                _react2.default.createElement(_TextField2.default, {
                    id: 'datetime-local',
                    label: this.props.form.title,
                    type: 'datetime-local',
                    value: value,
                    onChange: this.onDatePicked,
                    onShow: null,
                    onDismiss: null,
                    style: this.props.form.style || { width: '90%', display: 'inline-block' } }),
                'disabled=',
                this.props.form.readonly,
                'InputLabelProps=',
                {
                    shrink: true
                },
                '/>'
            );
        }
    }]);

    return Date;
}(_react2.default.Component);

exports.default = (0, _ComposedComponent2.default)(Date);