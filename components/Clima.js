import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Clima = () => {
  return (<Text style={styles.texto}>Hola desde el detalle del clima</Text>);
};

const styles = StyleSheet.create({
  texto: {
    color: '#0E0D0D',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Clima;
