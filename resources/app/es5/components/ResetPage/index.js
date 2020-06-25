"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Paginate_1 = require("../Paginate");
var ResetForm_1 = require("./ResetForm");
var ResetPage = function () {
    React.useEffect(function () {
        document.title = 'Reset password';
    }, []);
    var onSubmit = function (vals) {
        console.log(vals);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Paginate_1.default, { paths: [
                { name: 'Home', path: '/' },
                { name: 'Reset password', path: '/reset' }
            ] }),
        React.createElement(ResetForm_1.default, { onSubmit: onSubmit })));
};
exports.default = ResetPage;

//# sourceMappingURL=index.js.map
