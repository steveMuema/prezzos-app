import React from 'react';
import NavigationStack from './NavigationStack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import NavigationService from './NavigationService';
import { useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// class AppNavigator extends Component {
//   render() {
//     return <NavigationStack />;
//   }
// }

function AppNavigator() {
  const scheme = useColorScheme();
  return (
    // <SafeAreaProvider>
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      theme={scheme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme}>
      <NavigationStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
