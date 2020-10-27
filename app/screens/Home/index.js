/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Dimensions, FlatList, Image } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import styles from './styles';
import FlagView from './FlagView';
import allCountriesList from './allCountriesList';
import {
  Appbar,
  Caption,
  List,
  ProgressBar,
  Snackbar,
  Subheading,
  Surface,
  Text,
} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as hosActions from 'app/actions/hosActions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import StatusBarColor from '../../components/StatusBarColor';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  // const colorScheme = useColorScheme();
  const [isGrid, setGrid] = useState(false);
  const LIST_ICON = isGrid ? 'view-module' : 'view-list';

  const netInfo = useNetInfo();
  const isHosFetching = useSelector(
    state => state.loadingReducer.isHosFetching,
  );
  // const [loader, setLoader] = useState(false);
  changeNavigationBarColor('translucent', false);
  const { width, height } = Dimensions.get('screen');

  function fetchHos(countryCode) {
    dispatch(hosActions.requestHos(countryCode));
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor />
      <Surface style={{ flex: 1, width: '100%', height: '100%' }}>
        <Appbar.Header>
          <Appbar.Content title="List of all Countries" />
          <Appbar.Action
            icon={LIST_ICON}
            size={27}
            onPress={() => setGrid(!isGrid)}
          />
          {/* <Appbar.Action icon="dots-vertical" /> */}
        </Appbar.Header>
        {isHosFetching ? (
          <ProgressBar indeterminate={true} visible={true} />
        ) : (
          <ProgressBar indeterminate={true} visible={false} />
        )}
        {isGrid === true ? (
          <FlatList
            data={allCountriesList}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                key={item.key}
                onPress={() => fetchHos(item.countryCode)}>
                <List.Item
                  title={item.countryName}
                  titleStyle={{ fontSize: 17 }}
                  left={() => <FlagView imageUrl={item.imageUrl} />}
                />
              </TouchableWithoutFeedback>
            )}
            key={isGrid}
            keyExtractor={item => item.countryCode}
            style={{ flex: 1, height: height, width: '100%' }}
            initialNumToRender={25}
            horizontal={false}
          />
        ) : (
          <FlatList
            data={allCountriesList}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => fetchHos(item.countryCode)}
                style={{ alignItems: 'center', margin: 15 }}>
                <Image
                  source={item.imageUrl}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 7,
                    alignSelf: 'stretch',
                    marginBottom: 20,
                  }}
                  resizeMode="contain"
                />
                <Subheading style={{ width: 80 }}>
                  {item.countryName}
                </Subheading>
              </TouchableWithoutFeedback>
            )}
            key={isGrid}
            keyExtractor={item => item.countryCode}
            style={{ flex: 1, height: height, width: '100%' }}
            contentContainerStyle={{ alignItems: 'stretch', width: width }}
            columnWrapperStyle={{ justifyContent: 'space-around' }}
            initialNumToRender={25}
            numColumns={3}
          />
        )}
        <Snackbar
          visible={!netInfo.isInternetReachable}
          duration={2000}
          onDismiss={() => console.log('not connected')}>
          Cannot connect to the server
        </Snackbar>
      </Surface>
    </SafeAreaView>
  );
}
