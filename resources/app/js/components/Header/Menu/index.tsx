import * as React from 'react';
import c from 'classnames';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

//My components
import Cart from './Cart';
import Search from './Search/';
import Burger from './Burger';
import {RootState} from '../../../redux';
import thunkLogout from '../../../redux/logout/thunks';
import {selectUserState} from '../../../redux/AppState/user/selectors';


const mapStateToProps = (state: RootState) => ({
	userData: selectUserState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	logout: () => {
		dispatch(thunkLogout());
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

const Menu: React.FC<ConnectedProps<typeof connected>> = (props) => {
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

				{
					props.userData.user ?
						<a
							href="#"
						   className="header__item"
							onClick={props.logout}
						>Log out</a> :

						<React.Fragment>
							<Link to="/login" className="header__item">
								Login
							</Link>

							<Link to="/register" className="header__item">
								Register
							</Link>
						</React.Fragment>
				}
			</div>

			<div className="header__icons">
				<Cart openMenu={openMenu} changeOpen={changeMenu}/>
				<Search openMenu={openMenu} changeOpen={changeMenu}/>
			</div>

			<Burger isOpen={isBurgerOpen} changeOpen={changeBurger}/>
		</nav>
	);
};

export default connected(Menu);
