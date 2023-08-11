import { ImageBackground, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const image = {uri:'https://i.pinimg.com/564x/8b/2c/d4/8b2cd449c9a6809cf57cf5cf3012f9f6.jpg'}

export default function WelcomeScreen() {

    const navigation = useNavigation();

  return (
    <ImageBackground source={image} style={{flex:1, height:"100%"}}>
        <View style={{marginHorizontal: 40, marginVertical: 100, backgroundColor: 'transparent'}}>
        <StatusBar style="light" />
        <Image
         source={require('../../assets/logo.png')}
         style={styles.image}
         resizeMode="contain"
        />   
         <Text style={styles.text}>Bem Vindo(a)</Text>
         <Text style={styles.text1}>Faça Login ou Cadastre-se</Text>  

         <TouchableOpacity 
         style={styles.btn}
         onPress={() => navigation.navigate('Login')}
         >
            <Text style={styles.textBtn}>Login</Text>
         </TouchableOpacity>

         <Text style={styles.text1}> ou </Text> 

         <TouchableOpacity 
         style={styles.btn2} 
         onPress={() => navigation.navigate('Cadastro')}
         >
            <Text style={styles.textBtn}>Cadastre-se</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.btn2} 
         onPress={() => navigation.navigate('Drawer')}
         >
            <Text style={styles.textBtn}>TESTE</Text>
         </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}



const styles = StyleSheet.create({
    text:{
        color: 'white',
        fontSize: 60,
        textAlign: 'center',
        justifyContent: 'center'

    },
    text1:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center'

    },
    image: {
        alignSelf: 'center',
        height: 300,
        marginBottom: 20,
      },
    btn:{
        backgroundColor: '#42f5cd',
        width: 300,
        height: 50,
        borderRadius: 30,
        marginTop: 50,
        marginBottom: 10,
        alignSelf: 'center',
        
    },
    btn2:{
        backgroundColor: '#42f5cd',
        width: 300,
        height: 50,
        borderRadius: 30,
        marginTop: 10,
        alignSelf: 'center',
    },
    textBtn:{
        color:'black',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 8,
    }
})