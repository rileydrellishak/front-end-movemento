import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import ContainerStyles from '../../styles/Containers';
import { useState } from 'react'


const SelectUserContainer = ({ users, selectedUser, setSelectedUser }) => {  
  const pickerItems = 
    users.map(({ id, name }) => {
      return (
        <Picker.Item key={id} label={name} value={id}/>
      )
    })
  
  return (
    <View style={ContainerStyles}>
      <Text>Select user</Text>
      <Picker
        style={[ContainerStyles.picker]}
        selectedValue={selectedUser?.id}
        onValueChange={(itemValue) => {
          const user = users.find(user => user.id === itemValue);
          setSelectedUser(user);
        }}
      >
        {pickerItems}
      </Picker>
    </View>
  )
};

export default SelectUserContainer;