import React, {useState} from 'react';
import CryptoJS from "react-native-crypto-js";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button
  } from 'react-native';


export const TodoEncrypt = () => {
    const [inputText, setInputText] = useState('');
    const [key, setKey] = useState('');
    const [ciphertext, setCiphertext] = useState('');
    const [originalText, setOriginalText] = useState('');
    const handleSave = () => {
        return encrypt();
    }
    
    const encrypt = () => {
        setCiphertext(CryptoJS.AES.encrypt(inputText, 'secret key 123').toString());
        console.log(ciphertext)
        return ciphertext;
    }
    
    const decrypt = () => {
        let bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        let ogText = bytes.toString(CryptoJS.enc.Utf8);
        setOriginalText(ogText);
        return ogText;
    }

    const handleKeyInput = () => {
        if(key == 'secret key 123') {
            decrypt();
        }else {
            setOriginalText('incorrect key, im Unbreakable!! haha ');
        }
    }

  return (
    <SafeAreaView>
        <TextInput
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="ingresar texto..."
          value={inputText}
        />
         <Button title="Save data" onPress={ handleSave }></Button>
         <TextInput
          onChangeText={
            (key) => setKey(key)
          }
          placeholder="ingresar texto..."
          value={key}
        />
         <Button title="Decrypt" onPress={ handleKeyInput }></Button>
         <Text>{originalText}</Text>
    </SafeAreaView>
  )
}
