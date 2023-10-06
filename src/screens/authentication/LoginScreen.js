import React, { useState } from 'react';
import { ImageBackground, View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';

const image = { uri: 'https://p1.pxfuel.com/preview/709/844/62/human-sunset-adventure-sky-a-sport.jpg' }

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [loginError, setLoginError] = useState('');

  const navigation = useNavigation();

  const handleEmailChange = (email) => {
    setEmail(email);
    setLoginError('');
  }

  const handlePasswordChange = (password) => {
    setPassword(password);
    setLoginError('');
  }

  async function handleLogin() {
    setLoginError('');

    if (!email || !password) {
      setLoginError('Preencha todos os campos.');
      return;
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Drawer');
      })
      .catch(error => {
        setLoginError('Credenciais inválidas. Tente novamente.');
      });
  }

  return (
    <ImageBackground source={image} style={{ flex: 1, height: "100%" }}>
      <View style={styles.container}>
        <Image
          source={require('./../../assets/logo.png')}
          style={styles.imagem}
          resizeMode="contain"
        />
        <Text style={styles.text}> Fazer Login </Text>
        <Text style={styles.subText}>Insira seus dados</Text>

        <View style={styles.input}>
          <Icon name="envelope" style={styles.inputIcon} />
          <TextInput
            placeholder="Insira seu e-mail"
            placeholderTextColor={'white'}
            keyboardType="email-address"
            onChangeText={handleEmailChange}
            value={email}
            style={{ flex: 1 , color:'white'}}
          />
        </View>

        <View style={styles.input}>
          <Icon name="lock" style={styles.inputIcon} />
          <TextInput
            placeholder="Insira sua senha"
            placeholderTextColor={'white'}
            secureTextEntry={hidePassword}
            onChangeText={handlePasswordChange}
            value={password}
            style={{ flex: 1, color:'white' }}
          />
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.eyeIconContainer}
          >
            <Icon
              name={hidePassword ? 'eye-slash' : 'eye'}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {loginError ? <Text style={styles.errorText}>{loginError}</Text> : null}

        <TouchableOpacity
          style={styles.btn}
          onPress={handleLogin}
        >
          <Text style={styles.textBtn}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.subText2}>Ainda não possui uma conta?</Text>
          <Text style={styles.subText3}>Cadastre-se</Text>
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
  imagem: {
    top: 20,
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold'
  },
  subText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    marginVertical: 15,
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
  subText2: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    marginTop: 15,
  },
  subText3: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'white',
    marginTop: 5,
    marginBottom: 40,
    textDecorationLine: 'underline'
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default LoginScreen;
