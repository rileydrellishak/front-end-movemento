import { View } from 'react-native'
import { Button, useTheme } from 'react-native-paper'
import { useState } from 'react'

const SelectableButton = ({ variant, name, onSelect, isSelected }) => {
  const theme = useTheme()
  
  const buttonColor = (variant, isSelected) => {
    if (variant === 'movements') {
      if (isSelected) {
        return theme.colors.primary
      } else {
        return theme.colors.primaryContainer
      }
    } else if (variant === 'moods') {
      if (isSelected) {
        return theme.colors.secondary
      } else {
        return theme.colors.secondaryContainer
      }
    }
  }
  const textColor = (variant, isSelected) => {
    if (variant === 'movements') {
      if (isSelected) {
        return theme.colors.onPrimary
      } else {
        return theme.colors.onPrimaryContainer
      }
    } if (variant === 'moods') {
      if (isSelected) {
        return theme.colors.onSecondary
      } else {
        return theme.colors.onSecondaryContainer
      }
    }
  }
  return (
    <View style={{alignSelf: 'flex-start', marginRight: 8, marginTop: 8}}>
      <Button
        onPress={onSelect}
        buttonColor={buttonColor(variant, isSelected)}
        mode={'contained-tonal'}
        textColor={textColor(variant, isSelected)}
        style={{borderRadius: 10}}
        labelStyle={{ textAlign: 'center' }}
        contentStyle={{ paddingHorizontal: 0 }}
      >
        {name}
      </Button>
    </View>
  )
}

export default SelectableButton;

// either movements or moods for button styles