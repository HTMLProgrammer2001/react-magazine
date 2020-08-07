import {RootState} from '../../index';

export const selectDeleteState = (state: RootState) => state.profile.delete;
