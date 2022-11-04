// import React in our code
import React, {useState} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
 
//import md5 to use md5()
import md5 from 'md5';
 
const App = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');
 
  const convertMD5 = () => {
    let encodedVal = md5(inputText);
    setText(encodedVal);
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
        <Button title="Imagen a Md5" onPress={ ()=> navigation.navigate("IMAGEN A MD5")}></Button>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          CONVERSOR DE TEXTO A HASH MD5
        </Text>
        <Text style={styles.textStyle}>
          Ingresar texto a convertir
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="ingresar texto..."
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={convertMD5}>
          <Text style={styles.buttonTextStyle}>
           HASHEAR A MD5
          </Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
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
