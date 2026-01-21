import { ScrollView, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';

const EntriesContainer = () => {
  return (
    <ScrollView style={ContainerStyles.debugging}>
      <Text>entry</Text>
      <Text>entry</Text>
      <Text>entry</Text>
    </ScrollView>
  )
};

export default EntriesContainer;