import * as React from 'react';
import c from 'classnames';
import {withRouter, RouteComponentProps} from 'react-router-dom';

import SearchForm, {ISearchFormData} from './SearchForm';


export interface IMenuProps {
	openMenu: string,
	changeOpen: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<IMenuProps & RouteComponentProps<{}>> = (props) => {
	const searchClasses = c('header__icon dropdown', {
		active: props.openMenu == 'search'
	});

	const onSubmit = (values: ISearchFormData) => {
		props.history.push(`/search?search=${values.search}`);
	};

	return (
		<span className={searchClasses}>
			<i className="fas fa-search dropdown__elem"
			   onClick={() => {
			   		props.changeOpen(prev => prev == 'search' ? '' : 'search');
			   }}/>

			<div className="dropdown__body">
				<div className="dropdown__content">
					<SearchForm onSubmit={onSubmit}/>
				</div>
			</div>
		</span>
	);
};

export default withRouter(Search);
