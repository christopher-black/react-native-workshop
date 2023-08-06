import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default function ForecastDetails(props) {

    return (
        <View>
            <Text>{JSON.stringify(props)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});