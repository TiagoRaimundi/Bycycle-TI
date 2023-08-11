import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Info = () => {
  return (
    <View style={styles.container}>
      <Text>Informações</Text>
    </View>
  )
}

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
