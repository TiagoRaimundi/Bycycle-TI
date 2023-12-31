import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Button, TextInput } from 'react-native-paper';
import firestore from './firebase'; // Importando a configuração do Firebase
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { FirstStreetCoordinates, SecondStreetCoordinates, ThirdStreetCoordinates, FourthStreetCoordinates, fifthStreetCoordinates, sixthStreetCoordinates, AnaStreet } from './StreetCoordinates';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import UploadMedia from './uploadMedia';



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
  const [userLocation, setUserLocation] = useState(null);
  

  useEffect(() => {
    const requestLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de localização negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    requestLocationPermission();
  }, []);


  

  const handleMapClick = (event) => {
    const { coordinate } = event.nativeEvent;
    setSelectedCoordinate(coordinate);
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            strokeWidth={15}
          />
          <Polyline
            coordinates={SecondStreetCoordinates}
            strokeColor="red"
            strokeWidth={15}
          />
          <Polyline
            coordinates={ThirdStreetCoordinates}
            strokeColor="green"
            strokeWidth={15}
          />
          <Polyline
            coordinates={FourthStreetCoordinates}
            strokeColor="green"
            strokeWidth={15}
          />
          <Polyline
            coordinates={fifthStreetCoordinates}
            strokeColor="green"
            strokeWidth={15}
          />
          <Polyline
            coordinates={sixthStreetCoordinates}
            strokeColor="green"
            strokeWidth={15}
          />
          <Polyline
            coordinates={AnaStreet}
            strokeColor="green"
            strokeWidth={15}
          />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title="Problema"
              description={marker.description}
              onPress={() => handleMarkerPress(index)}
              tracksViewChanges={true}

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
          {userLocation && (
            <Marker coordinate={userLocation} title="Sua Localização">
              <Ionicons name="location-sharp" size={40} color="red" />
            </Marker>
          )}

        </MapView>
        {selectedMarker !== null ? (
          <View style={styles.deleteButtonContainer}>
            <Button
              icon="delete"
              mode="outlined"
              onPress={() => {
                handleMarkerLongPress(); // Excluir o marcador
                setSelectedMarker(null); // Definir selectedMarker como null para ocultar o botão
              }}
              style={styles.deleteButton}
              theme={{
                colors: {
                  text: 'white',
                  primary: '#2FAD8F',
                },
              }}
            >
              Deletar Marcador
            </Button>
            <Button
              mode="outlined"
              onPress={() => setSelectedMarker(null)} // Cancelar
              style={styles.cancelButton}
              theme={{
                colors: {
                  text: 'white',
                  primary: '#2FAD8F',
                },
              }}
            >
              Cancelar
            </Button>
          </View>
        ) : null}
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
        <View style={styles.explanationContainer}>
          <View style={[styles.colorLine, { backgroundColor: 'red' }]} />
          <Text style={styles.explanationText}>Ciclovias</Text>
        </View>
        <View style={styles.explanationContainer}>
          <View style={[styles.colorLine, { backgroundColor: 'green' }]} />
          <Text style={styles.explanationText}>Ciclofaixas</Text>
        </View>
      </View>
    </TouchableWithoutFeedback >
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
    backgroundColor: 'white',
    color: '#2FAD8F',

  },
  markerIcon: {
    width: 32,
    height: 32,
  },
  deleteButtonContainer: {
    position: 'relative',
    bottom: 20,
    alignSelf: 'center',
  },
  deleteButton: {
    width: 200,
    margin: 20
  },
  text: {
    margin: 15,
    backgroundColor: 'white',
    color: '#2FAD8F'
  },
  explanationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  explanationText: {
    marginLeft: 10,
  },

  colorLine: {
    width: 50,
    height: 5,
  },

});

export default MapScreen;