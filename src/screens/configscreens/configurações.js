import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert, Button } from 'react-native';
import { Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

 
const INSTAGRAM_ICON = 'instagram';
const WEBSITE_ICON = 'globe';

export default function Configuracoes() {
  const navigation = useNavigation();

    const handleLogout = async () => {
 
};

  const WebsiteLink = () => {
    const websiteURL =
      'https://inaciorigatti.github.io/divulgacaoMillo/?fbclid=PAAaaaWlL1cZSQuBej1qQ-fQVctDcreuGuZI4pF99Z2HB8HZx74Tgy_iQF3lE';
    Linking.openURL(websiteURL);
  };

  const goToScreenPp =  () => {
  console.log('safada');
  navigation.navigate("Pp")
  };
   const goToScreenTu =  () => {
  console.log('safada');
  navigation.navigate("Tu")
  }; 



  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToScreenPp} style={styles.button4}>
          <Text style={styles.buttonText}>Políticas de Privacidade</Text>
        </TouchableOpacity>
      </View>
      
  <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToScreenTu} style={styles.button9}>
          <Text style={styles.buttonText}>Termos de uso</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Linking.openURL('mailto:seuamigovirtualmillo@gmail.com')
        }
      >
        <Text style={styles.button5}>Feedback</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>

        <TouchableOpacity style={styles.button6} onPress={WebsiteLink}>
          <Ionicons name={WEBSITE_ICON} size={40} color={'#333'} />
        </TouchableOpacity>
      </View>
    </View>
  );
} 
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4eaed', 
    alignItems: 'center',
  },
  titulo: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button4: { //ppv
    backgroundColor: '#a6c4bd',
    padding:16,
     width: 390,
     marginTop: 30,  
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%', // 80% of the screen width
  },
    button6: { //insta e site
    backgroundColor: '#c7d7d8',
    padding:16, 
    marginTop:85,  
    width: 200,
    height: 70,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
  },
     button5: { //feedback
   backgroundColor: '#a6c4bd',
   padding: 16,
    width: 390,
    fontSize: 25,
    textAlign: 'center',
  }, 
      button9: { //feedback
   backgroundColor: '#c7d7d8',
   padding: 16,
    width: 390,
    fontSize: 25,
    textAlign: 'center',
  },  
  
});  