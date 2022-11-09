import React, {useState} from 'react';
import CryptoJS from "react-native-crypto-js";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    Button
  } from 'react-native';

import md5 from 'md5';
export const TodoEncrypt = ({navigation}) => {
    const [inputText, setInputText] = useState('');
    const [key, setKey] = useState('');
    const [ciphertext, setCiphertext] = useState('');
    const [originalText, setOriginalText] = useState('');
    const handleSave = () => {
        return encrypt();
    }
    
    const encrypt = () => {
        setCiphertext(CryptoJS.AES.encrypt(inputText, 'f293a70113ca6ae823924c13c2059a3f').toString());
        setInputText('')
        console.log(ciphertext)
        return ciphertext;
    }
    
    const decrypt = () => {
        let bytes  = CryptoJS.AES.decrypt(ciphertext, 'f293a70113ca6ae823924c13c2059a3f');
        let ogText = bytes.toString(CryptoJS.enc.Utf8);
        setOriginalText(ogText);
        return ogText;
    }

    const handleKeyInput = () => {
      console.log(md5(key))
        if(md5(key) == 'f293a70113ca6ae823924c13c2059a3f') {
            decrypt();
        }else {
            setOriginalText('clave incorrecta, ingrese la clave correcta para desencriptar');
        }
    }

  return (
    <SafeAreaView>
      <Button title="HASH TEXTO" onPress={ ()=> navigation.navigate("HASH TEXTO")}></Button>
      <Button title="HASH IMAGEN" onPress={ ()=> navigation.navigate("HASH IMAGEN")}></Button>
      <View style={styles.container}>
        <TextInput
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="ingresar texto a encriptar..."
          value={inputText}
        />
         <Button title="encriptar" onPress={ handleSave }></Button>
      </View>
      <Text style={{top:60}}>{ciphertext}</Text>
      <View style={styles.container2}>
         <TextInput
          onChangeText={
            (key) => setKey(key)
          }
          placeholder="ingresar clave para desencriptar..."
          value={key}
        />
         <Button title="desencriptar" onPress={ handleKeyInput }></Button>
         <Text style={{top:10}}>{originalText}</Text>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    top:50,
    backgroundColor: 'white',
    justifyContent:'center'
  },
  container2: {
    top:150,
    backgroundColor: 'white',
    justifyContent:'center'
  },
});