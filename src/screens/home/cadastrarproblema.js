import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import firestore from '../home/mapa/firebase'; // Importando a configuração do Firebase
import { COLORS, SHADOWS, SIZES } from '../../../assets/constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

      setTitle('');
      setDescription('');
      setFullName('');

      Alert.alert('Sucesso', 'Relatório enviado com sucesso!', [{ text: 'OK' }]);
    } catch (error) {
      console.error('Erro ao adicionar relatório: ', error);

      Alert.alert('Erro', 'Erro ao enviar relatório. Por favor, tente novamente.', [{ text: 'OK' }]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerModal}>
        <View style={styles.explanationContainer}>
          <Image />
          <Text style={styles.explanationText}>
            Deseja deixar mais informações sobre a situação da cidade? Preencha o formulário!
          </Text>
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.inputName}
            placeholder="Nome Completo"
            value={fullName}
            onChangeText={setFullName}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <Text style={styles.label}>Título do Problema</Text>
          <TextInput
            style={styles.inputTitle}
            placeholder="Título do Problema"
            value={title}
            onChangeText={setTitle}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <Text style={styles.label}>Descrição do Problema</Text>
          <TextInput
            style={styles.inputDescription}
            placeholder="Descrição do Problema"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </View>
        <TouchableOpacity onPress={handleReportSubmit} style={styles.buttonEnviar}>
          <Text style={styles.textBtn}>Enviar Relatório</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  containerModal: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  explanationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  explanationText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputRow: {
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  inputDescription: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    height: 100, // Adjust height based on the desired space for this input
    marginBottom: 15,
  },
  buttonEnviar: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  textBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForumScreen;
