import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import firestore from '../home/mapa/firebase'; // Importando a configuração do Firebase

const ForumScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullName, setFullName] = useState('');
  const [isInputFocused, setInputFocused] = useState(false);
  


  const navigation = useNavigation();

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleReportSubmit = async () => {
    // Verificar se o campo nome completo foi preenchido
    setInputFocused(false);
    if (!fullName) {
      Alert.alert('Erro', 'Por favor, preencha seu nome completo.', [{ text: 'OK' }]);
      return;
    }

    const reportsCollection = collection(firestore, 'reports');

    try {
      setInputFocused(false);
      const newReportRef = await addDoc(reportsCollection, {
        title,
        description,
        fullName, // Adicionar o nome completo ao relatório
      });

      console.log('Relatório adicionado com ID: ', newReportRef.id);

      // Limpar os campos após o envio
      setTitle('');
      setDescription('');
      setFullName('');

      // Mostrar o pop-up de sucesso
      Alert.alert('Sucesso', 'Relatório enviado com sucesso!', [{ text: 'OK' }]);
    } catch (error) {
      console.error('Erro ao adicionar relatório: ', error);

      
      // Mostrar o pop-up de erro
      Alert.alert('Erro', 'Erro ao enviar relatório. Por favor, tente novamente.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Quadro explicativo da tela */}
      
      <View style={styles.explanationContainer}>
        <Text style={styles.explanationText}>
          Deseja deixar mais Informações sobre a situação da cidade. Preencha o Formulário!
        </Text>
      </View>

      {/* Campos de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <TextInput
        style={styles.input}
        placeholder="Título do Problema"
        value={title}
        onChangeText={setTitle}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do Problema"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {/* Botão de envio */}
      
        <Button
          title="Enviar Relatório"
          onPress={handleReportSubmit}
          color="#2FAD8F"
        />
     
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  explanationContainer: {
    marginTop: 0,
    padding: 5,
    margin: 20,
    backgroundColor: '#2FAD8F',
    borderRadius: 5,
  },
  explanationText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  tabBarPlaceholder: {
    height: 60, // Altura do tab bar
  },
});

export default ForumScreen;
