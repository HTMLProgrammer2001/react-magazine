import * as React from 'react';
import c from 'classnames';
import {Link} from 'react-router-dom';


const UserDropdown: React.FC<{}> = () => {
	const [isOpen, changeOpen] = React.useState(false);

	return (
		<div className={c('row cur dropdown', {
			active: isOpen
		})}>
			<div
				className="admHeader__user dropdown__elem"
				onClick={() => changeOpen(!isOpen)}
			>
				<div className="admHeader__name">
					<span>Yuri Prisyazhny</span>
				</div>

				<img className="admHeader__photo" src="/image/noAva.jpg"/>
				<i className="fas fa-sort-down ml-1"/>
			</div>

			<div className="dropdown__body">
				<div className="dropdown__content">
					<ul className="menu__list">
						<li className="menu__item">
							<Link to='/profile'>Profile</Link>
						</li>

						<li className="menu__item">
							<Link to='/profile/settings'>Settings</Link>
						</li>

						<li className="menu__item">
							<Link to='/profile/orders'>Orders</Link>
						</li>

						<li className="menu__item">
							<Link to='/profile/favorite'>Favorite</Link>
						</li>

						<li className="menu__item">Log out</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UserDropdown;
