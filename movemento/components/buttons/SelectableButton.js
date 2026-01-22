import { Button, Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons';
import TextStyles from '../../styles/Text';
import { useState } from 'react'

const SelectableButton = ({ variant, name }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelect = () => {
    setIsSelected(previousState => !previousState)
  }

  return (
    <Pressable style={
      [ButtonStyles.base, 
        variant === 'moods' && ButtonStyles.moods,
        variant == 'movements' && ButtonStyles.movements,
        isSelected && variant === 'moods' && ButtonStyles.selectedMoods,
        isSelected && variant === 'movements' && ButtonStyles.selectedMovements,
      ]}
      onPress={handleSelect}
    >
      <Text style={ButtonStyles.variant}>{name}</Text>
    </Pressable>
  )
}

export default SelectableButton;

// either movements or moods for button styles