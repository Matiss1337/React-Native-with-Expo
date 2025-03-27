import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';

import { Link } from 'expo-router'

import icedCoffeeImg from '../../assets/images/iced-coffee.png';

const App = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={icedCoffeeImg}
                style={styles.image}
                resizeMode="cover"
            >
                <Text style={styles.text}>Coffee Shop</Text>

                <Link style={{margingHorizontal: 'auto'}} href="/contact" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Contact Us</Text>
                    </Pressable>
                </Link>

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
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginBottom: 120,
    },
    link: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        padding: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    button: {
        height: '60',
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 6,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    }
});