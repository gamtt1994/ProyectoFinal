import React from 'react';
import {Container, Button, Text} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const image = {
  uri:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerButton: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 60,
  },
  containerButton2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4090F4',
    marginBottom: 20,
    marginHorizontal: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#F6F6F6',
    padding: 15,
    borderRadius: 25,
    borderColor: 'black',
  },
  BackgrondTitle: {
    backgroundColor: '#F6F6F6',
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
    paddingTop: 10,
  },
});

const Inicio = () => {
  const navigations = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.containerButton}></View>
        <View style={styles.containerButton}></View>
        <View style={styles.containerButton2}>
          <TouchableHighlight
            style={styles.botoninicio}
            onPress={() => navigations.navigate('MenuNavegacion')}>
            <Text style={globalStyles.botonTexto}>Ingresar</Text>
          </TouchableHighlight>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Inicio;
