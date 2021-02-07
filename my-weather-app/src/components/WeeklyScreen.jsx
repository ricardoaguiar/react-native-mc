import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, Button } from '@react-navigation/native';

export const WeeklyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Weekly Screen</Text>
      {/* <Button
        title="Go to next screen"
        onPress={() => navigation.navigate('Week one')}
      /> */}
    </View>
  );
};
