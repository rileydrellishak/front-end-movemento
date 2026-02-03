import { TextInput } from 'react-native'
import ContainerStyles from '../styles/Containers';
import TextStyles from '../styles/Text';

const ReflectionTextInput = ({ reflectionText, setReflectionText}) => {
  
  return (
    <TextInput style={ContainerStyles.reflection}
      placeholder='Enter your reflection here'
      onChangeText={setReflectionText}
      value={reflectionText}
    />
  )
}

export default ReflectionTextInput;