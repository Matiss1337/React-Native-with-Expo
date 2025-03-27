import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Explore = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to Coffee Haven</Text>

                <View style={styles.section}>
                    <Text style={styles.heading}>About Us</Text>
                    <Text style={styles.description}>
                        A cozy spot serving premium coffee and fresh pastries.
                        Enjoy our carefully selected beans and relaxing atmosphere.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Opening Hours</Text>
                    <View style={styles.hours}>
                        <Text style={styles.timeText}>Mon - Fri: 7:00 - 20:00</Text>
                        <Text style={styles.timeText}>Sat - Sun: 8:00 - 18:00</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a0f00',
    },
    content: {
        padding: 20,
    },
    title: {
        color: '#d4a574',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    section: {
        backgroundColor: '#2a1810',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    heading: {
        color: '#d4a574',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
    },
    hours: {
        backgroundColor: '#3c2415',
        borderRadius: 8,
        padding: 10,
    },
    timeText: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 5,
    }
});