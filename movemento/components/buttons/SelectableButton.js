import { View, StyleSheet } from 'react-native'
import { Button, useTheme } from 'react-native-paper'

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
    <View style={styles.wrapper}>
      <Button
        onPress={onSelect}
        buttonColor={buttonColor(variant, isSelected)}
        mode='contained-tonal'
        textColor={textColor(variant, isSelected)}
        style={styles.chip}
        labelStyle={styles.chipLabel}
        contentStyle={styles.chipContent}
        compact
      >
        {name}
      </Button>
    </View>
  )
}

export default SelectableButton;

const styles = StyleSheet.create({
  wrapper: { width: '48%', marginBottom: 8 },
  chip: { borderRadius: 999, width: '100%' },
  chipLabel: { textAlign: 'center', fontSize: 13, lineHeight: 16, textTransform: 'capitalize' },
  chipContent: { paddingHorizontal: 12, height: 40, justifyContent: 'center' },
})

// either movements or moods for button styles