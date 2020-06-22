import * as React from 'react';

import GoodsItems from './GoodsList/';
import GoodsForm from './GoodsForm';


const Goods: React.FC<{}> = () => (
	<div className="goods">
		<div className="container">
			<GoodsItems/>
			<GoodsForm/>
		</div>
	</div>
);

export default Goods;
