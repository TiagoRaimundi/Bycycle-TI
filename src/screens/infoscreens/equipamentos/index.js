import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { COLORS, SIZES } from '../../../../assets/constants';
import items from './data';
import { Ionicons } from '@expo/vector-icons';


const Equipamentos = ({ navigation }) => {
  

  return (
    <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='chevron-back-circle' size={30} color={COLORS.primary} />
      </TouchableOpacity>
        <Text style={styles.title}>Equipamentos</Text>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate('ItemDetails', { item })}>
            <View style={styles.image}>
              <Image source={item.imageURL} style={styles.productImg} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.productTittle}>{item.title}</Text>
              <Text style={styles.productTittle2}>{item.supplier}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    top: SIZES.xSmall
  },
  backButton: {
    position: 'absolute',
    top: SIZES.xLarge,
    left: SIZES.large,
    zIndex: 999,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: "row", // Align items horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 70,
    backgroundColor: 'transparent',
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center"
  },
  productImg: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover"
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  productTittle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.black
  },
  productTittle2: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    color: COLORS.black
  }
});

export default Equipamentos;
