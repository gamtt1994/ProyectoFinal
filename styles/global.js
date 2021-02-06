import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  contenedor2: {
    flex: 1,
    flexDirection: 'row',
  },
  contenido: {
    marginHorizontal: '2.5%',
    flex: 1,
  },
  boton: {
    backgroundColor: '#9AC4F8',
    color: 'white',
  },
  botoninicio: {
    backgroundColor: '#4090F4',
  },
  botonTexto: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 30,
  },
  imagen: {
    height: 300,
    width: '100%',
  },
  cantidad: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default globalStyles;
