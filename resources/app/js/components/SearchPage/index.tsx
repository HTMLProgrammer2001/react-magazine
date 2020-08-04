import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router';

import Breadcrumbs from '../Breadcrumbs';
import {RootState} from '../../redux';
import thunkSearch from '../../redux/search/thunks';
import {selectSearchLength, selectSearchState} from '../../redux/search/selectors';
import {searchReset} from '../../redux/search/actions';
import List from './List';


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
		<div>
			<Breadcrumbs paths={[
				{name: 'Home', path: '/'},
				{name: 'Search', path: '/search'}
			]}/>

			<div className="container py-pad">
				<div>
					<div>
						Loaded {props.productCount} of {props.searchState.totalCount}
					</div>

					{
						<List
							products={props.searchState.products}
							search={props.searchState.search}
							count={props.productCount}
						/>
					}
				</div>

				{
					props.searchState.error &&
						<div className="center">{props.searchState.error}</div>
				}

				{
					props.productCount == props.searchState.totalCount &&
					!props.searchState.isLoading ?
						false :
						<div className="goods__list-load">
							<button
								type="button"
								className="goods__list-more"
								onClick={() => {
									props.loadSearch(
										props.searchState.search,
										props.searchState.currentPage + 1
									);
								}}
							>
								{props.searchState.isLoading ? 'Loading...' : 'Load More'}
							</button>
						</div>
				}
			</div>
		</div>
	);
};

export default connected(SearchPage);
