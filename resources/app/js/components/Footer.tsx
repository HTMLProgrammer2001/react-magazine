import * as React from 'react';


const Footer: React.FC<{}> = () => (
	<footer className = "footer">
		<div className = "container">
			<div className="footer__content">
          			<div className="footer__info">
          				<img className="footer__logo" src="./image/logo.png"/>
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
            				<a className="footer__links-item" href="#">
                				<li>Home</li>
                			</a>

                			<a className="footer__links-item" href="#">
                				<li>Checkout</li>
                			</a>

                			<a className="footer__links-item" href="#">
                				<li>My account</li>
                			</a>

                			<a className="footer__links-item" href="#">
                				<li>Man fashion</li>
                			</a>

                			<a className="footer__links-item" href="#">
                				<li>Women fashion</li>
                			</a>

                			<a className="footer__links-item" href="#">
                				<li>Cart</li>
                			</a>
                		</ul>
                	</div>

                	<div className="footer__contacts">
            			<div className="footer__links-head">Contact us</div>
            			<div className="footer__contacts-list">
              				<div className="footer__contacts-item">
              					<i className="fas fa-envelope"></i>
              					<a className="footer__contacts-link"
								   href="mailto:cssuperpy@gmail.com">
              						cssuperpy@gmail.com
              					</a>
              				</div>

              				<div className="footer__contacts-item">
              					<i className="fas fa-phone-alt"></i>
              					<a className="footer__contacts-link"
								   href="tel:+7043345544">
              						+7043345435543
              					</a>
              				</div>

              				<div className="footer__contacts-item">
              					<i className="fas fa-link"></i>
              					<a className="footer__contacts-link" href="#">
              						htmlprogrammer.ru
              					</a>
              				</div>
            			</div>
          			</div>
          		</div>
		</div>

		<hr/>
		<div className="footer__copy">Copyright 2020</div>
	</footer>
);

export default Footer;
