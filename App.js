import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet, 
  StatusBar, 
  SafeAreaView,
} from 'react-native';
import ForecastDetails from './components/Forecast/ForecastDetails';
import ForecastList from './components/Forecast/ForecastList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar 
          backgroundColor='teal' 
          animated
          barStyle={'default'}
          showHideTransition={'fade'}
          hidden={false} />
        <NavigationContainer>
          {/* Similar to a Router */}
          <Stack.Navigator  initialRouteName="Weekly Forecast">
            {/* Similar to a Route */}
            <Stack.Screen name="Weekly Forecast" component={ForecastList} />
            <Stack.Screen name="Details" component={ForecastDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
