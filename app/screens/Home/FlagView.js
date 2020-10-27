import React, { Component } from 'react';
import { Image } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function FlagView({ imageUrl }) {
  return <Avatar.Image source={imageUrl} />;
}
