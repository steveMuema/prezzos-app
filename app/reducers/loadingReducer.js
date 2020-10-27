/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isLoginLoading: true,
  isHosFetching: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
  [types.FETCH_HOS_ENABLE_LOADER](state) {
    return { ...state, isHosFetching: true };
  },
  [types.FETCH_HOS_DISABLE_LOADER](state) {
    return { ...state, isHosFetching: false };
  },
});
