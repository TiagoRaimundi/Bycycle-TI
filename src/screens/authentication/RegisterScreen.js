import React, { useState } from 'react';
import { ImageBackground, View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const image = { uri: 'https://cdn.pixabay.com/photo/2020/03/12/07/31/bike-4924185_1280.jpg' }

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('BottomTabs');
      })
      .catch(error => {
        console.error('Erro ao criar conta: ', error);
      });
  }

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.text}> Cadastro de Usuário </Text>
        <Text style={styles.subText}> Insira seus dados </Text>

        <View style={styles.input}>
          <Icon name="user" style={styles.inputIcon} />
          <TextInput
            placeholder="Nome de Usuário"
            placeholderTextColor="white"
            onChangeText={setFullName}
            value={fullName}
            autoCapitalize="none"
            autoCorrect={false}
            style={{ flex: 1, color: 'white' }}
          />
        </View>
        <View style={styles.input}>
          <Icon name="envelope" style={styles.inputIcon} />
          <TextInput
            placeholder="Insira seu email"
            placeholderTextColor={'white'}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={{ flex: 1, color: 'white' }}
          />
        </View>

        <View style={styles.input}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput
            placeholder="Insira sua senha"
            placeholderTextColor={'white'}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={hidePassword}
            style={{ flex: 1., color: 'white' }}
          />
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.eyeIconContainer}
          >
            <Icon name={hidePassword ? 'eye-slash' : 'eye'} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.textBtn}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Já possui uma conta? Faça Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 18,
    color: 'white',
    marginVertical: 15,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
    height: 50,
    width: '80%',
    marginVertical: 10,
    borderBottomWidth: 0.75,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  inputIcon: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
  },
  eyeIconContainer: {
    paddingLeft: 10,
  },
  eyeIcon: {
    fontSize: 18,
    color: 'white',
  },
  btn: {
    backgroundColor: '#42f5cd',
    width: 300,
    height: 50,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'center',
  },
  textBtn: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  loginText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterScreen;
