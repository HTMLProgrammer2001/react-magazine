import * as React from 'react';

import GoodsItems from './GoodsList/';
import GoodsForm, {IGoodsFormData} from './GoodsForm/';


const Goods: React.FC<{}> = () => (
	<div className="goods">
		<div className="container">
			<GoodsItems/>
			<GoodsForm onSubmit={(vals: IGoodsFormData) => console.log(vals)}/>
		</div>
	</div>
);

export default Goods;
