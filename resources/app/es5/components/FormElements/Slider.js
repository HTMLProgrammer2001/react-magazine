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
var connected = react_redux_1.connect();
var SliderElement = (function (_super) {
    __extends(SliderElement, _super);
    function SliderElement(props) {
        var _this = _super.call(this, props) || this;
        _this.parent = React.createRef();
        _this.indicator = React.createRef();
        _this.left = React.createRef();
        _this.right = React.createRef();
        _this.state = {
            which: null,
            left: 0,
            right: 0
        };
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        return _this;
    }
    SliderElement.prototype.componentDidMount = function () {
        var _a = this.props, min = _a.min, max = _a.max, value = _a.input.value;
        var leftPosition = (value.from - min) / (max - min) * 100;
        var rightPosition = (value.to - min) / (max - min) * 100;
        this.setState({
            left: leftPosition,
            right: rightPosition
        });
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };
    SliderElement.prototype.componentDidUpdate = function () {
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
        console.log(which);
    };
    SliderElement.prototype.onMouseMove = function (event) {
        if (!this.state.which) {
            return;
        }
        var _a = this.props, min = _a.min, max = _a.max, dispatch = _a.dispatch;
        var parentBox = this.parent.current.getBoundingClientRect();
        var newPos = (event.clientX - parentBox.left) / parentBox.width * 100;
        if (this.state.which == 'left' && newPos < this.state.right - 5) {
            this.setState({
                left: newPos < 0 ? 0 : newPos
            });
        }
        else if (this.state.which == 'right' && newPos > this.state.left + 5) {
            this.setState({
                right: 100 - (newPos > 100 ? 100 : newPos)
            });
        }
        dispatch(redux_form_1.change('productFilter', 'priceRange', {
            from: this.state.left / 100 * (max - min) + min,
            to: (100 - this.state.right) / 100 * (max - min) + min
        }));
    };
    SliderElement.prototype.onMouseUp = function () {
        this.setState({
            which: null
        });
    };
    SliderElement.prototype.positeSlider = function () {
        this.left.current.style.left = this.state.left + "%";
        this.right.current.style.right = this.state.right + "%";
        this.indicator.current.style.left = this.state.left + "%";
        this.indicator.current.style.right = this.state.right + "%";
    };
    return SliderElement;
}(React.Component));
exports.default = connected(SliderElement);

//# sourceMappingURL=Slider.js.map
