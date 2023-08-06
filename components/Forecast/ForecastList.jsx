import { useState, useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import * as Location from 'expo-location';
import { getGridPoint, getForecastData } from '../../requests/weather.requests';
import ForecastListItem from './ForecastListItem';

export default function ForecastList() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [forecast, setForecast] = useState([]);
  
    useEffect(() => {
      getLocation();
    }, []);
  
    useEffect(() => {
      if(location && location.coords) {
        console.log('Location found');
        getWeather();
      }
    }, [location]);
  
    const getWeather = async () => {
      console.log('getWeather for location:',location);
      // Request the weather grid based on our location
      let forecastUrl = await getGridPoint(location);
      // Request the weather forecast for our grid location
      let forecastData = await getForecastData(forecastUrl);
      if (forecastData) {
        setForecast(forecastData);
        setErrorMsg(null);
      } else {
        setErrorMsg('Unable to get weather data.');
      }
    }
  
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    }
    return (
        <>
            {
                errorMsg && (
                    <Text style={styles.error}>{errorMsg}</Text>
                )
            }
            {
                forecast && forecast.length > 0 ? (
                    <FlatList
                        data={forecast}
                        renderItem={({item}) => <ForecastListItem item={item} />}
                        keyExtractor={item => item.number}
                        style={styles.forecastList}
                    />
                ) : (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" />
                    </View>     
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        padding: 5,
        backgroundColor: 'mistyrose',
        textAlign: 'center',
        fontSize: 16,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    forecastList: {
        width: '100%',
    },
});