import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const Formulario = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput placeholder="Ciudad" />
          <Picker>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript1" value="js1" />
            <Picker.Item label="JavaScript2" value="js2" />
            <Picker.Item label="JavaScript3" value="js3" />
            <Picker.Item label="JavaScript4" value="js4" />
            <Picker.Item label="JavaScript5" value="js5" />
          </Picker>
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text>Touch Here</Text>
            </View>
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
  formulario:{
    marginTop: 80,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0A0909",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default Formulario;
