import React, {useContext, useEffect, Fragment} from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
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

const Menu = () => {
  // Context de Firebase
  const {menu, obtenerProductos} = useContext(FirebaseContext);

  // Context de pedido
  const {seleccionarProducto} = useContext(PedidoContext);

  // Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const mostrarHeading = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
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
    <Container style={globalStyles.contenedor}>
      <ScrollView>
        <Content style={{backgroundColor: '#FFF'}}>
          <List>
            {menu.map((produc, i) => {
              const {
                imagen,
                nombre,
                descripcion,
                categoria,
                precio,
                id,
              } = produc;
              return (
                <Fragment key={id}>
                  {mostrarHeading(categoria, i)}
                  <ListItem
                    onPress={() => {
                      // Eliminar algunas propiedades del producto
                      const {existencia, ...produc2} = produc;

                      seleccionarProducto(produc2);
                      navigation.navigate('DetalleProducto');
                    }}>
                    <Thumbnail large square source={{uri: imagen}} />
                    <Body>
                      <Text>{nombre} </Text>
                      <Text note numberOfLines={2}>
                        {descripcion}
                      </Text>
                      <Text>Precio: S/ {precio} </Text>
                    </Body>
                  </ListItem>
                </Fragment>
              );
            })}
          </List>
        </Content>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  separador: {
    backgroundColor: '#FFFFFF',
  },
  separadorTexto: {
    color: '#FFDA00',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Menu;
