import { Pressable, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { useState } from 'react'

const SelectableButton = ({ variant, name, onSelect, isSelected }) => {

  return (
    <Button 
      onPress={onSelect}
    >
      <Text>{name}</Text>
    </Button>
  )
}

export default SelectableButton;

// either movements or moods for button styles