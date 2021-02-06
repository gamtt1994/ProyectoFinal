import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuPrincipal from '../MenuPrincipalDrawer';
import NuevaOrden from '../NuevaOrden';
import MenuPedido from '../Menu';
import FormularioProducto from '../Formulario';
import DetalleProducto from '../Detalle';
import ResumenPedido from '../ResumenPedido';
import ProgresoPedido from '../ProgresoPedido';
import Personas from '../Personas';
import OrdenProducto from '../Ordenes';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerTitleStyle: {alignSelf: 'center'},
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="SeingelPerú"
        component={MenuPrincipal}
        options={{title: 'Menú Principal'}}
      />
      <Stack.Screen name="NuevaOrden" component={NuevaOrden} />
      <Stack.Screen
        name="Menu"
        component={MenuPedido}
        options={{title: 'Productos'}}
      />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Productos"
        component={MenuPedido}
        options={{title: 'Productos'}}
      />
      <Stack.Screen
        name="DetalleProducto"
        component={DetalleProducto}
        options={{title: 'Productos'}}
      />
      <Stack.Screen
        name="FormularioProducto"
        component={FormularioProducto}
        options={{title: 'Productos'}}
      />
      <Stack.Screen
        name="ResumenPedido"
        component={ResumenPedido}
        options={{title: 'Orden de Pedido'}}
      />
      <Stack.Screen
        name="ProgresoPedido"
        component={ProgresoPedido}
        options={{title: 'Pedido'}}
      />
    </Stack.Navigator>
  );
};

const PersonStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Personas" component={Personas} />
    </Stack.Navigator>
  );
};

const OrdenStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
      <Stack.Screen name="NuevaOrden" component={NuevaOrden} />
      <Stack.Screen name="Menu" component={MenuPedido} />
    </Stack.Navigator>
  );
};

const OrdenProductosStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="OrdenProducto" component={OrdenProducto} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ContactStackNavigator,
  OrdenStackNavigator,
  PersonStackNavigator,
  OrdenProductosStackNavigator,
};
