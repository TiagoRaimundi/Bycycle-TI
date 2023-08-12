import { StyleSheet, View, Text, Animated, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';

const Info = () => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(new Animated.Value(0));

  const [isDescriptionVisible2, setDescriptionVisible2] = useState(false);
  const [descriptionHeight2, setDescriptionHeight2] = useState(new Animated.Value(0));

  const [isDescriptionVisible3, setDescriptionVisible3] = useState(false);
  const [descriptionHeight3, setDescriptionHeight3] = useState(new Animated.Value(0));

  const toggleDescription = () => {

    if (isDescriptionVisible) {

      Animated.timing(descriptionHeight, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible(false));

    } else {

      setDescriptionVisible(true);

      Animated.timing(descriptionHeight, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();

    }

  };

  const toggleDescription2 = () => {

    if (isDescriptionVisible2) {

      Animated.timing(descriptionHeight2, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible2(false));

    } else {

      setDescriptionVisible2(true);

      Animated.timing(descriptionHeight2, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();

    }

  };

  const toggleDescription3 = () => {

    if (isDescriptionVisible3) {

      Animated.timing(descriptionHeight3, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible3(false));

    } else {

      setDescriptionVisible3(true);

      Animated.timing(descriptionHeight3, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();

    }

  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity 
        style={isDescriptionVisible ? styles.buttonOpen2 : styles.buttonOpen}
        onPress={toggleDescription}>

          <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <Feather style={{marginTop: 10,}} name={isDescriptionVisible ? "chevron-up" : "chevron-down"} size={24} color="#000" />

            <Text style={{marginTop: 10,}}>Acessórios</Text>

          </View>

        </TouchableOpacity>

        {isDescriptionVisible && (

          <Animated.View style={{ height: descriptionHeight }, isDescriptionVisible ? styles.modalView : styles.modalView}>
              <Text style={styles.modalText}>Capacete:  O capacete é um dos acessórios para bike mais importantes, pois oferece segurança necessária para pedalar. Existem diversos modelos, mas o mais importante é 
              optar por um capacete que seja confortável, esteja de acordo com o tamanho da sua cabeça (ficando bem ajustado) e que tenha adesivos refletores. Avalie, ainda, se o capacete 
              respeita as normas ISO, como a ventilação, por exemplo.</Text>

              <Text style={styles.modalText}>Camisa e bermuda de ciclismo: A bermuda de ciclismo é um dos acessórios para bike indispensáveis, que trará muito mais conforto e permitirá que você faça pedais mais 
              longos. A camisa é diferenciada e tem um corte mais justo, com tecido adequado a transpiração e bolsos estratégicos que ajudam o ciclista a guardar garrafas de água e outros 
              equipamentos.</Text>

              <Text style={styles.modalText}>Luvas de ciclismo: É um acessório obrigatório, pois, além de proteger contra as quedas, ela ajuda a otimizar a performance, porque melhora a aderência das mãos e a 
              sensibilidade no aperto das manetes de freio e alavancas de câmbio.</Text>

              <Text style={styles.modalText}>Óculos: Os óculos de ciclismo são essenciais para proteger a visão. É importante que o modelo escolhido tenha proteção ultravioleta, ventilação adequada para evitar que 
              os óculos embacem ou que o vento resseque os olhos do ciclista e seja confortável.</Text>

              <Text style={styles.modalText}t>Caramanhola (garrafa de hidratação): É um acessório muito importante para manter a hidratação do corpo. O ideal é que haja um suporte no quadro da bicicleta para poder 
              colocar a sua caramanhola e não deixá-la em uma mochila nas costas, porque ela poderá esquentar.</Text>

              <Text style={styles.modalText}>Luzes e faróis: São acessórios obrigatórios para quem pedala à noite ou ao entardecer. Esses equipamentos aumentam a segurança do ciclista, pois possibilita que seja 
              visto mais facilmente por outros veículos, ciclistas e pedestres.</Text>

              <Text style={styles.modalText}>Kit de ferramentas e bomba de ar: É sempre bom levar aos percursos um kit de ferramentas e uma bomba de ar para lhe auxiliar na ocorrência de eventuais problemas e/ou 
              desafios que poderá encontrar ao longo do percurso.</Text>

              <Text style={styles.modalText}>Retrovisores e buzinas: Para os ciclistas que costumam pedalar próximos ao trânsito, é recomendado a utilização de retrovisores laterais para visualizar melhor o seu 
              redor, evitando acidentes. Já a buzina é uma ótima sinalizadora de presença e alerta, ajudando em casos de fechadas ou de outras situações emergenciais no trânsito.</Text>

              <Text style={styles.modalText}>Coletes refletores: Os coletes refletores são acessórios para bike obrigatórios de quem pedala à noite ou ao entardecer. Eles ajudam os demais motoristas e pessoas a 
              enxergarem você, evitando acidentes.</Text>

              <Text style={styles.modalText}>Referência: https://blog.bikeregistrada.com.br/checklist-dos-acessorios-para-bike-obrigatorios/ </Text>
          </Animated.View>
        )}

        <TouchableOpacity 
        style={isDescriptionVisible2 ? styles.buttonOpen2 : styles.buttonOpen}
        onPress={toggleDescription2}>

          <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <Feather style={{marginTop: 10,}} name={isDescriptionVisible2 ? "chevron-up" : "chevron-down"} size={24} color="#000" />

            <Text style={{marginTop: 10,}}>Topico 2</Text>

          </View>

        </TouchableOpacity>

        {isDescriptionVisible2 && (

          <Animated.View style={{ height: descriptionHeight2 }, isDescriptionVisible2 ? styles.modalView : styles.modalView}>

            <Text>aaaaaaaaaaaaaaaaaaaa to com depressão </Text>

          </Animated.View>
        )}

        <TouchableOpacity 
        style={isDescriptionVisible3 ? styles.buttonOpen2 : styles.buttonOpen}
        onPress={toggleDescription3}>

          <View style={{ flexDirection: 'row', alignItems: 'center'}}>

            <Feather style={{marginTop: 10,}} name={isDescriptionVisible3 ? "chevron-up" : "chevron-down"} size={24} color="#000" />

            <Text style={{marginTop: 10,}}>Topico 2</Text>

          </View>

        </TouchableOpacity>

        {isDescriptionVisible3 && (

          <Animated.View style={{ height: descriptionHeight3 }, isDescriptionVisible3 ? styles.modalView : styles.modalView}>

            <Text>aaaaaaaaaaaaaaaaaaaa to com depressão </Text>

          </Animated.View>
        )}
      </ScrollView>
    </View>
  )
}

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6FFE9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: '#CFF2EA',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    width: 450,
    height: 1050,
    alignItems: 'center',
    shadowColor: '#000',
    borderWidth: 5,
    borderColor: '#95FFCD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  buttonOpen: {
    width: 450,
    height: 40,
    backgroundColor: '#95FFCD',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonOpen2: {
    width: 450,
    height: 40,
    backgroundColor: '#95FFCD',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  modalText: {
    marginBottom: 10,
    top: 5,
    color: 'black',
    padding: 7,
  },
  textStyle: {
    color: 'black',
  },
  textStyleClose: {
    color: 'black',
    textAlign: 'center',
  },
});