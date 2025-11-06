import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imageUri, setImageUri] = useState(null);
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();

  useEffect(() => {
    if (!cameraPermission?.granted) requestCameraPermission();
    if (!mediaPermission?.granted) requestMediaPermission();
  }, []);

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSelectImage = () => {
    Alert.alert(
      'Escolher imagem',
      'Selecione uma opção',
      [
        { text: 'Tirar Foto', onPress: openCamera },
        { text: 'Escolher da Galeria', onPress: openGallery },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      {/* Avatar */}
      <TouchableOpacity onPress={handleSelectImage}>
        <Image
          source={
            imageUri
              ? { uri: imageUri }
              : require('./assets/icon.png')
          }
          style={styles.avatar}
        />
      </TouchableOpacity>

      <Text style={styles.subtitle}>Toque no avatar para alterar sua foto</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 3,
    borderColor: '#007bff',
    backgroundColor: '#ddd',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
});
