import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import icedCoffeeImg from "@/assets/images/iced-coffee.png';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={icedCoffeeImg}
            >
                <Text style={styles.text}>Coffee Shop</Text>
            </ImageBackground>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})