import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  )
}

export default Perfil;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  