import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';

import LoginPage from './LoginPage/';
import RegisterPage from './RegisterPage/';
import NotFoundPage from './NotFoundPage/';
import HomePage from './HomePage/';
import CartPage from './CartPage/';
import ResetPage from './ResetPage/';
import CategoriesPage from './CategoriesPage/';
import CheckoutPage from './CheckoutPage/';
import SinglePage from './SinglePage/';
import VerifyPage from './VerifyPage';
import ChangePage from './ChangePasswordPage';
import SearchPage from './SearchPage';
import ResendPage from './ResendPage';


const Content: React.FC<{}> = () => (
	<React.Fragment>
		<Header/>

		<Switch>
			<Route path='/' exact component={HomePage}/>
			<Route path='/login' exact component={LoginPage}/>
			<Route path='/register' exact component={RegisterPage}/>
			<Route path='/verify/:id' exact component={VerifyPage}/>
			<Route path='/reset' exact component={ResetPage}/>
			<Route path='/reset/:id' exact component={ChangePage}/>
			<Route path='/resend' exact component={ResendPage}/>

			<Route path='/cart' exact component={CartPage}/>
			<Route path='/categories' exact component={CategoriesPage}/>
			<Route path='/checkout' exact component={CheckoutPage}/>
			<Route path='/products/:slug' exact component={SinglePage}/>
			<Route path='/search' exact component={SearchPage}/>

			<Route path='/' component={NotFoundPage}/>
		</Switch>

		{/*<Newsletter/>*/}
		<Footer/>
	</React.Fragment>
);

export default Content;
