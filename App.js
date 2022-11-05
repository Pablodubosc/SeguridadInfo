import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator}  from '@react-navigation/native-stack';
import TextMD5 from './src/TextMD5';
import ImageMD5 from './src/ImageMD5';
import { TodoEncrypt } from './src/TodoEncrypt';


export default function App () {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HASH TEXTO" component={TextMD5}/>
        <Stack.Screen name="HASH IMAGEN" component={ImageMD5}/>
        <Stack.Screen name="AES ENCRYPT" component={TodoEncrypt}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
};
