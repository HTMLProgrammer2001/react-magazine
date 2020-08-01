import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ToastContainer} from 'react-toastify';

import App from './components/App';
import reducer from './redux/';
import SaveCartMiddleware from './Helpers/Middlewares/SaveCartMiddleware';


let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, SaveCartMiddleware)));

ReactDOM.render(
	<Provider store={store}>
		<App/>

		<ToastContainer
			position="bottom-right"
			autoClose={5000}
			hideProgressBar={false}
			draggable
			pauseOnHover
		/>
	</Provider>,
	document.querySelector('#root'));
