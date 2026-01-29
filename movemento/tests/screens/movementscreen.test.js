import { render, screen, rerender, fireEvent } from '@testing-library/react-native';
import SelectableButton from '../../components/buttons/SelectableButton'
import SelectMovementsScreen from '../../screens/SelectMovementsScreen';
import movements from '../../data/movements';

const mockUpdateEntry = jest.fn()

jest.mock("../../context/JournalEntryContext", () => ({
  useJournalEntry: () => ({
    updateEntry: mockUpdateEntry,
  }),
}));

describe('Select movements screen', () => {
  it('renders movement buttons', () => {
    render(<SelectMovementsScreen/>);
    for (const m of movements) {
      expect(screen.getByText(m.name)).toBeTruthy()
    }
  })

  it('calls the update entry when a movement is selected', () => {
    render(<SelectMovementsScreen/>);
    fireEvent.press(screen.getByText('Badminton'));
    expect(mockUpdateEntry).toHaveBeenCalledWith({'movements': ['1']})
  })

  // it('renders the go to next screen button', () => {
  //   render(<SelectMovementsScreen/>)
  //   fireEvent.press(screen.getByText('go to moods before screen'))
  // })
})

// go to moods before screen