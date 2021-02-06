import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// importar state de context
import FirebaseState from '../../context/firebase/firebaseState';
import PedidoState from '../../context/pedidos/pedidosState';

const Stack = createStackNavigator();

import DrawerNavigator from './DrawerNavigator';

const App = () => {
  return (
    <>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer independent={true}>
            <DrawerNavigator />
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </>
  );
};

export default App;
