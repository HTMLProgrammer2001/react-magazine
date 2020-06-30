"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Footer = function () { return (React.createElement("footer", { className: "footer" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "footer__content" },
            React.createElement("div", { className: "footer__info" },
                React.createElement("img", { className: "footer__logo", src: "./image/logo.png", alt: "Logo" }),
                React.createElement("div", { className: "footer__info-content" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cumque debitis deleniti doloribus earum error id iure, laborum neque nisi odit, possimus quaerat temporibus totam. Aspernatur atque corporis ut!")),
            React.createElement("div", { className: "footer__links" },
                React.createElement("div", { className: "footer__links-head" }, "Useful links"),
                React.createElement("ul", { className: "footer__links-list" },
                    React.createElement(react_router_dom_1.Link, { to: "/", className: "footer__links-item" },
                        React.createElement("li", null, "Home")),
                    React.createElement(react_router_dom_1.Link, { to: "/checkout", className: "footer__links-item" },
                        React.createElement("li", null, "Checkout")),
                    React.createElement(react_router_dom_1.Link, { to: "/profile", className: "footer__links-item" },
                        React.createElement("li", null, "My account")),
                    React.createElement("a", { className: "footer__links-item", href: "#" },
                        React.createElement("li", null, "Man fashion")),
                    React.createElement("a", { className: "footer__links-item", href: "#" },
                        React.createElement("li", null, "Women fashion")),
                    React.createElement(react_router_dom_1.Link, { to: "/cart", className: "footer__links-item" },
                        React.createElement("li", null, "Cart")))),
            React.createElement("div", { className: "footer__contacts" },
                React.createElement("div", { className: "footer__links-head" }, "Contact us"),
                React.createElement("div", { className: "footer__contacts-list" },
                    React.createElement("div", { className: "footer__contacts-item" },
                        React.createElement("i", { className: "fas fa-envelope" }),
                        React.createElement("a", { className: "footer__contacts-link", href: "mailto:cssuperpy@gmail.com" }, "cssuperpy@gmail.com")),
                    React.createElement("div", { className: "footer__contacts-item" },
                        React.createElement("i", { className: "fas fa-phone-alt" }),
                        React.createElement("a", { className: "footer__contacts-link", href: "tel:+7043345544" }, "+7043345435543")),
                    React.createElement("div", { className: "footer__contacts-item" },
                        React.createElement("i", { className: "fas fa-link" }),
                        React.createElement("a", { className: "footer__contacts-link", href: "https://htmlprogrammer.ru" }, "htmlprogrammer.ru")))))),
    React.createElement("hr", null),
    React.createElement("div", { className: "footer__copy" },
        "Copyright ",
        new Date().getFullYear()))); };
exports.default = Footer;

//# sourceMappingURL=Footer.js.map
