import { ScrollView, View, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';
import MovementButton from '../buttons/MovementButton';
import { useContext } from 'react';
import { useData } from '../../context/DataContext';

const MovementButtonsContainer = () => {
  const { movements, loading } = useData();

  if (loading) {
    return <Text>Loading...</Text>
  }

  const movementButtons = movements.map(({ id, name }) => {
    return (
      <MovementButton key={id} name={name}/>
    )
  })

  return (
    <View style={ContainerStyles.movement}>
      <Text>Movement buttons container</Text>
      {movementButtons}
    </View>
  )
}

export default MovementButtonsContainer;