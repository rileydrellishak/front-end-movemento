import { StyleSheet } from "react-native";

const ContainerStyles = StyleSheet.create({
  movements: {
    borderColor: 'red',
    borderWidth: 3,
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  moods: {
    borderColor: 'red',
    borderWidth: 3,
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
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