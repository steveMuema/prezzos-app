import { cond, Value } from 'react-native-reanimated';
import { getFirebase } from 'react-redux-firebase';

export default function fetchHos(countryCode) {
  const firebase = getFirebase();
  return firebase.watchEvent('once', countryCode);
}
