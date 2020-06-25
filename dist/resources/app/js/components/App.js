import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/';
import Footer from './Footer';
import Content from './Content';
import Newsletter from './Newsletter';
var App = function () { return (React.createElement(Router, null,
    React.createElement(Header, null),
    React.createElement(Content, null),
    React.createElement(Newsletter, null),
    React.createElement(Footer, null))); };
export default App;
//# sourceMappingURL=App.js.map