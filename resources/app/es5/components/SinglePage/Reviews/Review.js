"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Mark_1 = require("../../Mark");
var Review = function (_a) {
    var comment = _a.comment;
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { id: "comment_" + comment.id }),
        React.createElement("div", { className: "reviews-list__item row" },
            React.createElement("img", { className: "reviews__ava", src: comment.author.avatar, alt: "User ava" }),
            React.createElement("div", { className: "reviews-list__wrap" },
                React.createElement("div", { className: "reviews-list__name" },
                    React.createElement("p", null, comment.author.name),
                    React.createElement("div", { className: "reviews-list__icons" },
                        React.createElement("i", { className: "fas fa-link reviews-list__icon" }),
                        React.createElement("i", { className: "fas fa-exclamation-triangle reviews-list__icon" }))),
                React.createElement("div", { className: "my-1" },
                    React.createElement(Mark_1.default, { rating: comment.mark, fixed: true })),
                React.createElement("div", { className: "reviews-list__message" },
                    React.createElement("p", null, comment.text)),
                React.createElement("div", { className: "reviews-list__item-footer" },
                    React.createElement("div", { className: "reviews-list__item-mark" },
                        React.createElement("span", null,
                            React.createElement("i", { className: "fas fa-angle-up" }),
                            React.createElement("span", null,
                                "\u00A0",
                                comment.likes)),
                        React.createElement("span", null,
                            React.createElement("i", { className: "fas fa-angle-down" }),
                            React.createElement("span", null,
                                "\u00A0",
                                comment.dislikes))),
                    React.createElement("div", { className: "reviews-list__item-date" }, comment.date))))));
};
exports.default = Review;

//# sourceMappingURL=Review.js.map
