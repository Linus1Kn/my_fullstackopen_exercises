import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    margin: 20,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.title}>Repositories</Text>
      </Pressable>
    </View>
  )
};

export default AppBar;