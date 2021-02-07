import React from 'react';
import { View, Text } from 'react-native';
import {
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
export const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};
