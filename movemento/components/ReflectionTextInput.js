import { TextInput } from 'react-native'
import ContainerStyles from '../styles/Containers';
import TextStyles from '../styles/Text';

const ReflectionTextInput = () => {
  return (
    <TextInput style={ContainerStyles.reflection}
      placeholder='Enter your reflection here'
    />
  )
}

export default ReflectionTextInput;