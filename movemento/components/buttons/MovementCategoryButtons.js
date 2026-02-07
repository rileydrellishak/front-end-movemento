import { Pressable, Text } from 'react-native'

const MovementCategoryButtons = ({ name }) => {
  return (
    <Pressable>
      <Text>{name}</Text>
    </Pressable>
  )
}

export default MovementCategoryButtons