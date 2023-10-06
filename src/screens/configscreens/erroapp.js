import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrosApp = () => {
  return (
    <View style={styles.container}>
      <Text>Reportar Erros</Text>
    </View>
  )
}

export default ErrosApp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  