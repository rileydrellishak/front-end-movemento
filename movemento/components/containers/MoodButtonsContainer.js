import { View, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';
import MoodButton from '../buttons/MoodButton';
import { useData } from '../../context/DataContext';

const MoodButtonsContainer = () => {
  const {moods, loading} = useData()

  if (loading) {
    return <Text>Loading...</Text>
  }

  const moodButtons = moods.map(({ id, name }) => {
    return (
      <MoodButton key={id} name={name}/>
    )
  })
  
  return (
    <View style={ContainerStyles.mood}>
      <Text>the mood buttons</Text>
      {moodButtons}
    </View>
  )
}

export default MoodButtonsContainer;