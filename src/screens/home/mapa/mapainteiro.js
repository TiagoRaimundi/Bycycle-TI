import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Button, TextInput } from 'react-native-paper';
import firestore from './firebase'; // Importando a configuração do Firebase
import { collection, addDoc, getDocs } from 'firebase/firestore';


  const initialRegion = {
    latitude: -26.881410, 
    longitude: -52.395793,
    latitudeDelta: 0.01422,
    longitudeDelta: 0.01421,
  };
  

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [problemDescription, setProblemDescription] = useState('');

  const streetCoordinates = [
    { latitude: -26.879556, longitude: -52.354209 },
    { latitude: -26.879602, longitude: -52.354251 },
    { latitude: -26.879620, longitude: -52.354317 },
    { latitude: -26.879638, longitude: -52.354373 },
    { latitude: -26.879659, longitude: -52.354445 },
    { latitude: -26.879673, longitude: -52.354500 },
    { latitude: -26.879685, longitude: -52.354532 },
    { latitude: -26.879701, longitude: -52.354605 },
    { latitude: -26.879717, longitude: -52.354673 },
    { latitude: -26.879734, longitude: -52.354744 },
    { latitude: -26.879749, longitude: -52.354789 },
    { latitude: -26.879721, longitude: -52.354690 },
    { latitude: -26.879764, longitude: -52.354844 },
    { latitude: -26.879800, longitude: -52.355013 },
    { latitude: -26.879831, longitude: -52.355134 },
    { latitude: -26.879900, longitude: -52.355356 },
    { latitude: -26.879941, longitude: -52.355514 },
    { latitude: -26.880133, longitude: -52.356287 },
    { latitude: -26.880207, longitude: -52.356651 },
    { latitude: -26.880234, longitude: -52.356846 },
    { latitude: -26.880286, longitude: -52.357165 },
    { latitude: -26.880302, longitude: -52.357370 },
    { latitude: -26.880318, longitude: -52.357575 },
    { latitude: -26.880318, longitude: -52.357575 },
    { latitude: -26.880345, longitude: -52.358165 },
    { latitude: -26.880350, longitude: -52.358302 },
    { latitude: -26.880338, longitude: -52.358365 },
    { latitude: -26.880327, longitude: -52.358428 },
    { latitude: -26.880318, longitude: -52.358497 },
    { latitude: -26.880300, longitude: -52.358545 },
    { latitude: -26.880277, longitude: -52.358580 },
    { latitude: -26.880248, longitude: -52.358628 },
    { latitude: -26.880219, longitude: -52.358682 },
    { latitude: -26.880169, longitude: -52.358750 },
    { latitude: -26.880151, longitude: -52.358811 },
    { latitude: -26.880126, longitude: -52.358907 },
    { latitude: -26.880115, longitude: -52.358965 },
    { latitude: -26.880083, longitude: -52.359018 },
    { latitude: -26.880040, longitude: -52.359071 },
    { latitude: -26.879961, longitude: -52.359132 },
    { latitude: -26.879914, longitude: -52.359158 },
    { latitude: -26.879857, longitude: -52.359173 },
    { latitude: -26.879810, longitude: -52.359198 },
    { latitude: -26.879934, longitude: -52.359070 },
    { latitude: -26.879880, longitude: -52.359101 },
    { latitude: -26.879847, longitude: -52.359113 },
    { latitude: -26.879759, longitude: -52.359108 },
    { latitude: -26.879699, longitude: -52.359113 },
    { latitude: -26.879592, longitude: -52.359115 },
    { latitude: -26.879523, longitude: -52.359121 },
    { latitude: -26.879436, longitude: -52.359129 },
    { latitude: -26.879365, longitude: -52.359132 },
    { latitude: -26.879311, longitude: -52.359143 }, //Ponto final
  ];
  const handleMapClick = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedCoordinate(coordinate);
  };
  

  const handleReportProblem = async () => {
    if (selectedCoordinate && problemDescription) {
      const newMarker = {
        coordinate: selectedCoordinate,
        description: problemDescription,
      };

      try {
        await addDoc(collection(firestore, 'problemas'), newMarker);

        setMarkers([...markers, newMarker]);
        setSelectedCoordinate(null);
        setProblemDescription('');
      } catch (error) {
        console.error('Erro ao salvar o problema:', error);
      }
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      const problemsRef = collection(firestore, 'problemas');
      const problemsSnapshot = await getDocs(problemsRef);

      const fetchedProblems = [];
      problemsSnapshot.forEach((doc) => {
        fetchedProblems.push(doc.data());
      });

      setMarkers(fetchedProblems);
    };

    fetchProblems();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapClick}
      >
         <Polyline
          coordinates={streetCoordinates}
          strokeColor="red" // Define a cor da linha
          strokeWidth={5}   // Define a largura da linha
        />

        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title="Problema"
            description={marker.description}
          >
            {/* Use a propriedade `image` para definir o ícone personalizado */}
            <Image source={require('./icon/atention.png')} style={styles.markerIcon} />
          </Marker>
        ))}
        {selectedCoordinate && (
          <Marker
            coordinate={selectedCoordinate}
            pinColor="blue"
            title="Novo Problema"
          />
        )}
      </MapView>
      <TextInput
        label="Descrição do Problema"
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
        style={styles.input}
      />
      <Button onPress={handleReportProblem}>Reportar Problema</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    margin: 10,
  },
  markerIcon: {
    width: 32,
    height: 32,
  },
});

export default MapScreen;
