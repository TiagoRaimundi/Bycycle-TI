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
    { latitude: -26.881654, longitude: -52.382546 }, //Ponto inicial da rua
    { latitude: -26.879329, longitude: -52.391531 },
    { latitude: -26.878362, longitude: -52.395825 },
    { latitude: -26.876187, longitude: -52.403830 },
    { latitude: -26.875239, longitude: -52.407145 }, //Ponto final
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
