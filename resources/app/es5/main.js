"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var App_1 = require("./components/App");
var Reducers_1 = require("./redux/Reducers/");
var store = redux_1.createStore(Reducers_1.default);
myStore = store;
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.default, null)), document.querySelector('#root'));

//# sourceMappingURL=main.js.map
