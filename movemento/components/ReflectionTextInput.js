import { TextInput } from 'react-native-paper'

const ReflectionTextInput = ({ reflectionText, setReflectionText}) => {
  
  return (
    <TextInput
      placeholder='Enter your reflection here'
      onChangeText={setReflectionText}
      value={reflectionText}
    />
  )
}

export default ReflectionTextInput;