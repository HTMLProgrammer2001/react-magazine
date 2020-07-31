import {RootState} from '../../index';

export const selectInitialized = (state: RootState) => state.app.initialized;
