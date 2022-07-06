import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculadora from './components/calculadora'

export default function App() {
  return (
    <View style={styles.container}>
      <Calculadora/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6dcfe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
