/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';


import Formulario from './components/Formulario';
import Clima from './components/Clima';


const App  = () => {
  const ocultarTeclado = () =>{
    // ocultar tecaldo function
    Keyboard.dismiss();
  }
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          ocultarTeclado();
        }}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario/>
          </View>
          <Clima />
        </View> 
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: 'rgb(71, 149, 212)',
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  }
});

export default App;
