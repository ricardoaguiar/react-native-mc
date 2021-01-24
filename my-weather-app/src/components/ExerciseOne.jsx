import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export const ExerciseOne = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
