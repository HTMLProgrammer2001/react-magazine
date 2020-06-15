import * as React from 'react';
import c from 'classnames';


export interface IMenuProps {
	openMenu: string,
	changeOpen: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<IMenuProps> = (props) => {
	const searchClasses = c('header__icon dropdown', {
		active: props.openMenu == 'search'
	});

	return (
		<React.Fragment>
			<span className={searchClasses}>
				<i className="fas fa-search dropdown__elem"
				   onClick={() => {
						props.changeOpen(prev => prev=='search' ? '':'search');
				   }}/>

				<div className="dropdown__body">
					<div className="dropdown__content">
						<div className="input">
							<input className="input__elem" required/>
							<label className="input__label">
								Search
							</label>
							<div className="input__line"/>
						</div>
					</div>
				</div>
			</span>
		</React.Fragment>);
};

export default Search;
