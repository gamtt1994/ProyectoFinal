import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  MainStackNavigator,
  ContactStackNavigator,
  OrdenStackNavigator,
  PersonStackNavigator,
  OrdenProductosStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="rocket" color="#333" size={24} />,
        }}
      />
      <Tab.Screen
        name="Personas"
        component={PersonStackNavigator}
        options={{
          tabBarLabel: 'Personas',
          tabBarIcon: () => <Icon name="rocket" color="#333" size={24} />,
        }}
      />
      <Tab.Screen
        name="Productos"
        component={ContactStackNavigator}
        options={{
          tabBarLabel: 'Ordenar Producto',
          tabBarIcon: () => <Icon name="home" color="#333" size={24} />,
        }}
      />
      <Tab.Screen
        name="Ordenes"
        component={OrdenProductosStackNavigator}
        options={{
          tabBarLabel: 'Ordenes',
          tabBarIcon: () => <Icon name="home" color="#333" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
