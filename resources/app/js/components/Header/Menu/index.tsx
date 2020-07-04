import * as React from 'react';
import c from 'classnames';
import {Link} from 'react-router-dom';

//My components
import Cart from './Cart';
import Search from './Search';
import Burger from './Burger';


const Menu: React.FC<{}> = () => {
	const [openMenu, changeMenu] = React.useState('');
	const [isBurgerOpen, changeBurger] = React.useState(false);

	const menuClasses = c('header__links', {
		active: isBurgerOpen
	});

	return (
		<nav className="header__menu">
			<div className={menuClasses}>
				<Link to="/" className="header__item">
					Home
				</Link>

				<Link to="/categories" className="header__item">
					Categories
				</Link>

				<Link to="/login" className="header__item">
					Login
				</Link>

				<Link to="/register" className="header__item">
					Register
				</Link>
			</div>

			<div className="header__icons">
				<Cart openMenu={openMenu} changeOpen={changeMenu}/>
				<Search openMenu={openMenu} changeOpen={changeMenu}/>
			</div>

			<Burger isOpen={isBurgerOpen} changeOpen={changeBurger}/>
		</nav>
	);
};

export default Menu;
