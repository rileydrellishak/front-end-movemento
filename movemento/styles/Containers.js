import { StyleSheet } from "react-native";

const ContainerStyles = StyleSheet.create({
  base: {
    borderColor: 'red',
    borderWidth: 3,
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'start'
  },

  debugging: {
    borderColor: 'red',
    borderWidth: 3,
    flex: 1,
  },

  reflection: {
    borderColor: 'red',
    borderWidth: 3,
    padding: 5,
    margin: 5,
    height: 300,
  },

  picker: {
    borderColor: 'green',
    borderWeight: 3, 
    width: 200,
    alignSelf: 'center'
  },

  entry: {
    margin: 10,
    padding: 20, 
    borderRadius: 20,
    backgroundColor: '#F1E3F3'
  },

  entries: {
    flex: 1,
    backgroundColor: 'pink'
  },

  loading: {
    alignItems: 'center'
  },

  calendar: {
    margin: 0,
    padding: 0,
    backgroundColor: 'red',
    height: 75
  },

  image: {
    width: 120,
    height: 120
  },

})

export default ContainerStyles;