import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Button, TextInput } from 'react-native-paper';
import firestore from './firebase'; // Importando a configuração do Firebase
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { FirstStreetCoordinates, SecondStreetCoordinates, ThirdStreetCoordinates } from './StreetCoordinates';


const initialRegion = {
  latitude: -26.881410,
  longitude: -52.395793,
  latitudeDelta: 0.01422,
  longitudeDelta: 0.01421,
};

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [problemDescription, setProblemDescription] = useState('');

  const pointInPolygon = (point, polygon) => {
    const x = point.longitude;
    const y = point.latitude;

    let isInside = false;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i].longitude;
      const yi = polygon[i].latitude;
      const xj = polygon[j].longitude;
      const yj = polygon[j].latitude;

      const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

      if (intersect) {
        isInside = !isInside;
      }
    }

    return isInside;
  };
  const handleMapClick = (event) => {
    const { coordinate } = event.nativeEvent;

    // Verificar se o clique foi dentro das coordenadas da primeira ou segunda rua
    const isInFirstStreet = pointInPolygon(coordinate, FirstStreetCoordinates);
    const isInSecondStreet = pointInPolygon(coordinate, SecondStreetCoordinates);
    const isInThirdStreet = pointInPolygon(coordinate, ThirdStreetCoordinates);

    if (isInFirstStreet || isInSecondStreet || isInThirdStreet) {
      setSelectedCoordinate(coordinate);
    } else {
      // Aqui você pode exibir um aviso para o usuário
      console.log('Clique fora das áreas delimitadas das ruas.');
    }
  };
  
  const handleMarkerPress = (markerIndex) => {
    setSelectedMarker(markerIndex);
  };
  const handleMarkerLongPress = async () => {
    if (selectedMarker !== null) {
      const markerToDelete = markers[selectedMarker];
  
      try {
        const docRef = doc(firestore, 'problemas', markerToDelete.id);
        await deleteDoc(docRef);
  
        // Use spread para criar uma cópia atualizada do array de markers
        const updatedMarkers = [...markers];
        updatedMarkers.splice(selectedMarker, 1); // Remove o marcador
  
        setMarkers(updatedMarkers);
        setSelectedMarker(null);
      } catch (error) {
        console.error('Erro ao excluir o marcador:', error);
      }
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      const problemsRef = collection(firestore, 'problemas');
      const problemsSnapshot = await getDocs(problemsRef);

      const fetchedProblems = [];
      problemsSnapshot.forEach((doc) => {
        fetchedProblems.push({ id: doc.id, ...doc.data() });
      });

      setMarkers(fetchedProblems);
    };

    fetchProblems();
  }, []);

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

  return (
    <View style={styles.container}>


      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapClick}
        customMapStyle={[
          {
            featureType: 'poi',
            stylers: [{ visibility: 'off' }],
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
        ]}
      >
        <Polyline
          coordinates={FirstStreetCoordinates}
          strokeColor="red"
          strokeWidth={10}
        />
        <Polyline
          coordinates={SecondStreetCoordinates}
          strokeColor="red"
          strokeWidth={10}
        />
        <Polyline
          coordinates={ThirdStreetCoordinates}
          strokeColor="green"
          strokeWidth={10}
        />
        

        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title="Problema"
            description={marker.description}
            onPress={() => handleMarkerPress(index)}
            tracksViewChanges={true}
            anchor={{ x: 0.1, y: 0.1 }} 
          >
            <Image source={require('./icon/atention.png')} style={styles.markerIcon} />
          </Marker>
        ))}
        {selectedCoordinate && (
          <Marker
            coordinate={selectedCoordinate}
            pinColor="#2FAD8F"
            title="Novo Problema"
          />
          
        )}
      </MapView>

      <View style={styles.colorInfo}>
        <Text style={styles.colorText}>Cores das Polylines:</Text>
        <Text style={[styles.colorText, { color: 'red' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
        <Text style={[styles.colorText, { color: 'green' }]}>.</Text>
      </View>

      {selectedMarker !== null && (
        <View style={styles.deleteButtonContainer}>
          <Button
            icon="delete"
            mode="outlined"
            onPress={handleMarkerLongPress}
            style={styles.deleteButton}
            textColor="#2FAD8F"
          >
            Deletar Marcador
          </Button>
        </View>
      )}
      <TextInput
        label="Descrição do Problema"  
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
        style={styles.input}
        theme={{
          colors: {
            text: 'white', 
            primary: '#2FAD8F', 
          },
        }}
      />
      <Button style={styles.text} onPress={handleReportProblem} textColor='#2FAD8F'>Reportar Problema</Button>
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
    margin: 50,
    backgroundColor: 'white',
    color: '#2FAD8F',
    
  },
  markerIcon: {
    width: 32,
    height: 32,
  },
  deleteButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  deleteButton: {
    width: 200,
    margin: 20
  },
  text:{
    backgroundColor:'white',
    color: '#2FAD8F'
  },
  colorInfo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  colorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;