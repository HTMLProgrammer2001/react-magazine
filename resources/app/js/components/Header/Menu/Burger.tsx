import * as React from 'react';
import c from 'classnames';


interface IBurgerProps {
	isOpen: boolean,
	changeOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Burger: React.FC<IBurgerProps> = (props) => {
	const burgerClasses = c('burger header__icon', {
		active: props.isOpen
	});

	return (
		<div className={burgerClasses} onClick={() => {
			props.changeOpen(prev => !prev);
		}}>
			<div className="burger__body">
				<span className="burger__item"/>
				<span className="burger__item"/>
				<span className="burger__item"/>
			</div>
		</div>
	);
};

export default Burger;
