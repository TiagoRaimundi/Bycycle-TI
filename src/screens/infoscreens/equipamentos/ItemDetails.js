import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../assets/constants';

const ItemDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='chevron-back-circle' size={30} color={COLORS.offwhite} />
      </TouchableOpacity>

      <Image
        source={item.imageURL}
        style={styles.image}
      />

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>Para que usar esse equipamento?</Text>
        <Text style={styles.descText}>{item.description}</Text>

        <View style={styles.location}>
          <Ionicons name='location-outline' size={20} color={COLORS.gray}/>
          <Text>Procurar equipamento em Xanxerê - SC</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  backButton: {
    position: 'absolute',
    top: SIZES.xxLarge,
    left: SIZES.large,
    zIndex: 999,
  },
  image: {
    width: '100%',
    height: SIZES.width,
    resizeMode: 'cover',
  },
  details: {
    marginTop: -SIZES.large,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.large,
    paddingTop: SIZES.large + SIZES.small,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: SIZES.small,
  },
  description: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.small,
  },
  descText: {
    fontSize: SIZES.small,
    color: COLORS.black,
    textAlign: 'justify',
    marginBottom: SIZES.medium,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
    marginTop: SIZES.small,
  },
});
