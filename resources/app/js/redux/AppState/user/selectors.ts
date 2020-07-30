import {RootState} from '../../index';

export const selectUserState = (state: RootState) => state.user;
export const selectUserIsAuthorized = (state: RootState) => !!state.user.user;
export const selectUser = (state: RootState) => state.user.user;
