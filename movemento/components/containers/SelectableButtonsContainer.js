import ContainerStyles from '../../styles/Containers';
import SelectableButton from '../buttons/SelectableButton';
import { useData } from '../../context/DataContext';
import { View } from 'react-native'
import ButtonStyles from '../../styles/Buttons';

const SelectableButtonsContainer = ({ variant, data }) => {

  const buttons = data.map(({ id, name }) => {
    return (
      <SelectableButton key={id} name={name} variant={variant}/>
    )
  })
  
  return (
    <View style={ContainerStyles.base}>
      {buttons}
    </View>
  )
}

export default SelectableButtonsContainer;