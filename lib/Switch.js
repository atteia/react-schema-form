'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _Form = require('material-ui/Form');

var _Switch = require('material-ui/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormSwitch = function (_Component) {
  _inherits(FormSwitch, _Component);

  function FormSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormSwitch.__proto__ || Object.getPrototypeOf(FormSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _this.props.value || false

    }, _this.handleChange = function (name) {
      return function (event) {
        _this.setState(_defineProperty({}, name, event.target.checked));
        _this.props.onChangeValidate(event);
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormSwitch, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: this.props.form.className },
        _react2.default.createElement(_Form.FormControlLabel, {
          control: _react2.default.createElement(_Switch2.default, {
            name: this.props.form.key.slice(-1)[0],
            value: this.props.form.key.slice(-1)[0],
            checked: this.state.value,
            disabled: this.props.form.readonly,
            onChange: this.handleChange('value')
          }),
          label: this.props.form.title
        })
      );
    }
  }]);

  return FormSwitch;
}(_react.Component);

exports.default = (0, _ComposedComponent2.default)(FormSwitch);