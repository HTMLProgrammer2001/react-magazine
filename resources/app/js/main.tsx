import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';
import reducer from './redux/';

let store = createStore(reducer);

window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector('#root'));
