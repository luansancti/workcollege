/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button, Header } from 'react-native-elements';

import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


const ActionSend = (action) => {
  if(action == 0) {
    axios.get('http://192.168.4.1/desligar', { timeout: 5000 })
    .then(data => {
      console.log(data.data)
    }, err => {
      console.log(err)
    })
  } else {
    axios.get('http://192.168.4.1/ligar', { timeout: 5000 })
    .then(data => {
      console.log(data.data)
    }, err => {
      console.log(err)
    })
  }
  
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor='black' />
      <Header centerComponent={{text: 'LÂMPADA', style:{color:'white', fontSize:30}}} containerStyle={{ backgroundColor: 'black',justifyContent: 'space-around',}}/>
      <SafeAreaView style={styles.safeView}>
        <Button
          title="Ligar"
          onPress={() => {
            ActionSend(1);
          }}
          buttonStyle={{marginBottom:30, backgroundColor:'black'}}
        />
        <Button
          title="Desligar"
          onPress={() => {
            ActionSend(0)
          }}
          buttonStyle={{backgroundColor:'black'}}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    justifyContent: 'center',
    padding:30
  },
  buttonOn: {

    marginBottom: 30,

  }


});

export default App;
