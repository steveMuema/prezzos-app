import * as hosActions from 'app/actions/hosActions';
import fetchHos from 'app/api/methods/fetchHos';
import { Alert } from 'react-native';
import { put, call, delay } from 'redux-saga/effects';
import fetchHosEnded from '../api/methods/fetchHosEnded';
import NavigationService from '../navigation/NavigationService';

export default function* hosAsync(action) {
  yield put(hosActions.enableLoader());
  // yield delay(2000);

  try {
    const hos = yield call(fetchHos, action.countryCode);
    console.log('async', hos.data.name);
    const continent = hos.data.continent;
    const countryName = hos.data.countryName;
    const dob = hos.data.dob;
    const name = hos.data.name;
    const termLimit = hos.data.termLimit;
    const termStart = hos.data.termStart;
    const title = hos.data.title;
    yield put(
      hosActions.saveHosData(
        continent,
        countryName,
        dob,
        name,
        termLimit,
        termStart,
        title,
      ),
    );
  } catch (error) {
    setTimeout(() => {
      Alert.alert('Application Error', error.toString());
    }, 200);
  }

  NavigationService.navigate('Country', { countryCode: action.countryCode });
  yield put(hosActions.disableLoader());

  yield delay(2500);
  yield call(fetchHosEnded, action.countryCode);
}
