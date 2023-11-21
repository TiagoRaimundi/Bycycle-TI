import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert, Button } from 'react-native';
import { Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../assets/constants';

 
const INSTAGRAM_ICON = 'instagram';
const WEBSITE_ICON = 'globe';

export default function Configuracoes() {

  const navigation = useNavigation();

  const WebsiteLink = () => {
    const websiteURL =
      'https://github.com/jose-gp21/Bycycle-vweb/tree/main/bycycle-web-main';
    Linking.openURL(websiteURL);
  };

  const GitHub = () => {
    const websiteURL =
      'https://github.com/TiagoRaimundi/Bycycle-TI';
    Linking.openURL(websiteURL);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='chevron-back-circle' size={30} color={COLORS.offwhite} />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Políticas de Privacidade")} style={styles.button}>
          <Text style={styles.buttonText}>Políticas de Privacidade</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Termos de Uso")} style={styles.button}>
          <Text style={styles.buttonText}>Termos de uso</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:suporte.bycycle@gmail.com')}>
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.buttonIcon} onPress={WebsiteLink}>
          <Ionicons name="globe" size={40} color={COLORS.secondary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonIcon} onPress={GitHub}>
        <FontAwesome name="github" size={48} color={COLORS.secondary} />
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: SIZES.xxLarge,
    left: SIZES.large,
    zIndex: 999,
  },
  titulo: {
    marginTop: SIZES.large,
    fontSize: SIZES.font,
    fontWeight: 'bold',
    color: COLORS.lightWhite,
    marginBottom: SIZES.medium,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    paddingHorizontal: SIZES.medium,
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.small,

    marginTop: SIZES.medium,
    borderRadius: SIZES.large,
  },
  buttonText: {
    fontSize: SIZES.font,
    textAlign: 'center',
    color: COLORS.black,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.large,
  },
  buttonIcon: {
    backgroundColor: COLORS.lightGray,
    padding: SIZES.small,
    borderRadius: SIZES.large,
  },
});
