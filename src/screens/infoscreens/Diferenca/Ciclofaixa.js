import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Ciclofaixa = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que é Ciclovia?</Text>
      <Text style={styles.text}>
        É uma via que pode ter sentido único ou ser bidirecional, no popular, mão dupla. Também podem ser implementadas no canteiro das estradas ou centralizadas no meio das rodovias.
      </Text>
      <Text style={styles.text}>
        Mas, o que realmente a diferencia das demais marcações, é a maneira como ela é separada, deixando o ciclista afastado dos automóveis e dos pedestres. Para que isso aconteça, elas podem ser mais elevadas em relação às estradas.
      </Text>
      <Text style={styles.text}>
        Por isso, são sempre instaladas em rotas com mais tráfego, auxiliando, assim, no fluxo dos transportes e reduzindo acidentes.
      </Text>
    </View>
  );
};

export default Ciclofaixa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'justify',
    lineHeight: 28,
    color: '#555',
  },
});
