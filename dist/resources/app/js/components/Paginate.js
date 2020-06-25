import * as React from 'react';
import { Link } from 'react-router-dom';
var Paginate = function (props) { return (React.createElement("div", { className: "paginate" },
    React.createElement("div", { className: "container" },
        React.createElement("div", { className: "paginate__content" },
            React.createElement("div", { className: "paginate__name" }, "SHOP SIDEBAR"),
            React.createElement("div", { className: "paginate__path" }, props.paths.map(function (item) { return (React.createElement(Link, { to: item.path, key: item.path, className: 'paginate__item' }, item.name)); })))))); };
export default Paginate;
//# sourceMappingURL=Paginate.js.map