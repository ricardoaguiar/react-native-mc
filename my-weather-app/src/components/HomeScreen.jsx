import React, { useState, useEffect, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getWeatherByCityName } from '../../services/index';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';

export const HomeScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState('Vejle');
  const [weatherData, setWeatherData] = useState(null);

  // console.log(weatherData);

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

  const kelvinTemp = Number(`${weatherData?.main?.temp}`);
  const celciusTemp = (kelvinTemp - 273.15).toFixed(1);

  const feelsLikeKelvin = `${weatherData?.main?.feels_like}`;
  const feelsLikeCelcius = (feelsLikeKelvin - kelvinTemp).toFixed(1);

  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/app.jpg')}
      >
        <View style={styles.searchContainer}>
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
              borderRadius={0}
              backgroundColor={'#fff2'}
            />
          </View>
        </View>

        <View style={styles.weatherDetails}>
          <View>
            <Text style={styles.cityName}>{`${weatherData?.name}`}</Text>
            <Text style={styles.celciusTemp}>{`${celciusTemp}`} ºC</Text>
            <Text style={styles.feelsLike}>
              Feels Like:{`${feelsLikeCelcius}`} ºC
            </Text>
          </View>
          <View>
            <Image
              style={styles.weatherIcons}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`,
              }}
            />
          </View>
        </View>

        <View style={styles.weatherConditions}>
          <View style={styles.weatherConditionsDetails}>
            <Text style={styles.weatherConditionsTitle}>Wind Speed</Text>

            <MaterialCommunityIcons
              name="weather-windy"
              size={32}
              color={'#fff'}
            />
            <Text style={styles.weatherConditionsDetailsText}>
              {`${weatherData?.wind?.speed}`}km/h
            </Text>
          </View>

          <View style={styles.weatherConditionsDetails}>
            <Text style={styles.weatherConditionsTitle}>Humidity</Text>
            <MaterialCommunityIcons
              name="thermometer"
              size={32}
              color={'#fff'}
            />
            <Text
              style={styles.weatherConditionsDetailsText}
            >{`${weatherData?.main?.humidity}`}</Text>
          </View>

          <View style={styles.weatherConditionsDetails}>
            <Text style={styles.weatherConditionsTitle}>Pressure</Text>
            <MaterialCommunityIcons
              name="speedometer"
              size={32}
              color={'#fff'}
            />
            <Text style={styles.weatherConditionsDetailsText}>
              {`${weatherData?.main?.pressure}`}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    paddingTop: 0,
  },
  inputCity: {
    borderColor: '#fff4',
    backgroundColor: '#fff4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
    padding: 10,
  },
  searchButton: {
    padding: 0,
    margin: -1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    color: 'black',
  },
  searchContainer: {
    marginTop: 45,
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
  },
  weatherIcons: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
  },
  cityName: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff9',
  },
  celciusTemp: {
    fontSize: 50,
    fontWeight: '900',
    color: '#fff9',
  },
  feelsLike: {
    fontSize: 25,
    fontWeight: '800',
    color: '#fff9',
  },
  currentWetherIcon: {
    // alignSelf: 'flex-end',
    flex: 1,
  },
  weatherDetails: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#3332',
    margin: 10,
    borderRadius: 10,
  },
  weatherConditions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
    position: 'absolute',
    bottom: 0,
  },
  weatherConditionsDetails: {
    backgroundColor: '#fff5',
    width: 100,
    height: 100,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  weatherConditionsDetailsText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  weatherConditionsTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
});
