import * as React from 'react';

import ProfileInfo from './ProfileInfo';
import FavoriteProducts from './FavoriteProducts';


const ProfilePage: React.FC<{}> = () => (
	<div className="admContent">
		<ProfileInfo/>
		<FavoriteProducts/>
	</div>
);

export default ProfilePage;
