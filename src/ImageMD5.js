import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Buffer } from "buffer";
import Rusha from 'rusha';
import md5 from 'md5';

export default function ImagePickerExample({navigation}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Get an image from the user's device
    let result = await ImagePicker.launchImageLibraryAsync({ 
      allowsEditing: true, 
      aspect: [9,7.4], 
      exif:true, 
      base64:true, 
      quality: 1, 
    });

    // Convert the image data from Base64 to binary
    const binaryImage = Buffer.from(result.base64, "base64");

    // Get the SHA-1 digest of the binary image data
    const digest = Rusha.createHash().update(binaryImage).digest('hex'); 
    const md5Hash = md5(binaryImage);

    if (!result.cancelled) {
      setImage(result.uri);
      setTextMD5(md5Hash);
      setTextSHA1(digest)
    }
  };
  const [textMD5, setTextMD5] = useState('');
  const [textSHA1, setTextSHA1] = useState('');

  return (
    <View>
      <Button title="HASH TEXTO" onPress={ ()=> navigation.navigate("HASH TEXTO")}></Button>
      <Button title="AES ENCRYPT" onPress={ ()=> navigation.navigate("AES ENCRYPT")}></Button>
      <View style={styles.container}>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,left:100 }} />}
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Text>HASH MD5</Text>
        <Text style={styles.textStyle}>{textMD5}</Text>
        <Text>HASH SHA1</Text>
        <Text style={styles.textStyle}>{textSHA1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:50,
    backgroundColor: 'white',
    justifyContent:'center'
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
});
