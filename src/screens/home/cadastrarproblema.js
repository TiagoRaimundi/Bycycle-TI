import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import firestore from '../home/mapa/firebase'; // Importando a configuração do Firebase

const ForumScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleReportSubmit = async () => {
    const reportsCollection = collection(firestore, 'reports');

    try {
      const newReportRef = await addDoc(reportsCollection, {
        title,
        description,
      });

      console.log('Relatório adicionado com ID: ', newReportRef.id);

      // Limpar os campos após o envio
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Erro ao adicionar relatório: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título do Problema"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Problema"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
        <Button
        title="Enviar Relatório"
        onPress={handleReportSubmit}
        color="#007AFF" // Define a cor do botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },


});

export default ForumScreen;
