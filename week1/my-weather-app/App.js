import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/components/HomeScreen';
import { WeeklyScreen } from './src/components/WeeklyScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Weekly" component={WeeklyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#11223333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'column',
    backgroundColor: '#334455',
    flex: 1,
  },
});

export default App;
