import * as React from 'react';


interface CartItem{
	product: {
		name: string,
		price: number
	},
	count: number,
	size: string
}

const mockData: Array<CartItem> = [{
	product: {
		name: 'T-Shirt',
		price: 45
	},
	count: 2,
	size: 'M'
}, {
	product: {
		name: 'Something',
		price: 50
	},
	count: 1,
	size: 'M'
}];

const CartList: React.FC<{}> = () => (
	<ul className="header__product-list">
		{!mockData.length && <b>Нет товаров</b>}

		{mockData.map((data, index) => (
			<li className="header__product-item" key={index}>
				<span>{data.product.name} x {data.count}</span>
				<span>${(data.product.price * data.count).toFixed(2)}</span>
				<span>&times;</span>
			</li>
		))}

		{mockData.length &&
			<li className="header__product-item">
				<b>Total</b>
				<span/>
				<b>${
					mockData.reduce((prev, data) => (
						prev + data.product.price * data.count
					), 0).toFixed(2)
				}</b>
			</li>
		}
	</ul>
);

export default CartList;
