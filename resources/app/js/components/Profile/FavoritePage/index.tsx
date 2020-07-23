import * as React from 'react';


const FavoritePage: React.FC<{}> = () => (
	<div className="admContent">
		<div className="container">
			<div className="myOrders py-pad">
				<div className="pull-right">
					<span className="but but_outline">Continue shopping</span>
				</div>

				<h3>My favorite</h3>

				<div className="myOrders__header my-pad">
					<span className="myOrders__find">
              			<div className="input">
                			<input className="input__elem" type="text" required/>
                			<label className="input__label">Find favorite product</label>
                			<div className="input__line"/>
              			</div>
					</span>

					<div/>
				</div>

				<div className="table__wrap">
					<div className="table">
						<div className="table__head">
							<div className="table__head-item">ID</div>
							<div className="table__head-item">Product</div>
							<div className="table__head-item">Actions</div>
						</div>

						<div className="table__content">
							<div className="table__row">
								<div className="table__col">#43534455</div>
								<div className="table__col">
									<img className="mb-10" src="/image/product.png"/>
									<div>TShirt</div>
								</div>

								<div className="table__col">
									<i className="fas fa-times cur"/>
									<i className="fas fa-eye ml-10 cur"/>
								</div>
							</div>

							<div className="table__row">
								<div className="table__col">#43534455</div>
								<div className="table__col">
									<img className="mb-10" src="/image/product.png"/>
									<div>TShirt</div>
								</div>

								<div className="table__col">
									<i className="fas fa-times cur"/>
									<i className="fas fa-eye ml-10 cur"/>
								</div>
							</div>

							<div className="table__row">
								<div className="table__col">#43534455</div>
								<div className="table__col">
									<img className="mb-10" src="/image/product.png"/>
									<div>TShirt</div>
								</div>

								<div className="table__col">
									<i className="fas fa-times cur"/>
									<i className="fas fa-eye ml-10 cur"/>
								</div>
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

export default FavoritePage;
