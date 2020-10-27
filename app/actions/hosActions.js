import * as types from './types';

export function requestHos(countryCode) {
  return {
    type: types.FETCH_HOS_REQUEST,
    countryCode,
  };
}

export function fetchHosFailed() {
  return {
    type: types.FETCH_HOS_FAILED,
  };
}

export function saveHosData(
  continent,
  countryName,
  dob,
  name,
  termLimit,
  termStart,
  title,
) {
  return {
    type: types.SAVE_HOS_DATA,
    continent,
    countryName,
    dob,
    name,
    termLimit,
    termStart,
    title,
  };
}
export function enableLoader() {
  return {
    type: types.FETCH_HOS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.FETCH_HOS_DISABLE_LOADER,
  };
}
