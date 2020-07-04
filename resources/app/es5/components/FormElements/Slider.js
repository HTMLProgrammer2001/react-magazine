"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
var react_redux_1 = require("react-redux");
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    changeValue: function (name, newValue) {
        dispatch(redux_form_1.change(ownProps.formName, name, newValue));
    }
}); };
var connected = react_redux_1.connect(null, mapDispatchToProps);
var SliderElement = (function (_super) {
    __extends(SliderElement, _super);
    function SliderElement(props) {
        var _this = _super.call(this, props) || this;
        _this.parent = React.createRef();
        _this.indicator = React.createRef();
        _this.left = React.createRef();
        _this.right = React.createRef();
        _this.leftPosition = 0;
        _this.rightPosition = 0;
        _this.state = {
            which: null
        };
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        return _this;
    }
    SliderElement.prototype.componentDidMount = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.input.value;
        this.leftPosition = (value.from - min) / (max - min) * 100;
        this.rightPosition = 100 - (value.to - min) / (max - min) * 100;
        this.positeSlider();
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };
    SliderElement.prototype.componentDidUpdate = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.input.value;
        this.leftPosition = (value.from - min) / (max - min) * 100;
        this.rightPosition = 100 - (value.to - min) / (max - min) * 100;
        this.positeSlider();
    };
    SliderElement.prototype.render = function () {
        return (React.createElement("div", { className: "goods__price " + this.props.className, ref: this.parent },
            React.createElement("div", { className: "goods__price-point left", ref: this.left, onMouseDown: this.onMouseDown.bind(this, 'left') }),
            React.createElement("div", { className: "goods__price-indicator", ref: this.indicator }),
            React.createElement("div", { className: "goods__price-point right", ref: this.right, onMouseDown: this.onMouseDown.bind(this, 'right') })));
    };
    SliderElement.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
    SliderElement.prototype.onMouseDown = function (which) {
        if (which === void 0) { which = 'left'; }
        this.setState({
            which: which
        });
    };
    SliderElement.prototype.onMouseMove = function (event) {
        if (!this.state.which) {
            return;
        }
        var _a = this.props, min = _a.min, max = _a.max, value = _a.input.value;
        var parentBox = this.parent.current.getBoundingClientRect();
        var newPos = (event.clientX - parentBox.left) / parentBox.width * 100;
        console.log(this.props.input.name);
        if (this.state.which == 'left' && newPos < 95 - this.rightPosition) {
            newPos = newPos < 0 ? 0 : newPos;
            this.props.changeValue(this.props.input.name || 'priceRange', {
                from: newPos / 100 * (max - min),
                to: value.to
            });
        }
        else if (this.state.which == 'right' && newPos > this.leftPosition + 5) {
            newPos = newPos > 100 ? 100 : newPos;
            this.props.changeValue(this.props.name || 'priceRange', {
                from: value.from,
                to: newPos / 100 * (max - min)
            });
        }
    };
    SliderElement.prototype.onMouseUp = function () {
        this.setState({
            which: null
        });
    };
    SliderElement.prototype.positeSlider = function () {
        this.left.current.style.left = this.leftPosition + "%";
        this.right.current.style.right = this.rightPosition + "%";
        this.indicator.current.style.left = this.leftPosition + "%";
        this.indicator.current.style.right = this.rightPosition + "%";
    };
    return SliderElement;
}(React.Component));
exports.default = connected(SliderElement);

//# sourceMappingURL=Slider.js.map
