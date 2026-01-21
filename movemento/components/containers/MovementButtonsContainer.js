import { View, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';
import MovementButton from '../buttons/MovementButton';

const MovementButtonsContainer = () => {
  return (
    <View style={ContainerStyles.movement}>
      <Text>Movement buttons container</Text>
      <MovementButton/>
      <MovementButton/>
      <MovementButton/>
    </View>
  )
}

export default MovementButtonsContainer;