import React, {useReducer} from 'react';

import PedidoReducer from './pedidosReducer';
import PedidoContext from './pedidosContext';

import {
  NUEVA_ORDEN,
  SELECCIONAR_PRODUCTO,
  CONFIRMAR_ORDENAR_PRODUCTO,
  MOSTRAR_RESUMEN,
  ELIMINAR_PRODUCTO,
  PEDIDO_ORDENADO,
} from '../../types';

const PedidoState = (props) => {
  // Crear state inicial
  const initialState = {
    pedido: [],
    produc: null,
    trab: null,
    total: 0,
    idpedido: '',
  };

  // useReducer con dispatch  para ejecutar las funciones
  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  // Selecciona el Producto que el usuario desea ordenar
  const seleccionarProducto = (produc) => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: produc,
    });
  };

  // Cuando el usuario confirma
  const guardarPedido = (pedido) => {
    dispatch({
      type: CONFIRMAR_ORDENAR_PRODUCTO,
      payload: pedido,
    });
  };

  // Muestra el total a pagar en el resumen
  const mostrarResumen = (total) => {
    dispatch({
      type: MOSTRAR_RESUMEN,
      payload: total,
    });
  };

  // Elimina un articulo del carrito
  const eliminarProducto = (id) => {
    dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id,
    });
  };

  const pedidoRealizado = (id) => {
    dispatch({
      type: PEDIDO_ORDENADO,
      payload: id,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        produc: state.produc,
        total: state.total,
        idpedido: state.idpedido,
        seleccionarProducto,
        guardarPedido,
        mostrarResumen,
        eliminarProducto,
        pedidoRealizado,
      }}>
      {props.children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
