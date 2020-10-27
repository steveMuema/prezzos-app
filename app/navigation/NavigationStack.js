// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import React from 'react';
import Home from 'app/screens/Home';
import Country from 'app/screens/Country';
import { useSelector, useDispatch } from 'react-redux';
import ignoreWarnings from 'react-native-ignore-warnings';
import { TransitionSpecs, createStackNavigator } from '@react-navigation/stack';

// import {
//   // configureFonts,
//   // DefaultTheme,
//   Provider as PaperProvider,
// } from 'react-native-paper';

// ignoreWarnings('Setting a timer');

// function AuthIsLoaded({ children }) {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(state => state.loadingReducer.isLoginLoading);
//   useEffect(() => {
//     let token;
//     dispatch(loginActions.enableLoader());
//     const bootstrapAsync = async () => {
//       let userToken;
//       try {
//         userToken = await AsyncStorage.getItem('@userToken');
//       } catch (e) {
//         console.log(e);
//         setTimeout(() => {
//           Alert.alert('BoilerPlate', e.toString());
//         }, 5000);
//       }
//       setTimeout(() => {
//         dispatch(loginActions.onLoginResponse(userToken));
//         dispatch(loginActions.disableLoader());
//       }, 1500);
//     };
//     bootstrapAsync();
//   }, [dispatch]);

//   if (isLoading === true) {
//     return <Splash />;
//   }
//   return children;
// }

const Stack = createStackNavigator();

export default function RNApp() {
  // get the token in asyncstorage once usertoken is not null load auth screens and home screens otherwise
  // const userToken = useSelector(state => state.loginReducer.id);

  return (
    <Stack.Navigator mode={'card'} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          // transitionSpec: {
          //   open: TransitionSpecs.RevealFromBottomAndroidSpec,
          // },
        }}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        options={{
          // transitionSpec: {
          //   open: TransitionSpecs.FadeInFromBottomAndroidSpec,
          //   close: TransitionSpecs.FadeOutToBottomAndroidSpec,
          // },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
