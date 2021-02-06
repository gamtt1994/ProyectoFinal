import React, {useContext} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Body,
  Text,
  H1,
  Card,
  CardItem,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/global';

import PedidoContext from '../context/pedidos/pedidosContext';

const DetallePedido = () => {
  // Pedido context
  const {produc} = useContext(PedidoContext);
  const {nombre, imagen, descripcion, precio} = produc;

  // Redireccionar
  const navigation = useNavigation();

  return (
    <Container style={globalStyles.contenedor}>
      <Content style={globalStyles.contenido}>
        <H1 style={globalStyles.titulo}>{nombre}</H1>

        <Card>
          <CardItem>
            <Body>
              <Image style={globalStyles.imagen} source={{uri: imagen}} />

              <Text style={{textAlign: 'center', marginTop: 20}}>
                {descripcion}{' '}
              </Text>
              <Text style={globalStyles.cantidad}>Precio: S/ {precio}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>

      <Footer>
        <FooterTab>
          <Button
            style={globalStyles.boton}
            onPress={() => navigation.navigate('FormularioProducto')}>
            <Text style={globalStyles.botonTexto}>Ordenar</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default DetallePedido;
