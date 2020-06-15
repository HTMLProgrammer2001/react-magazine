import * as React from 'react';
import c from 'classnames';

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
				<a className="header__item" href="#">Home</a>
				<a className="header__item" href="#">Categories</a>
				<a className="header__item" href="#">Profile</a>
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
