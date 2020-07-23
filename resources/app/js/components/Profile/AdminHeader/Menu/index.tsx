import * as React from 'react';

import Burger from '../../../Header/Menu/Burger';
import MenuItems from './MenuItems';


const Menu: React.FC<{}> = () => {
	const [isOpen, changeOpen] = React.useState(false);

	return (
		<React.Fragment>
			<Burger isOpen={isOpen} changeOpen={changeOpen}/>
			<MenuItems isOpen={isOpen}/>
		</React.Fragment>
	);
};

export default Menu;
