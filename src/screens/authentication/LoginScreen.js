import React from 'react';
import { ImageBackground } from 'react-native';
import { View, TextInput, StyleSheet, Button, Alert, Text, TouchableOpacity, Image } from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase';

const image = {uri:'https://i.pinimg.com/564x/8b/2c/d4/8b2cd449c9a6809cf57cf5cf3012f9f6.jpg'}

const LoginScreen = () => { 

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const navigation = useNavigation();
  
    const handleEmailChange = (email) => {
      setEmail(email);
    }
    const handlePasswordChange = (password) => {
      setPassword(password);
    }
  
    async function handleLogin() {
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
          console.log('sucesso');
          navigation.navigate('Home');
      })
    }
    return (
      <ImageBackground source={image} style={{flex:1, height:"100%"}}>
      <View style={styles.container}>

        <Image
            source={require('./../../assets/logo.png')}
            style={styles.imagem}
            resizeMode="contain"
          />
          <Text style={styles.text}> Fazer Login </Text>
          <Text style={styles.subText}>Insira seus dados</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          placeholderTextColor={'white'}
          keyboardType="email-address"
          onChangeText={handleEmailChange}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
        <TouchableOpacity 
         style={styles.btn} 
         onPress={handleLogin}
         >
            <Text style={styles.textBtn}>Entrar</Text>
         </TouchableOpacity>

         <Text style={styles.subText2}
          onPress={() => navigation.navigate('Cadastro')}
          >Ainda não possui uma conta?</Text>
          <Text style={styles.subText3}
          onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text>
      </View>
      </ImageBackground>
    );
  };
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    input: {
      color: 'white',
      height: 50,
      width: '80%',
      marginVertical: 10,
      borderWidth: 0.75,
      borderColor: '#ccc',
      borderRadius: 12,
      padding: 10,
    },
    imagem:{
      top: 20,
      width: 250,
      height: 250,
      alignSelf: 'center',
      marginBottom: 30,
    },
    text:{
      fontSize: 28,
      color:'white',
      fontWeight: 'bold'
    },
    subText: {
      alignSelf: 'center',
      fontSize: 18,
      color: 'white',
      marginVertical: 15,
    },
    btn:{
      backgroundColor: '#42f5cd',
      width: 300,
      height: 50,
      borderRadius: 30,
      marginTop: 30,
      marginBottom: 10,
      alignSelf: 'center',
    },
    textBtn:{
      color:'black',
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
  });
  
export default LoginScreen;
