import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Info({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Leis')}>
        <Text style={styles.buttonText}>Leis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Diferenca')}>
        <Text style={styles.buttonText}>Tipos de Ciclo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Equipamentos')}>
        <Text style={styles.buttonText}>Equipamentos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
