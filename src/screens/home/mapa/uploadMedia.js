import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { storage } from './firebase';
import * as FileSystem from 'expo-file-system';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Entypo, Ionicons  } from '@expo/vector-icons'; 


const UploadMedia = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); // Acessar a URI da primeira imagem selecionada
        }
    };

    const handleUploadMedia = async () => {
        if (!image) return;
    
        setUploading(true);
        try {
            const response = await fetch(image);
            const blob = await response.blob();
    
            const filename = image.substring(image.lastIndexOf('/') + 1);
            const storageRef = ref(storage, `uploads/${filename}`);
            await uploadBytes(storageRef, blob); // Alterado para uploadBytes
            const url = await getDownloadURL(storageRef); // Alterado para obter a URL de download
            setUploading(false);
            Alert.alert('Foto enexada com sucesso!');
            setImage(null);
        } catch (error) {
            console.error(error);
            setUploading(false);
            Alert.alert('Ocorreu algum erro, tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity  style={styles.iconCam} onPress={pickImage}>
            <Entypo name="camera" size={24} color="black" />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
            <TouchableOpacity style={styles.iconSend} onPress={handleUploadMedia} disabled={uploading}>
                <Ionicons  name="send" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    );
};

export default UploadMedia;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCam:{
        alignSelf: 'flex-start',
       
    }, 
    iconSend:{  
        alignSelf: 'flex-end'
    }
});