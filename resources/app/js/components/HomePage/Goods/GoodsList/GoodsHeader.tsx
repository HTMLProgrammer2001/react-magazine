import * as React from 'react';

import GoodsHeaderForm, {IHeaderFormData} from './GoodsHeaderForm';


type IGoodsHeaderProps = {
	loaded: number,
	total: number
}

const GoodsHeader: React.FC<IGoodsHeaderProps> = (props) => (
	<div className="goods__head">
		<div className="goods__head-count">
			Showing {props.loaded} of {props.total} products
		</div>

		<GoodsHeaderForm onSubmit={(vals: IHeaderFormData) => {
			console.log('HeaderForm:', vals);
		}}/>
	</div>
);

export default GoodsHeader;
