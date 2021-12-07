/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Formulario from './components/Formulario';
import Clima from './components/Clima';


const App  = () => {
  return (
    <>
      <View>
        <Formulario/>
        <Clima />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
