import React, {useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Formulario = ({busqueda, setBusqueda}) => {

  
  const [count, setCount] = useState(0);
  const [animacionBtn, setAnimacionBtn] = useState(new Animated.Value(1));
  const {ciudad, pais} = busqueda;

  const onPress = () => {
    setCount(count + 1);
  };

  const animacionEntrada = () =>{
    Animated.spring(animacionBtn, {
      toValue: .75,
      useNativeDriver: true,
    }).start() 
    
  }

  const animacionSalida = () => {    
    Animated.spring(animacionBtn, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
      tension: 100,
    }).start() 
  }

  const estiloAnimacion = {
    transform: [{ scale : animacionBtn}]
  }
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput 
            value={ciudad} 
            onChangeText={ciudad => setBusqueda({...busqueda, ciudad})}
            style={styles.input}
            placeholder="Ciudad"
          />

          <Picker
            selectedValue={pais}
            onValueChange={pais => setBusqueda({...busqueda, pais})}>
            <Picker.Item label="-- Seleccione un país --" value="" />
            <Picker.Item label="Estados Unidos" value="US" />
            <Picker.Item label="México" value="MX" />
            <Picker.Item label="Argentina" value="AR" />
            <Picker.Item label="Colombia" value="CO" />
            <Picker.Item label="Costa Rica" value="CR" />
            <Picker.Item label="España" value="ES" />
            <Picker.Item label="Perú" value="PE" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          itemStyle={{ height: 120, backgroundColor: '#FFF'}}
          onPressIn={ ()=> animacionEntrada() }
          onPressOut={ () => animacionSalida() }
          >
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#0A0909',
    fontWeight: 'bold',
    fontSize: 30,
  },
  formulario: {
    marginTop: 80,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  btnBuscar: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  textoBuscar: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
