import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const App = () => {
  const initialRegion = {
    latitude: -26.881410, 
    longitude: -52.395793,
    latitudeDelta: 0.01422,
    longitudeDelta: 0.01421,
  };

  const RedStreetScreen = () => {}
    const streetCoordinates = [
      { latitude: -26.881654, longitude: -52.382546 }, //Ponto inicial da rua
      { latitude: -26.879329, longitude: -52.391531 },
      { latitude: -26.878362, longitude: -52.395825 },
      { latitude: -26.876187, longitude: -52.403830 },
      { latitude: -26.875239, longitude: -52.407145 }, //Ponto final
  
     
    ];
  
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [newMarkerData, setNewMarkerData] = useState({ title: '', description: '' });
  
  const handleMapPress = event => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedMarker(null);
    setNewMarkerData({ title: '', description: '' });
    setMarkers([...markers, { coordinate: { latitude, longitude } }]);
  };

  const handleMarkerPress = marker => {
    setSelectedMarker(marker);
  };

  const deleteMarker = markerToDelete => {
    Alert.alert(
      'Deletar Problema',
      'Você tem certeza que deseja deletar esse aviso?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Deletar',
          style: 'destructive',
          onPress: () => {
            const updatedMarkers = markers.filter(marker => marker !== markerToDelete);
            setMarkers(updatedMarkers);
            setSelectedMarker(null);
          },
        },
      ]
    );
  };
  
  return (
    <View style={styles.container}>
       
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress}
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
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          >
            <Image source={require('./icon/atention.png')} style={styles.markerIcon} />
          </Marker>
        ))}
      </MapView>

      {selectedMarker && (
        <View style={styles.markerInfo}>
          <Text style={styles.markerTitle}>{selectedMarker.title || 'No Title'}</Text>
          <Text>{selectedMarker.description || 'No Description'}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteMarker(selectedMarker)}
          >
            <Text style={styles.deleteButtonText}>Deletar Problema</Text>
          </TouchableOpacity>
        </View>
      )}

      {!selectedMarker && (
        <View style={styles.newMarkerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={newMarkerData.title}
            onChangeText={text => setNewMarkerData({ ...newMarkerData, title: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={newMarkerData.description}
            onChangeText={text => setNewMarkerData({ ...newMarkerData, description: text })}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              if (newMarkerData.title || newMarkerData.description) {
                const updatedMarkers = [...markers];
                updatedMarkers[markers.length - 1] = {
                  ...updatedMarkers[markers.length - 1],
                  title: newMarkerData.title,
                  description: newMarkerData.description,
                };
                setMarkers(updatedMarkers);
                setNewMarkerData({ title: '', description: '' });
              }
            }}
          >
            <Text style={styles.addButtonText}>Registrar Problema</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  map: {
    flex: 1,
  },
  markerInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  title:{
    textAlign: 'center',
    fontWeight: 'normal',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,


  },
  markerTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newMarkerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#530404',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  markerIcon: {
    width: 30,
    height: 30,
  },
});

export default App;
