import * as React from 'react';
import { Link } from 'react-router-dom';
var Questions = function () { return (React.createElement("div", { className: "container" },
    React.createElement("div", { className: "questions my-pad" },
        React.createElement("div", { className: "question" },
            React.createElement("div", { className: "question__text" },
                "Returning customer ?",
                React.createElement(Link, { to: "/login" }, "Click here to login."))),
        React.createElement("div", { className: "question" },
            React.createElement("div", { className: "question__text" },
                "Have a coupon ?",
                React.createElement("a", { href: "#" }, "Click here to enter.")))))); };
export default Questions;
//# sourceMappingURL=Questions.js.map