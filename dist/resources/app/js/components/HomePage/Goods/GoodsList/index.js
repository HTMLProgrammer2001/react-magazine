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
import * as React from 'react';
import GoodItem from './GoodItem';
var GoodsList = (function (_super) {
    __extends(GoodsList, _super);
    function GoodsList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            products: [],
            loaded: 0,
            total: 0,
            isLoading: false
        };
        return _this;
    }
    GoodsList.prototype.render = function () {
        if (this.state.isLoading) {
            return (React.createElement("div", { className: "goods__items" },
                React.createElement("div", null, "Loading products...")));
        }
        if (!this.state.isLoading && !this.state.loaded) {
            return (React.createElement("div", { className: "goods__items" },
                React.createElement("div", null, "No products that accept this filter")));
        }
        return (React.createElement("div", { className: "goods__items" },
            React.createElement("div", { className: "goods__head" },
                React.createElement("div", { className: "goods__head-count" },
                    "Showing ",
                    this.state.loaded,
                    " of ",
                    this.state.total,
                    " products"),
                React.createElement("div", { className: "select cur" },
                    React.createElement("select", { className: "select__input cur" },
                        React.createElement("option", null, "Featured products"),
                        React.createElement("option", null, "All")),
                    React.createElement("i", { className: "fas fa-chevron-down select__icon" }),
                    React.createElement("div", { className: "select__line" }))),
            React.createElement("div", { className: "goods__list" }, this.state.products.map(function (item) { return (React.createElement(GoodItem, { product: item, key: item.id })); })),
            this.state.total == this.state.loaded ?
                false :
                React.createElement("div", { className: "goods__list-load" },
                    React.createElement("button", { type: "button", className: "goods__list-more" }, "Load More"))));
    };
    return GoodsList;
}(React.Component));
export default GoodsList;
//# sourceMappingURL=index.js.map