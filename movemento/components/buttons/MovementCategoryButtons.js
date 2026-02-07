import { Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons'

const MovementCategoryButtons = ({ name }) => {
  return (
    <Pressable>
      <Text>{name}</Text>
    </Pressable>
  )
}

export default MovementCategoryButtons