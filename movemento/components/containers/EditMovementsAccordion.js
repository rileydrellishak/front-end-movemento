import { Text } from 'react-native'
import { List } from 'react-native-paper'
import SelectableButtonsContainer from './SelectableButtonsContainer'
import movements from '../../data/movements'
import {findNames} from '../../helpers'

const EditMovementsAccordion = ({ selectedMovements, setSelectedMovements, movementsExpanded, setMovementsExpanded }) => {

  return (
    <List.Accordion 
      title='Select Movements'
      left={props => <List.Icon {...props} icon='dumbbell'/>}
      expanded={movementsExpanded}
      onPress={() => setMovementsExpanded(!movementsExpanded)}
    >
      <Text>Selected movements: {findNames(selectedMovements, movements).join(', ')}</Text>
      <SelectableButtonsContainer 
        variant='movements'
        data={movements}
        selectedIds={selectedMovements}
        setSelectedIds={setSelectedMovements}
      />
    </List.Accordion>
  )
}

export default EditMovementsAccordion;