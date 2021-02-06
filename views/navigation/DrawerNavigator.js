import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ContactStackNavigator, OrdenStackNavigator} from './StackNavigator';
import TabNavigator from './BottomTabNavigator';
import Menu from '../Menu';
import Personal from '../Personas';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={TabNavigator} />
        <Drawer.Screen name="Personal" component={Personal} />
        <Drawer.Screen name="Menu" component={Menu} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
