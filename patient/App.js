import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleApp from './src/main'

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleApp />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20 ,
  },
});
