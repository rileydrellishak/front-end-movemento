import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import ContainerStyles from '../../styles/Containers';
import SelectUserItem from '../SelectUser';


const SelectUsersContainer = () => {
  const names = ['Riley', 'Maille']
  const pickerItems = 
    names.map(name => {
      return <Picker.item label={name} />
    })
  
  return (
    <View style={ContainerStyles.debugging}>
      <Text>Select user</Text>
      <Picker style={[ContainerStyles.debugging, ContainerStyles.picker]}>
        {pickerItems}
      </Picker>
    </View>
  )
};

export default SelectUsersContainer;