import ReflectionTextInput from '../ReflectionTextInput'
import { List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';

const EditReflectionAccordion = ({ reflectionText, setReflectionText, reflectionExpanded, setReflectionExpanded }) => {

  return (
    <List.Accordion title='Reflection'
      left={props => <List.Icon {...props} icon='thought-bubble'/>}
      expanded={reflectionExpanded}
      onPress={() => setReflectionExpanded(!reflectionExpanded)}
    >
        <ReflectionTextInput
          reflectionText={reflectionText}
          setReflectionText={setReflectionText}
        />
    </List.Accordion>
  )
}

export default EditReflectionAccordion;