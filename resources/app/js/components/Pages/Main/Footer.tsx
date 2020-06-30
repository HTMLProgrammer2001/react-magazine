import * as React from 'react';
import {Link} from 'react-router-dom';


const Footer: React.FC<{}> = () => (
	<footer className = "footer">
		<div className = "container">
			<div className="footer__content">
          			<div className="footer__info">
          				<img className="footer__logo" 
							 src="./image/logo.png" 
							 alt="Logo"/>
						
            			<div className="footer__info-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ab aliquam cumque debitis deleniti doloribus
                            earum error id iure, laborum neque nisi odit,
                            possimus quaerat temporibus totam. Aspernatur atque
                            corporis ut!
            			</div>
          			</div>

          			<div className="footer__links">
            			<div className="footer__links-head">Useful links</div>
						
            			<ul className="footer__links-list">
						<Link to="/" className="footer__links-item">
							<li>Home</li>
						</Link>

						<Link to="/checkout" className="footer__links-item">
							<li>Checkout</li>
						</Link>

						<Link to="/profile" className="footer__links-item">
							<li>My account</li>
						</Link>

                			<a className="footer__links-item" href="#">
                				<li>Man fashion</li>
                			</a>

                			<a className="footer__links-item" href="#">
                				<li>Women fashion</li>
                			</a>

						<Link to="/cart" className="footer__links-item">
							<li>Cart</li>
						</Link>
                		</ul>
                	</div>

                	<div className="footer__contacts">
            			<div className="footer__links-head">Contact us</div>

            			<div className="footer__contacts-list">
              				<div className="footer__contacts-item">
              					<i className="fas fa-envelope"/>

              					<a className="footer__contacts-link"
								   href="mailto:cssuperpy@gmail.com">
              							cssuperpy@gmail.com
              					</a>
              				</div>

              				<div className="footer__contacts-item">
              					<i className="fas fa-phone-alt"/>

              					<a className="footer__contacts-link"
								   href="tel:+7043345544">
              							+7043345435543
              					</a>
              				</div>

              				<div className="footer__contacts-item">
              					<i className="fas fa-link"/>

              					<a className="footer__contacts-link"
								   href="https://htmlprogrammer.ru">
              						htmlprogrammer.ru
              					</a>
              				</div>
            			</div>
          			</div>
          		</div>
		</div>

		<hr/>
		<div className="footer__copy">Copyright {new Date().getFullYear()}</div>
	</footer>
);

export default Footer;
