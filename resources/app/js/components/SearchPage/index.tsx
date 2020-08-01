import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router';

import Breadcrumbs from '../Breadcrumbs';
import {RootState} from '../../redux';
import thunkSearch from '../../redux/search/thunks';
import {selectSearchLength, selectSearchState} from '../../redux/search/selectors';
import {searchReset} from '../../redux/search/actions';


const mapStateToProps = (state: RootState) => ({
	searchState: selectSearchState(state),
	productCount: selectSearchLength(state)
});

const connected = connect(mapStateToProps, {
	loadSearch: thunkSearch,
	searchReset
});

type ISearchProps = ConnectedProps<typeof connected> & RouteComponentProps<{}>;


const SearchPage: React.FC<ISearchProps> = (props) => {
	React.useEffect(() => {
		props.searchReset();
		props.loadSearch(props.location.search.split('=')[1]);
	}, [props.location.search.split('=')[1]]);

	return (
		<React.Fragment>
			<Breadcrumbs paths={[
				{name: 'Home', path: '/'},
				{name: 'Search', path: '/search'}
			]}/>

			<div>
				<div>Loaded {props.productCount} of {props.searchState.totalCount}</div>

				{
					props.productCount ?
						props.searchState.products.map((item) => (
							<div key={item.id}>{item.name}</div>
						))
						:
						<div>No products was found for {props.searchState.search}</div>
				}
			</div>

			{props.searchState.error && <div>{props.searchState.error}</div>}

			{
				props.productCount == props.searchState.totalCount &&
				!props.searchState.isLoading ?
					false :
					<div className="goods__list-load">
						<button
							type="button"
							className="goods__list-more"
							onClick={
								() => {
									props.loadSearch(
										props.searchState.search,
										props.searchState.currentPage + 1
									);
								}
							}
						>
							{props.searchState.isLoading ? 'Loading...' : 'Load More'}
						</button>
					</div>
			}
		</React.Fragment>
	);
};

export default connected(SearchPage);
