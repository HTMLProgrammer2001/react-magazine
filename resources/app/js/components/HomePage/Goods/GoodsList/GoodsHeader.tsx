import * as React from 'react';


type IGoodsHeaderProps = {
	loaded: number,
	total: number
}

const GoodsHeader: React.FC<IGoodsHeaderProps> = (props) => (
	<div className="goods__head">
		<div className="goods__head-count">
			Showing {props.loaded} of {props.total} products
		</div>

		<div/>
	</div>
);

export default GoodsHeader;
