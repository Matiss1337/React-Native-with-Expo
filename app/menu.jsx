import {View, Text, StyleSheet, Appearance, Platform, SafeAreaView, ScrollView} from 'react-native';

import { Colors} from "@/constants/Colors";

export default function Menu() {
    const colorScheme = Appearance.getColorScheme();
    // checks theme
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    // check platform to render conditionaly

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
    </View>
  );
}

function createStyles(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      color: theme.text,
    },
  });
}