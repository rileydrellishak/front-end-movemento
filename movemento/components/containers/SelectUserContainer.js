import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import ContainerStyles from '../../styles/Containers';


const SelectUserContainer = ({ users, selectedUser, setSelectedUser }) => {  
  const pickerItems = 
    users.map(({ id, name }) => {
      return (
        <Picker.Item key={id} label={name} value={name}/>
      )
    })
  
  return (
    <View style={ContainerStyles.debugging}>
      <Text>Select user</Text>
      <Picker
        style={[ContainerStyles.debugging, ContainerStyles.picker]}
        selectedValue={selectedUser}
        onValueChange={(itemValue) => setSelectedUser(itemValue)}
      >
        {pickerItems}
      </Picker>
    </View>
  )
};

export default SelectUserContainer;

// const movementButtons = movements.map(({ id, name }) => {
  //   return (
  //     <MovementButton key={id} name={name}/>
  //   )
  // })