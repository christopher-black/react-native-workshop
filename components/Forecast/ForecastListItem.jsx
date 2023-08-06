import WeatherIcon from '../Weather/WeatherIcon';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ForecastListItem({item}) {
    const navigation = useNavigation();
    return (
        // View doesn't support onPress
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                paddingVertical: 30,
                width: '100%',
                borderColor:'gray',
                borderBottomWidth: 1,
            }}
            onPress={() => {
                // Navigate to the Details route with params
                navigation.navigate('Details', item);
            }}
        >
            <WeatherIcon image={item.icon} />
            <View style={{
                justifyContent: 'center',
                display: 'flex',
                paddingHorizontal: 10,
                flex: 1,
            }}>
                <Text>
                    {item.name}: {item.temperature}
                </Text>
            </View>
            
        </TouchableOpacity>
    )
}