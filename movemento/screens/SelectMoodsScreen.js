import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useData } from '../context/DataContext';
import ContainerStyles from '../styles/Containers';

const SelectMoodsScreen = () => {
  const navigation = useNavigation();
  const { moods } = useData();
  return(
    <ScrollView>
      <Text>the before moods</Text>
      <SelectableButtonsContainer variant='moods' data={moods} style={ContainerStyles.moods}/>
      <Pressable
        onPress={() => navigation.navigate('Reflection')}
        style={ButtonStyles.next}
      >
        <Text>go to the moods after screen</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SelectMoodsScreen