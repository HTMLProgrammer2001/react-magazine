import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux/Reducers/';
var store = createStore(reducer);
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.querySelector('#root'));
//# sourceMappingURL=main.js.map