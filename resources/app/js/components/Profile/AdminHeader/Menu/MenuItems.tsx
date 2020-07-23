import * as React from 'react';
import c from 'classnames';
import {NavLink} from 'react-router-dom';


interface IMenuItems {
	isOpen: boolean
}

const MenuItems: React.FC<IMenuItems> = (props) => (
	<div className={c('admHeader__menu', {active: props.isOpen})}>
		<div className="admHeader__divider">Navigation menu</div>

		<NavLink to='/profile/' activeClassName='admHeader__item_active' exact>
			<div className="admHeader__item">
				<i className="fas fa-user admHeader__icon"/>
				<span>Profile</span>
			</div>
		</NavLink>

		<NavLink to='/profile/orders' activeClassName='admHeader__item_active' exact>
			<div className="admHeader__item">
				<i className="fas fa-shopping-cart admHeader__icon"/>
				<span>Orders</span>
			</div>
		</NavLink>

		<NavLink to='/profile/favorite' activeClassName='admHeader__item_active' exact>
			<div className="admHeader__item">
				<i className="fas fa-star admHeader__icon"/>
				<span>Favorite</span>
			</div>
		</NavLink>

		<NavLink to='/profile/reviews' activeClassName='admHeader__item_active' exact>
			<div className="admHeader__item">
				<i className="fas fa-comments admHeader__icon"/>
				<span>Reviews</span>
			</div>
		</NavLink>

		<NavLink to='/profile/settings' activeClassName='admHeader__item_active' exact>
			<div className="admHeader__item">
				<i className="fas fa-cog admHeader__icon"/>
				<span>Settings</span>
			</div>
		</NavLink>

	</div>
);

export default MenuItems;
