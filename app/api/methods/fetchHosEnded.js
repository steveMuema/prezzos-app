import { getFirebase } from 'react-redux-firebase';

export default function fetchHosEnded(countryCode) {
  const firebase = getFirebase();
  return firebase.unWatchEvent('value', countryCode);
}
