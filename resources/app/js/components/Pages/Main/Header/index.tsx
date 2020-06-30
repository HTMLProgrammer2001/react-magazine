import * as React from 'react';

//My components
import Logo from './Logo';
import Menu from './Menu';

const Header: React.FC<{}> = () => (
	<header className="header">
		<div className="container">
			<Logo/>
			<Menu/>
		</div>
	</header>
);

export default Header;
