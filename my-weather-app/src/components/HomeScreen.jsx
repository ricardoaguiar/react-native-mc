import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getWeatherByCityName, getWeatherByCityID } from '../../services/index';
import { Ionicons } from '@expo/vector-icons';

export const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState('Vejle');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = useCallback(async () => {
    try {
      const getWeatherData = await getWeatherByCityName(currentLocation);
      setWeatherData(getWeatherData);
    } catch (error) {
      console.log(error);
    }
  }, [currentLocation]);

  useEffect(() => {
    getWeather();
  }, []);

  const kelvinTemp = `${weatherData?.main?.temp}`;
  const celciusTemp = (kelvinTemp - 273.15).toFixed(1);

  const feelsLikeKelvin = `${weatherData?.main?.feels_like}`;
  const feelsLikeCelcius = (feelsLikeKelvin - kelvinTemp).toFixed(1);

  return (
    <View style={styles.homeContainer}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TextInput
          placeholder="Enter city name"
          style={styles.inputCity}
          onChangeText={setCurrentLocation}
        />
        <View>
          <Ionicons.Button
            name="search"
            size={22}
            onPress={getWeather}
            iconStyle={styles.searchButton}
            backgroundColor={'white'}
          />
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 20 }}>{`City: ${weatherData?.name}`}</Text>

        <Text style={{ fontSize: 20 }}>{`Temperature: ${celciusTemp}`}</Text>
        <Text
          style={{ fontSize: 20 }}
        >{`Feels Like: ${feelsLikeCelcius}`}</Text>
        <Text
          style={{ fontSize: 20 }}
        >{`Lat: ${weatherData?.coord?.lat}`}</Text>
        <Text
          style={{ fontSize: 20 }}
        >{`Long: ${weatherData?.coord?.lon}`}</Text>
        <Text
          style={{ fontSize: 20 }}
        >{`City: ${weatherData?.coord?.lon}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCity: {
    borderColor: '#ccc9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
    padding: 10,
  },
  homeContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingTop: 40,
  },
  searchButton: {
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
});
