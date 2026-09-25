import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
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
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.title}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.title}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  )
};

export default AppBar;