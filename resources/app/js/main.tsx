import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducer from './redux/Reducers/';

declare let myStore: any;

let store = createStore(reducer, applyMiddleware(thunk));

myStore = store;

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector('#root'));
