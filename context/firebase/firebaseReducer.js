import {
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PERSONAL_EXITO,
  OBTENER_ORDENES_EXITO,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        menu: action.payload,
      };
    case OBTENER_PERSONAL_EXITO:
      return {
        ...state,
        trabajadores: action.payload,
      };
    case OBTENER_ORDENES_EXITO:
      return {
        ...state,
        ordenes: action.payload,
      };

    default:
      return state;
  }
};
