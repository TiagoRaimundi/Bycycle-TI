import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Report = () => {
  return (
    <View style={styles.container}> 
      <Text>cadastrar problema</Text>
    </View>
  )
}

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
