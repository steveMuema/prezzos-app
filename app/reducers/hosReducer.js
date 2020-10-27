import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  continent: '',
  countryCode: '',
  countryName: '',
  dob: '',
  name: '',
  termLimit: '',
  termStart: '',
  title: '',
};

export const hosReducer = createReducer(initialState, {
  [types.FETCH_HOS_REQUEST](state, action) {
    return {
      ...state,
      countryCode: action.countryCode,
    };
  },
  [types.SAVE_HOS_DATA](state, action) {
    return {
      ...state,
      continent: action.continent,
      countryName: action.countryName,
      dob: action.dob,
      name: action.name,
      termLimit: action.termLimit,
      termStart: action.termStart,
      title: action.title,
    };
  },
});
