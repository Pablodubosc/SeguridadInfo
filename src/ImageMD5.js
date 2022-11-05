// import React in our code
import React, {useState} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  Image,
} from 'react-native';

import ImgToBase64 from 'react-native-image-base64';
 
//import md5 to use md5()
import md5 from 'md5';
 


const App = ({navigation}) => {

    const pickImage =  () => {
      console.log('entra a la funcion')
        ImgToBase64.getBase64String('file://./plane.jpg')
        .then(base64String => console.log(md5(base64String)))
        .catch(err => console.log('hubo un error'));
        };

 
  return (
    <SafeAreaView style={{flex: 1}}>
        <Button title="Texto a Md5" onPress={ ()=> navigation.navigate("TEXTO A MD5")}></Button>
        <Button title="Encrpyt" onPress={ ()=> navigation.navigate("Encrpyt") }></Button>
        <Image source={require('./plane.jpg')} style={{ width: 200, height: 200 }} />
      <Button title="GET HASH FROM IMAGE" onPress={pickImage} />
    </SafeAreaView>
  );
};
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width:150,
    height:150,
    left:120
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});