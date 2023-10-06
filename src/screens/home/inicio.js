import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  )
}

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
