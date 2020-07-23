import * as React from 'react';
import {Link} from 'react-router-dom';


const ProfilePage: React.FC<{}> = () => (
	<div className="admContent">
		<div className="info py-pad">
			<div className="container">

				<div className="info__links">
					<Link to='/'>
						<button type="button" className="info__home but but_outline">
							Continue shop
						</button>
					</Link>


					<Link to='/profile/settings'>
						<button type="button" className="info__settings but but_outline">
							Settings
						</button>
					</Link>
				</div>

				<div className="info__image my-pad">
					<img className="info__photo" src="/image/noAva.jpg"/>
				</div>

				<div className="info__fields">
					<div className="info__field">Name: Yuri Prisyazhny</div>
					<div className="info__field">Email: cssuperpy@gmail.com</div>
				</div>

				<hr/>
			</div>
		</div>

		<div className="container">
			<div className="sales my-pad">
				<h3>Top sales</h3>

				<div className="sales__list goods__list">
					<div className="goods__list-product">
						<a href="#" style={{width:'100%'}}>
							<img className="goods__list-photo" src="/image/product.png"/>
						</a>

						<div className="goods__list-info">
							<div className="goods__list-name">The Frog T-Shirt</div>
							<div className="goods__list-price">$30 -
								<s>$50</s>
							</div>
						</div>

						<div className="goods__list-sale">Sale</div>
					</div>

					<div className="goods__list-product">
						<a href="#" style={{width:'100%'}}>
							<img className="goods__list-photo" src="/image/product.png"/>
						</a>

						<div className="goods__list-info">
							<div className="goods__list-name">The Frog T-Shirt</div>
							<div className="goods__list-price">$30 -
								<s>$50</s>
							</div>
							<div className="goods__list-sale">Sale</div>
						</div>
					</div>

					<div className="goods__list-product">
						<a href="#" style={{width:'100%'}}>
							<img className="goods__list-photo" src="/image/product.png"/>
						</a>

						<div className="goods__list-info">
							<div className="goods__list-name">The Frog T-Shirt</div>
							<div className="goods__list-price">$30 -
								<s>$50</s>
							</div>
							<div className="goods__list-sale">Sale</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProfilePage;
