import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, ScrollView, View, FlatList, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Separator,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Body,
} from 'native-base';
import globalStyles from '../styles/global';

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';

const {height, width} = Dimensions.get('window');

const Ordenes = () => {
  // Context de Firebase
  const {ordenes, obtenerOrdenes} = useContext(FirebaseContext);

  // Context de pedido
  const {seleccionarTrabajador} = useContext(PedidoContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerOrdenes();
  }, []);

  const mostrarHeading2 = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = ordenes[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return (
          <Separator style={styles.separador}>
            <Text style={styles.separadorTexto}> {categoria} </Text>
          </Separator>
        );
      }
    } else {
      return (
        <Separator style={styles.separador}>
          <Text style={styles.separadorTexto}> {categoria} </Text>
        </Separator>
      );
    }
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 10}}>
      <View style={styles.contenedor}>
        <Text
          style={{
            textAlign: 'center',
            color: '#303B5E',
            fontSize: 25,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}>
          Ordenes Generados
        </Text>
        <ScrollView
          Vertical={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={300}
          decelerationRate="fast"
          pagingEnabled>
          <View>
            <List>
              {ordenes.map((ordenes, i) => {
                const {total, tiempoentrega, orden, categoria, id} = ordenes;
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      marginBottom: 5,
                    }}
                    key={id}>
                    {mostrarHeading2(categoria, i)}
                    <ListItem
                      onPress={() => {
                        {
                          orden.map((or, i) => {
                            console.log(or.nombre);
                          });
                        }
                      }}>
                      <Body>
                        {orden.map((or, i) => {
                          <>
                            <Text>{or.nombre}</Text>
                            <Text>Hola</Text>
                          </>;
                        })}

                        <Text>hola2</Text>
                        <Text
                          style={{textAlign: 'center'}}
                          note
                          numberOfLines={2}>
                          Total: S/{total}
                        </Text>
                        <Text style={{textAlign: 'center'}}>
                          Tiempo de entrega es: {tiempoentrega}
                        </Text>
                      </Body>
                    </ListItem>
                  </View>
                );
              })}
            </List>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
  },
  contenedor2: {
    flex: 3 / 4,
    paddingVertical: 5,
    marginTop: 5,
  },
  separador: {
    backgroundColor: '#FFFFFF',
  },
  separadorTexto: {
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Ordenes;
