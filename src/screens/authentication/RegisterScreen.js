import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const image = { uri: 'https://i.pinimg.com/564x/f1/19/ab/f119ab4a139af825b1fc572fe10d2ac0.jpg' }

const RegisterScreen = () => {

  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  async function handleSignUp() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        //console.log(user);
        navigation.navigate('Login')
      })
  }

  return (
    <ImageBackground source={image} style={styles.imagem}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.text}>Cadastro de Usuário</Text>
        <Text style={styles.subText}>Insira seus dados</Text>
       

        <View style={styles.input}>

          <TextInput
            placeholder="Insira seu email"
            placeholderTextColor={'white'}
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

        </View >
       
          <View style={styles.input}>

            <TextInput
              placeholder="Insira sua senha"
              placeholderTextColor={'white'}
              onChangeText={setPassword}
              value={password}
              password
              secureTextEntry={true}
            />
            {password && (
              <Icon
                onPress={() => setHidePassword(!hidePassword)}
                name={hidePassword ? 'eye' : 'eye-slash'}
                style={styles.eyeIcon}
              />
            )}
          </View>
          <View>

          <TouchableOpacity
            style={styles.btn}
            onPress={handleSignUp}
          >
            <Text style={styles.textBtn}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagem: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text1: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    // justifyContent: 'center'
  },
  subText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    marginVertical: 15,
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
  eyeIcon: {
    fontSize: 15,
    color: 'white',
  },
  image: {
    width: 290,
    height: 290,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#42f5cd',
    width: 270,
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
  }
});

export default RegisterScreen;
