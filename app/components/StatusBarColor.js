import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import AppStyles from '../config/styles';

export default function StatusBarColor() {
  const colorScheme = useColorScheme();
  if (colorScheme === 'dark') {
    // render some dark thing
    return (
      <StatusBar
        barStyle="default"
        animated={true}
        backgroundColor={AppStyles.color.COLOR_BLACK}
      />
    );
  } else {
    // render some light thing
    return (
      <StatusBar
        barStyle="default"
        animated={true}
        backgroundColor={AppStyles.color.HEADER_COLOR}
      />
    );
  }
}
