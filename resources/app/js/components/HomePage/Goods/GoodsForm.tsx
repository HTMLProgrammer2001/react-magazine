import * as React from 'react';


const GoodsForm: React.FC<{}> = () => (
	<div className="goods__form">
		<div className="goods__form-head">Product Categories</div>
		<div className="goods__categories">
			<ul className="goods__categories-list">
				<li className="goods__categories-item">
					<div className="checkbox">
						<label className="checkbox__label">
							<input className="checkbox__elem" type="checkbox" name="create"/>
							<span>T-Shirt test</span>
						</label>
					</div>
				</li>
				<li className="goods__categories-item">
					<div className="checkbox">
						<label className="checkbox__label">
							<input className="checkbox__elem" type="checkbox" name="create"/>
							<span>T-Shirt test</span>
						</label>
					</div>
				</li>
				<li className="goods__categories-item">
					<div className="checkbox">
						<label className="checkbox__label">
							<input className="checkbox__elem" type="checkbox" name="create"/>
							<span>T-Shirt test</span>
						</label>
					</div>
				</li>
			</ul>
		</div>
		<div className="goods__form-head">Filter by color</div>
		<div className="goods__color">
			<div className="goods__color-item goods__color-item_red"/>
			<div className="goods__color-item goods__color-item_green"/>
			<div className="goods__color-item goods__color-item_blue"/>
			<div className="goods__color-item goods__color-item_purple goods__color-item_active"/>
			<div className="goods__color-item goods__color-item_yellow"/>
			<div className="goods__color-item goods__color-item_black"/>
		</div>
		<div className="goods__form-head">Filter by size</div>
		<ul className="goods__size">
			<li className="goods__size-item">XS</li>
			<li className="goods__size-item goods__size-item_active">S</li>
			<li className="goods__size-item">M</li>
			<li className="goods__size-item">L</li>
			<li className="goods__size-item">XL</li>
		</ul>
		<div className="goods__form-head">Filter by price</div>
		<div className="goods__price">
			<div className="goods__price-point left"/>
			<div className="goods__price-indicator"/>
			<div className="goods__price-point right"/>
		</div>
		<div className="goods__price-range">Price: $5 - $100</div>
		<button className="goods__form-button">Filter</button>
	</div>
);

export default GoodsForm;
