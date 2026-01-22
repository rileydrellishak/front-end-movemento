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
  }
})

export default ContainerStyles;