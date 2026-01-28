import { render, screen, rerender, fireEvent } from '@testing-library/react-native';
import SelectableButton from '../../components/buttons/SelectableButton'
import SelectMoodsBeforeScreen from '../../screens/SelectMoodsBeforeScreen';
import moods from '../../data/moods';

const mockUpdateEntry = jest.fn()

jest.mock("../../context/JournalEntryContext", () => ({
  useJournalEntry: () => ({
    updateEntry: mockUpdateEntry,
  }),
}));

describe('Select moods before screen', () => {
  it('renders mood buttons', () => {
    render(<SelectMoodsBeforeScreen/>);
    for (const m of moods) {
      expect(screen.getByText(m.name)).toBeTruthy()
    }
  })

  it('calls the update entry when a movement is selected', () => {
    render(<SelectMoodsBeforeScreen/>);
    fireEvent.press(screen.getByText('Happy'));
    expect(mockUpdateEntry).toHaveBeenCalledWith({'moods_before': ['1']})
  })
})