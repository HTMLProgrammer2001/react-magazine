import * as React from 'react';

import Menu from './Menu';
import Logo from './Logo';
import UserDropdown from './UserDropdown';


const AdminHeader: React.FC<{}> = () => (
	<div className="admHeader">
		<div className="row">
			<Menu/>
			<Logo/>
		</div>

		<UserDropdown/>
	</div>
);

export default AdminHeader;
