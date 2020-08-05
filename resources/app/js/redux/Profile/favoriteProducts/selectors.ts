import {RootState} from '../../index';

export const selectFavoriteState = (state: RootState) => state.profile.favorite;
export const selectFavoriteSize = (state: RootState) => state.profile.favorite.size;
