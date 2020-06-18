import * as React from 'react';


const Payment: React.FC<{}> = () => (
	<div className="container">
		<div className="payment my-pad row">
			<div className="payment__order">
				<div className="payment__head">My Order</div>
				<div className="payment__order-list">
					<div className="payment__order-item">
						<b>Product</b><b>Total</b>
					</div>

					<div className="payment__order-item">
						<span>Fine Knit Hat x1</span>
						<span>$45.00</span>
					</div>

					<div className="payment__order-item">
						<span>Fine Knit Hat x1</span>
						<span>$45.00</span>
					</div>

					<div className="payment__order-item">
						<span>Shipping</span>
						<span>FREE SHIPPING</span>
					</div>

					<div className="payment__order-item">
						<b>Total</b>
						<b>$90.00</b>
					</div>
				</div>
			</div>
			<div className="payment__types">
				<div className="payment__head">Payment</div>
				<div className="payment__type">
					<div className="radio">
						<input
							className="radio__elem"
							type="radio"
							id="paypal"
							name="payment"
							checked
						/>

						<label className="radio__label" htmlFor="paypal">
							<span>Paypal</span>
						</label>
					</div>
					<div className="payment__content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
						assumenda at atque culpa dolore dolorem esse eum facere laboriosam minima
						modi natus neque odio,
						officiis reiciendis ullam voluptas voluptatem voluptatibus?
					</div>
				</div>
				<div className="payment__type">
					<div className="radio">
						<input className="radio__elem" type="radio" id="bank" name="payment"/>
						<label className="radio__label" htmlFor="bank">
							<span>Direct Bank Transfer</span>
						</label>
					</div>
					<div className="payment__content hidden">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Aperiam assumenda at atque culpa dolore dolorem esse eum facere laboriosam
						minima modi natus
						neque odio, officiis reiciendis ullam voluptas voluptatem voluptatibus?
					</div>
				</div>
				<div className="payment__type">
					<div className="radio">
						<input className="radio__elem" type="radio" id="deliver" name="payment"/>
						<label className="radio__label" htmlFor="deliver">
							<span>Carsh on delivery</span>
						</label>
					</div>
					<div className="payment__content hidden">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Aperiam assumenda at atque culpa dolore dolorem esse eum facere
						laboriosam minima modi natus
						neque odio, officiis reiciendis ullam voluptas voluptatem voluptatibus?
					</div>
				</div>
			</div>
		</div>
		<div className="space-between row mb-10">
			<div/>
			<button type="submit" className="check__but">Place order</button>
		</div>
	</div>
);

export default Payment;
