import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function WeatherIcon({ image, iconSize = 42 }) {
    const iconFromDescription = () => {
        let icon = <MaterialCommunityIcons name="cloud-question" size={iconSize} color="black" />;
        if (image.indexOf('rain_showers') >= 0) {
            icon = <MaterialCommunityIcons name="weather-rainy" size={iconSize} color="black" />;
        } else if (image.indexOf('sct') >= 0) {
            icon = <MaterialCommunityIcons name="weather-partly-cloudy" size={iconSize} color="black" />;
        } else if (image.indexOf('few') || image.indexOf('skc')) {
            icon = <MaterialCommunityIcons name="weather-sunny" size={iconSize} color="black" />;
        } else if (image.indexOf('sn') || image.indexOf('skc')) {
            icon = <MaterialCommunityIcons name="weather-sunny" size={iconSize} color="black" />;
        }     
        return icon;
    }

    return (
        <View style={{paddingLeft: 10, paddingRight: 10}}>
            {iconFromDescription()}
        </View>
    )
}