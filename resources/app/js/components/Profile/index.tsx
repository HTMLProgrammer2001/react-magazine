import * as React from 'react';
import {Switch, Route} from 'react-router';

import AdminHeader from './AdminHeader';
import NotFoundPage from '../NotFoundPage';
import AdminFooter from './AdminFooter';

import IsAuthenticated from '../../HOC/IsAuthenticated';

import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import FavoritePage from './FavoritePage';
import OrdersPage from './OrdersPage';
import ReviewsPage from './ReviewsPage';
import SingleOrderPage from './SingleOrderPage';


const Content: React.FC<{}> = () => (
	<React.Fragment>
		<AdminHeader/>

		<Switch>
			<Route path='/profile' exact component={ProfilePage}/>
			<Route path='/profile/settings' exact component={SettingsPage}/>
			<Route path='/profile/favorite' exact component={FavoritePage}/>
			<Route path='/profile/orders' exact component={OrdersPage}/>
			<Route path='/profile/orders/:orderID' exact component={SingleOrderPage}/>
			<Route path='/profile/reviews' exact component={ReviewsPage}/>

			<Route path='/' component={NotFoundPage}/>
		</Switch>

		<AdminFooter/>
	</React.Fragment>
);

export default IsAuthenticated(true)<{}>(Content);
