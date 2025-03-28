import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Contact = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Contact Us</Text>

                <View style={styles.section}>
                    <Text style={styles.heading}>Address</Text>
                    <Text style={styles.description}>
                        76 Brivibas Street{'\n'}
                        Riga, LV-1011{'\n'}
                        Latvia
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Contact Info</Text>
                    <View style={styles.hours}>
                        <Text style={styles.timeText}>Phone: +371 2712 3456</Text>
                        <Text style={styles.timeText}>Email: info@coffee.lv</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Opening Hours</Text>
                    <View style={styles.hours}>
                        <Text style={styles.timeText}>Mon - Fri: 07:00 - 20:00</Text>
                        <Text style={styles.timeText}>Sat - Sun: 08:00 - 18:00</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Contact;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    content: {
        padding: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    section: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    heading: {
        color: '#e0e0e0',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        color: '#a0a0a0',
        fontSize: 16,
        lineHeight: 24,
    },
    hours: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        padding: 10,
    },
    timeText: {
        color: '#a0a0a0',
        fontSize: 16,
        marginVertical: 5,
    }
});