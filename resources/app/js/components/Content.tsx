import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import LoginPage from './LoginPage/';
import RegisterPage from './RegisterPage/';
import NotFoundPage from './NotFoundPage/';
import HomePage from './HomePage/';
import CartPage from './CartPage/';
import ResetPage from './ResetPage/';
import CategoriesPage from './CategoriesPage/';
import CheckoutPage from './CheckoutPage/';
import SinglePage from './SinglePage/';


const Content: React.FC<{}> = () => (
	<Switch>
		<Route path='/' exact component={HomePage}/>
		<Route path='/login' exact component={LoginPage}/>
		<Route path='/register' exact component={RegisterPage}/>
		<Route path='/cart' exact component={CartPage}/>
		<Route path='/reset' exact component={ResetPage}/>
		<Route path='/categories' exact component={CategoriesPage}/>
		<Route path='/checkout' exact component={CheckoutPage}/>
		<Route path='/products/:slug' exact component={SinglePage}/>

		<Route path='/' component={NotFoundPage}/>
	</Switch>
);

export default Content;
