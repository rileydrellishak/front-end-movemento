import { Text } from 'react-native'
import { List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectableButtonsContainer from './SelectableButtonsContainer' //({ variant, data, selectedIds=[], setSelectedIds })
import moods from '../../data/moods'
import {findNames} from '../../helpers'

const EditMoodsAccordion = ({ selectedMoodsBefore, setSelectedMoodsBefore, selectedMoodsAfter, setSelectedMoodsAfter, moodsExpanded, setMoodsExpanded }) => {

  return (
    <List.Accordion title='Select Moods'
          left={props => <List.Icon {...props} icon='emoticon-happy-outline'/>}
          expanded={moodsExpanded}
          onPress={() => setMoodsExpanded(!moodsExpanded)}
    >
      <Text>selected moods before: {findNames(selectedMoodsBefore, moods).join(', ')}

      </Text>
      <SelectableButtonsContainer 
        variant='moods'
        data={moods}
        selectedIds={selectedMoodsBefore}
        setSelectedIds={setSelectedMoodsBefore}
      />
      <Text>selected moods after: {findNames(selectedMoodsAfter, moods).join(', ')}
        
      </Text>
      <SelectableButtonsContainer 
        variant='moods'
        data={moods}
        selectedIds={selectedMoodsAfter}
        setSelectedIds={setSelectedMoodsAfter}
      />
    </List.Accordion>
  )
}

export default EditMoodsAccordion;