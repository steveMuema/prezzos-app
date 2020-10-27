/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated, Platform, StyleSheet, View } from 'react-native';
import StatusBarColor from '../../components/StatusBarColor';
import {
  Surface,
  DataTable,
  Title,
  Caption,
  Subheading,
  Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Animated from 'react-native-reanimated';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import AppStyles from '../../config/styles';
import ThemeUtils from '../../config/ThemeUtils';
import styles from './styles';
import presImage from 'app/assets/images/presidents/ke-pres.jpg';
import countryImage from 'app/assets/images/countries/ke.png';
import { useSelector } from 'react-redux';
import Countdown from 'react-countdown';

export default function Country({ route, navigation }) {
  const [scrollY] = useState(new Animated.Value(0));
  const {
    name,
    title,
    dob,
    continent,
    termLimit,
    countryName,
    termStart,
  } = useSelector(state => state.hosReducer);
  const startDate = new Date(termStart).getTime();
  const duration = termLimit * 31556952000;
  const endDate = new Date(startDate + duration);
  // useEffect(() => {
  // const name = useName(data);
  // });
  // const countryImage = require('app/assets/images/countries/' +
  //   countryCode +
  //   '.png');
  useEffect(() => {
    const currDate = new Date().getTime();
    const timeDiff = endDate - currDate;
    const days = (timeDiff / (1000 * 60 * 60 * 24)).toFixed(0);
    // Calculating Seconds
    var sec = (timeDiff / 1000).toFixed(1);

    // Calculating Minutes
    var min = (timeDiff / (1000 * 60)).toFixed(1);

    // Calculating hours
    var hrs = (timeDiff / (1000 * 60 * 60)).toFixed(1);

    console.log(days, hrs, min, sec);
  });

  changeNavigationBarColor('translucent', false);
  //For header background color from transparent to header color
  function _getHeaderBackgroundColor() {
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: ['rgba(0,0,0,0.0)', AppStyles.color.HEADER_COLOR],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //For header image opacity
  function _getHeaderImageOpacity() {
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [1, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //artist profile image position from left
  function _getImageLeftPosition() {
    return scrollY.interpolate({
      inputRange: [0, 80, 140],
      outputRange: [
        ThemeUtils.relativeWidth(35),
        ThemeUtils.relativeWidth(42),
        ThemeUtils.relativeWidth(10),
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //artist profile image position from top
  function _getImageTopPosition() {
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [
        ThemeUtils.relativeHeight(40),
        Platform.OS === 'ios' ? 8 : 10,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }
  //artist profile image width
  function _getImageWidth() {
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [
        ThemeUtils.relativeWidth(30),
        ThemeUtils.APPBAR_HEIGHT - 20,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //artist profile image height
  function _getImageHeight() {
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [
        ThemeUtils.relativeWidth(30),
        ThemeUtils.APPBAR_HEIGHT - 20,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //artist profile image border width
  function _getImageBorderWidth() {
    // const { scrollY } = this.state;
    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [StyleSheet.hairlineWidth * 3, StyleSheet.hairlineWidth],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }
  //artist profile image border color
  function _getImageBorderColor() {
    // const { scrollY } = this.state;

    return scrollY.interpolate({
      inputRange: [0, 140],
      outputRange: [AppStyles.color.COLOR_WHITE, 'rgba(0,0,0,0.0)'],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //Cards container position from top
  function _getCardsViewTopPosition() {
    return scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [
        ThemeUtils.relativeWidth(100) - ThemeUtils.APPBAR_HEIGHT - 10,
        0,
      ],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //header title opacity
  function _getHeaderTitleOpacity() {
    // const { scrollY } = this.state;

    return scrollY.interpolate({
      inputRange: [0, 20, 50],
      outputRange: [0, 0.5, 1],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  //artist name opacity
  function _getNormalTitleOpacity() {
    return scrollY.interpolate({
      inputRange: [0, 20, 50],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
  }

  const headerBackgroundColor = _getHeaderBackgroundColor();

  const headerImageOpacity = _getHeaderImageOpacity();

  const countryImageLeft = _getImageLeftPosition();

  const countryImageTop = _getImageTopPosition();

  const countryImageWidth = _getImageWidth();

  const countryImageHeight = _getImageHeight();

  const countryImageBorderWidth = _getImageBorderWidth();

  const countryImageBorderColor = _getImageBorderColor();

  const cardsViewTop = _getCardsViewTopPosition();

  const headerTitleOpacity = _getHeaderTitleOpacity();

  const normalTitleOpacity = _getNormalTitleOpacity();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Title> The term in office has already expired. </Title>;
    } else {
      // Render a countdown
      return (
        <View
          style={{
            flex: 1,
            height: '50%',
            width: '95%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              height: '50%',
              width: '25%',
              // flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 44 }}>{days}</Text>
            <Text>days </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: '50%',
              width: '15%',
              marginLeft: 8,
            }}>
            <Text style={{ fontSize: 44 }}>{hours}</Text>
            <Text>hours </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: '50%',
              width: '15%',
              // flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 44 }}>{minutes}</Text>
            <Text> minutes </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: '50%',
              width: '15%',
              // flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 44 }}>{seconds}</Text>
            <Text>seconds</Text>
          </View>
        </View>
      );
    }
  };
  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <StatusBarColor />
      <Surface>
        <Animated.Image
          style={[
            styles.headerImageStyle,
            {
              opacity: headerImageOpacity,
            },
          ]}
          source={presImage}
        />

        <Animated.View
          style={[
            styles.headerStyle,
            {
              backgroundColor: headerBackgroundColor,
            },
          ]}>
          <View style={styles.headerLeftIcon}>
            <Icon
              name="arrow-back"
              size={25}
              color={AppStyles.color.COLOR_WHITE}
              onPress={() => navigation.goBack()}
            />
          </View>

          <Animated.Text
            style={[
              styles.headerTitle,
              {
                opacity: headerTitleOpacity,
                color: AppStyles.color.COLOR_GREY_WHITE,
              },
            ]}>
            {name}
          </Animated.Text>
        </Animated.View>

        <Animated.Image
          style={[
            styles.countryImage,
            {
              borderWidth: countryImageBorderWidth,
              borderColor: countryImageBorderColor,
              borderRadius: (ThemeUtils.APPBAR_HEIGHT - 20) / 2,
              height: countryImageHeight,
              width: countryImageWidth,
              transform: [
                { translateY: countryImageTop },
                { translateX: countryImageLeft },
              ],
            },
          ]}
          source={countryImage}
        />
        <Animated.ScrollView
          overScrollMode={'auto'}
          style={{ zIndex: 10 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: scrollY } },
              },
            ],
            { useNativeDriver: false },
          )}>
          {/* <Animated.Text
            style={[
              styles.countryTitle,
              {
                opacity: normalTitleOpacity,
              },
            ]}>
            KENYA
          </Animated.Text> */}

          <Animated.Text
            style={[
              styles.songCountStyle,
              {
                opacity: normalTitleOpacity,
                fontFamily: '',
              },
            ]}>
            {/* {`♬ ${artistData.length} songs`} */}
          </Animated.Text>

          <Animated.View
            style={{
              transform: [
                {
                  translateY: cardsViewTop,
                },
              ],
            }}>
            {/* {artistData.map((item, index) =>
              this.renderArtistCard(index, item),
            )} */}
            <Surface style={{ height: 1200 }}>
              <Surface
                style={{
                  elevation: 12,
                  height: '15%',
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: 100,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <Subheading> Estimated Remaining Time in Office</Subheading>
                <View style={{ height: '75%' }}>
                  <Countdown date={endDate} renderer={renderer} />
                </View>
              </Surface>
              <DataTable
                style={{
                  margin: 0,
                  // borderWidth: 3,
                  // borderColor: AppStyles.color.COLOR_GREY,
                  marginTop: 30,
                  width: '95%',
                  elevation: 2,
                  alignSelf: 'center',
                }}>
                <DataTable.Header>
                  <DataTable.Title
                    style={{ flex: 1, justifyContent: 'center' }}>
                    <Title>Head Of State Details</Title>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>Head of State Name</DataTable.Cell>
                  <DataTable.Cell numeric>{name}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Head of State Title</DataTable.Cell>
                  <DataTable.Cell numeric>{title}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Date of Birth</DataTable.Cell>
                  <DataTable.Cell numeric>{dob}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Name of Country</DataTable.Cell>
                  <DataTable.Cell numeric>{countryName}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Continent</DataTable.Cell>
                  <DataTable.Cell numeric>{continent}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Term Limit (years)</DataTable.Cell>
                  <DataTable.Cell numeric>{termLimit}</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Start of Term</DataTable.Cell>
                  <DataTable.Cell numeric>{termStart}</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </Surface>
          </Animated.View>
        </Animated.ScrollView>
      </Surface>
    </SafeAreaView>
  );
}
