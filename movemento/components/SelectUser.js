import { Picker } from '@react-native-picker/picker'

const SelectUserItem = ({ name }) => {
  return (
      <Picker.Item label={name} value={name} />
  )
};

export default SelectUserItem;