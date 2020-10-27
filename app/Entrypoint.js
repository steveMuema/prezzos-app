/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from 'app/navigation';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import configureStore, { rrfProps } from './store/configureStore';
import { enableScreens } from 'react-native-screens';
import {
  Provider as PaperProvider,
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  // 'Animated: `useNativeDriver` was not specified.',
  'Setting a timer',
]);

const { persistor, store } = configureStore();
enableScreens();

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...PaperDefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  dark: false,
  fonts: configureFonts(fontConfig),
  // Specify custom property in nested object
  roundness: 2,
  colors: {
    ...PaperDefaultTheme.colors,
    // primary: '#3498db',
    // accent: '#f1c40f',
  },
};

export default function Entrypoint() {
  const scheme = useColorScheme();
  return (
    <StoreProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <AppearanceProvider>
            <PaperProvider
              theme={scheme === 'dark' ? PaperDarkTheme : PaperDefaultTheme}>
              <Navigator />
            </PaperProvider>
          </AppearanceProvider>
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </StoreProvider>
  );
}
