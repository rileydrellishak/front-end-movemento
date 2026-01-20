import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import SaveEntryButton from '../components/buttons/SaveEntryButton';

const ReflectionScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <ReflectionTextInput/>
      <SaveEntryButton navigation={navigation}/>
    </View>
  )
}

export default ReflectionScreen