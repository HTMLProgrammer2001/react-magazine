import * as React from 'react';


const OrdersPage: React.FC<{}> = () => (
	<div className="admContent">
		<div className="container">
			<div className="myOrders py-pad">
				<div className="pull-right">
					<span className="but but_outline">Continue shopping</span>
				</div>

				<h3>My orders</h3>

				<div className="myOrders__header my-pad">
					<span className="myOrders__find">
              			<div className="input">
                			<input className="input__elem" type="text" required/>
                			<label className="input__label">Find order</label>
                			<div className="input__line"/>
              			</div>
					</span>

					<div className="select cur">
						<select className="select__input cur">
							<option selected>Latest</option>
							<option>Newest</option>
						</select>

						<i className="fas fa-chevron-down select__icon"/>
						<div className="select__line"/>
					</div>
				</div>

				<div className="myOrders__types my-pad">
					<div className="radio">
						<label className="row">
							<input className="radio__elem" type="radio" name="filter"/>
							<span className="radio__label">All</span>
						</label>
					</div>

					<div className="radio">
						<label className="row">
							<input className="radio__elem" type="radio" name="filter"/>
							<span className="radio__label">Finished</span>
						</label>
					</div>

					<div className="radio">
						<label className="row">
							<input className="radio__elem" type="radio" name="filter"/>
							<span className="radio__label">In move</span>
						</label>
					</div>

					<div className="radio">
						<label className="row">
							<input className="radio__elem" type="radio" name="filter"/>
							<span className="radio__label">Payment</span>
						</label>
					</div>
				</div>

				<div className="table__wrap">
					<div className="table">
						<div className="table__head">
							<div className="table__head-item">ID</div>
							<div className="table__head-item">Date</div>
							<div className="table__head-item">Price</div>
							<div className="table__head-item">Status</div>
						</div>

						<div className="table__content">
							<div className="table__row">
								<div className="table__col">#43534455</div>
								<div className="table__col">20.03.2020</div>
								<div className="table__col">$90.00</div>
								<div className="table__col">TShirt</div>
							</div>

							<div className="table__row">
								<div className="table__col">#43534455</div>
								<div className="table__col">20.03.2020</div>
								<div className="table__col">$90.00</div>
								<div className="table__col">TShirt</div>
							</div>

							<div className="table__row">
								<div className="table__col">#43534455</div>
								<div className="table__col">20.03.2020</div>
								<div className="table__col">$90.00</div>
								<div className="table__col">TShirt</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pagination mb-pad">
				<div className="pagination__item pagination__item_disabled">Prev</div>
				<div className="pagination__item pagination__item_active">1</div>
				<div className="pagination__item">2</div>
				<div className="pagination__item">3</div>
				<div className="pagination__item">Next</div>
			</div>

		</div>
	</div>
);

export default OrdersPage;
