import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntryCalendar from '../components/EntryCalendar';
import ButtonStyles from '../styles/Buttons';
import ContainerStyles from '../styles/Containers';
import EntriesContainer from '../components/containers/EntriesContainer';
import SelectUserContainer from '../components/containers/SelectUserContainer';

import { useData } from '../context/DataContext';
import TextStyles from '../styles/Text';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { loading, users } = useData();

  if (loading) {
    return <Text style={TextStyles.title}>loading...</Text>
  }

  return (
    <ScrollView>
      <Text style={TextStyles.title}>HOME</Text>
      <View style={ContainerStyles.debugging}>
        <Pressable
          onPress={() => navigation.navigate('SelectMovements')}
          style={[ButtonStyles.base, ButtonStyles.next]}
        >
          <Text>Create an entry and go to the select movements screen</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SelectMoodsBefore')}
          style={[ButtonStyles.base, ButtonStyles.debugging]}
        >
          <Text>Quick jump to SELECT MOODS BEFORE for debugging</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SelectMoodsAfter')}
          style={[ButtonStyles.base, ButtonStyles.debugging]}>
          <Text>Quick jump to SELECT MOODS AFTER for debugging</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Reflection')}
          style={[ButtonStyles.base, ButtonStyles.debugging]}
        >
          <Text>Quick jump to REFLECTION for debugging</Text>
        </Pressable>
      </View>
      {/* <EntriesContainer/> */}
      <SelectUserContainer users={users}/>
      <Text>The current selected user is</Text>
      {/* <EntryCalendar></EntryCalendar> */}
    </ScrollView>
  )
}

export default HomeScreen