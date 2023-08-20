import { StyleSheet, View, Text, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const Info = () => {

  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(new Animated.Value(0));

  const [isDescriptionVisible2, setDescriptionVisible2] = useState(false);
  const [descriptionHeight2, setDescriptionHeight2] = useState(new Animated.Value(0));

  const [isDescriptionVisible3, setDescriptionVisible3] = useState(false);
  const [descriptionHeight3, setDescriptionHeight3] = useState(new Animated.Value(0));

  const [isDescriptionVisible4, setDescriptionVisible4] = useState(false);
  const [descriptionHeight4, setDescriptionHeight4] = useState(new Animated.Value(0));

  const [isDescriptionVisible5, setDescriptionVisible5] = useState(false);
  const [descriptionHeight5, setDescriptionHeight5] = useState(new Animated.Value(0));

  const [isDescriptionVisible6, setDescriptionVisible6] = useState(false);
  const [descriptionHeight6, setDescriptionHeight6] = useState(new Animated.Value(0));

  const [isDescriptionVisible7, setDescriptionVisible7] = useState(false);
  const [descriptionHeight7, setDescriptionHeight7] = useState(new Animated.Value(0));

  const [isDescriptionVisible8, setDescriptionVisible8] = useState(false);
  const [descriptionHeight8, setDescriptionHeight8] = useState(new Animated.Value(0));

  const [isDescriptionVisible9, setDescriptionVisible9] = useState(false);
  const [descriptionHeight9, setDescriptionHeight9] = useState(new Animated.Value(0));

  const [isDescriptionVisible10, setDescriptionVisible10] = useState(false);
  const [descriptionHeight10, setDescriptionHeight10] = useState(new Animated.Value(0));

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

  const toggleDescription4 = () => {

    if (isDescriptionVisible4) {

      Animated.timing(descriptionHeight4, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible4(false));

    } else {

      setDescriptionVisible4(true);

      Animated.timing(descriptionHeight4, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();
    }
  };

  const toggleDescription5 = () => {

    if (isDescriptionVisible5) {

      Animated.timing(descriptionHeight5, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible5(false));

    } else {

      setDescriptionVisible5(true);

      Animated.timing(descriptionHeight5, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();

    }
  };

  const toggleDescription6 = () => {

    if (isDescriptionVisible6) {

      Animated.timing(descriptionHeight6, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible6(false));

    } else {

      setDescriptionVisible6(true);

      Animated.timing(descriptionHeight6, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();

    }
  };

  const toggleDescription7 = () => {

    if (isDescriptionVisible7) {

      Animated.timing(descriptionHeight7, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible7(false));

    } else {

      setDescriptionVisible7(true);

      Animated.timing(descriptionHeight7, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();
    }
  };

  const toggleDescription8 = () => {

    if (isDescriptionVisible8) {

      Animated.timing(descriptionHeight8, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible8(false));

    } else {

      setDescriptionVisible8(true);

      Animated.timing(descriptionHeight8, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();
    }
  };

  const toggleDescription9 = () => {

    if (isDescriptionVisible9) {

      Animated.timing(descriptionHeight9, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible9(false));

    } else {

      setDescriptionVisible9(true);

      Animated.timing(descriptionHeight9, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();
    }
  };

  const toggleDescription10 = () => {

    if (isDescriptionVisible10) {

      Animated.timing(descriptionHeight10, {

        toValue: 0,

        duration: 100,

        useNativeDriver: false,

      }).start(() => setDescriptionVisible10(false));

    } else {

      setDescriptionVisible10(true);

      Animated.timing(descriptionHeight10, {

        toValue: 300, // Altura desejada da descrição

        duration: 100,

        useNativeDriver: false,

      }).start();

    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
      <LinearGradient
        colors={['white', '#CFF2EA', 'white']} // Defina as cores do gradiente
        style={styles.gradientBackground}
        >
        <TouchableOpacity
          style={isDescriptionVisible ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather style={{ marginTop: 10, }} name={isDescriptionVisible ? "chevron-up" : "chevron-down"} size={24} color="#000" />
            <Text style={{ marginTop: 10, }}>Capacete</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>O capacete é um dos acessórios para bike mais importantes, pois oferece segurança necessária para pedalar. Existem diversos modelos, mas o mais importante é optar por um capacete que seja confortável, esteja de acordo com o tamanho da sua cabeça (ficando bem ajustado) e que tenha adesivos refletores. Avalie, ainda, se o capacete respeita as normas ISO, como a ventilação, por exemplo.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible2 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription2}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather style={{ marginTop: 10, }} name={isDescriptionVisible2 ? "chevron-up" : "chevron-down"} size={24} color="#000" />
            <Text style={{ marginTop: 10, }}>Roupas</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible2 && (

          <Animated.View style={styles.modalView}>

            <Text style={styles.modalText}>A bermuda de ciclismo é um dos acessórios para bike indispensáveis, que trará muito mais conforto e permitirá que você faça pedais mais longos. A camisa é diferenciada e tem um corte mais justo, com tecido adequado a transpiração e bolsos estratégicos que ajudam o ciclista a guardar garrafas de água e outros equipamentos.</Text>

          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible3 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription3}>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Feather style={{ marginTop: 10, }} name={isDescriptionVisible3 ? "chevron-up" : "chevron-down"} size={24} color="#000" />

            <Text style={{ marginTop: 10, }}>Luvas</Text>

          </View>

        </TouchableOpacity>
        {isDescriptionVisible3 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>Luvas de ciclismo: É um acessório obrigatório, pois, além de proteger contra as quedas, ela ajuda a otimizar a performance, porque melhora a aderência das mãos e a sensibilidade no aperto das manetes de freio e alavancas de câmbio.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible4 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription4}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather style={{ marginTop: 10 }} name={isDescriptionVisible4 ? "chevron-up" : "chevron-down"} size={24} color="#000" />
            <Text style={{ marginTop: 10 }}>Óculos</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible4 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>Os óculos de ciclismo são essenciais para proteger a visão. É importante que o modelo escolhido tenha proteção ultravioleta, ventilação adequada para evitar que os óculos embacem ou que o vento resseque os olhos do ciclista e seja confortável.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible5 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription5}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Feather style={{ marginTop: 10, }} name={isDescriptionVisible5 ? "chevron-up" : "chevron-down"} size={24} color="#000" />

            <Text style={{ marginTop: 10, }}>Garrafa de hidratação</Text>

          </View>
        </TouchableOpacity>
        {isDescriptionVisible5 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText} t>É um acessório muito importante para manter a hidratação do corpo. O ideal é que haja um suporte no quadro da bicicleta para poder colocar a sua caramanhola e não deixá-la em uma mochila nas costas, porque ela poderá esquentar.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible6 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription6}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              style={{ marginTop: 10 }}
              name={isDescriptionVisible6 ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#000"
            />
            <Text style={{ marginTop: 10 }}>Luzes e faróis</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible6 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>São acessórios obrigatórios para quem pedala à noite ou ao entardecer. Esses equipamentos aumentam a segurança do ciclista, pois possibilita que seja visto mais facilmente por outros veículos, ciclistas e pedestres.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible7 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription7}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              style={{ marginTop: 10 }}
              name={isDescriptionVisible7 ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#000"
            />
            <Text style={{ marginTop: 10 }}>Kit de Ferramentas</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible7 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>É sempre bom levar aos percursos um kit de ferramentas e uma bomba de ar para lhe auxiliar na ocorrência de eventuais problemas e/ou desafios que poderá encontrar ao longo do percurso.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible8 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription8}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              style={{ marginTop: 10 }}
              name={isDescriptionVisible8 ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#000"
            />
            <Text style={{ marginTop: 10 }}>Retrovisores e buzinas</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible8 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>Para os ciclistas que costumam pedalar próximos ao trânsito, é recomendado a utilização de retrovisores laterais para visualizar melhor o seu redor, evitando acidentes. Já a buzina é uma ótima sinalizadora de presença e alerta, ajudando em casos de fechadas ou de outras situações emergenciais no trânsito.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible9 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription9}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              style={{ marginTop: 10 }}
              name={isDescriptionVisible9 ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#000"
            />
            <Text style={{ marginTop: 10 }}>Coletes refletores</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible9 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>Os coletes refletores são acessórios para bike obrigatórios de quem pedala à noite ou ao entardecer. Eles ajudam os demais motoristas e pessoas a enxergarem você, evitando acidentes.</Text>
          </Animated.View>
        )}

        <TouchableOpacity
          style={isDescriptionVisible10 ? styles.buttonOpen2 : styles.buttonOpen}
          onPress={toggleDescription10}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              style={{ marginTop: 10 }}
              name={isDescriptionVisible10 ? 'chevron-up' : 'chevron-down'}
              size={24}
              color="#000"
            />
            <Text style={{ marginTop: 10 }}>Referências</Text>
          </View>
        </TouchableOpacity>
        {isDescriptionVisible10 && (
          <Animated.View style={styles.modalView}>
            <Text style={styles.modalText}>Referência: https://blog.bikeregistrada.com.br/checklist-dos-acessorios-para-bike-obrigatorios/ </Text>
          </Animated.View>
        )}
      </LinearGradient>
      </ScrollView>
    </View>
  )
}

export default Info;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  centeredView: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  gradientBackground:{
    width: '100%',
    flex: 1, // Ocupar todo o espaço disponível
    justifyContent: 'center', // Centralizar o conteúdo verticalmente
    alignItems: 'center', // Centralizar o conteúdo horizontalmente
  },
  modalView: {
    backgroundColor: '#CFF2EA',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinhe o conteúdo no topo
    shadowColor: '#000',
    borderWidth: 1,
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
    width: '90%',
    height: 50,
    backgroundColor: '#CBFFF2',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonOpen2: {
    width: '90%',
    height: 50,
    backgroundColor: '#CBFFF2',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  modalText: {
    marginBottom: 10,
    top: 5,
    color: 'black',
    padding: 0,
    textAlign: 'justify', // Justifica o texto
  },
  textStyle: {
    color: 'black',
  },
  textStyleClose: {
    color: 'black',
    textAlign: 'center',
  },
});