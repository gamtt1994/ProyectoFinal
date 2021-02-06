import 'react-native-gesture-handler';
import React from 'react';
import Inicio from './views/Inicio';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuNavegacion from './views/navigation';
import Menu from './views/Menu';

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={screenOptionStyle}>
          <Drawer.Screen name="Inicio" component={Inicio} />
          <Drawer.Screen name="MenuNavegacion" component={MenuNavegacion} />
          <Drawer.Screen name="Menu" component={Menu} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
