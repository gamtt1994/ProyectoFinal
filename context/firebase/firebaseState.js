import React, {useReducer} from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import {
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PERSONAL_EXITO,
  OBTENER_ORDENES_EXITO,
} from '../../types';
import _ from 'lodash';

const FirebaseState = (props) => {
  // Crear state inicial
  const initialState = {
    menu: [],
    trabajadores: [],
    ordenes: [],
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  // Función que se ejecuta para traer los productos
  const obtenerProductos = () => {
    firebase.db.settings({experimentalForceLongPolling: true});

    // consultar firebase
    firebase.db
      .collection('productos')
      .where('existencia', '==', true) // traer solo los que esten en existencia
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let productos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Ordenar por categoria con lodash
      productos = _.sortBy(productos, 'categoria');

      // Tenemos resultados de la base de datos
      dispatch({
        type: OBTENER_PRODUCTOS_EXITO,
        payload: productos,
      });
    }
  };

  const obtenerTrabajadores = () => {
    firebase.db.settings({experimentalForceLongPolling: true});

    // consultar firebase
    firebase.db
      .collection('personal')
      .where('existencia', '==', true)
      .onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let trabajadores = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Ordenar por categoria con lodash
      trabajadores = _.sortBy(trabajadores, 'categoria');

      // Tenemos resultados de la base de datos
      dispatch({
        type: OBTENER_PERSONAL_EXITO,
        payload: trabajadores,
      });
    }
  };

  const obtenerOrdenes = () => {
    firebase.db.settings({experimentalForceLongPolling: true});

    // consultar firebase
    firebase.db.collection('ordenes').onSnapshot(manejarSnapshot);

    function manejarSnapshot(snapshot) {
      let ordenes = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      // Ordenar por categoria con lodash
      ordenes = _.sortBy(ordenes, 'categoria');

      // Tenemos resultados de la base de datos
      dispatch({
        type: OBTENER_ORDENES_EXITO,
        payload: ordenes,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        trabajadores: state.trabajadores,
        ordenes: state.ordenes,
        firebase,
        obtenerProductos,
        obtenerOrdenes,
        obtenerTrabajadores,
      }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
