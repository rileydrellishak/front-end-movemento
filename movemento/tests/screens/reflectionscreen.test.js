import { render, screen, rerender, fireEvent } from '@testing-library/react-native';
import ReflectionScreen from '../../screens/ReflectionScreen';

const mockUpdateEntry = jest.fn()
const mockAddEntryToCache = jest.fn()

jest.mock("../../context/JournalEntryContext", () => ({
  useJournalEntry: () => ({
    updateEntry: mockUpdateEntry,
  }),
}));

jest.mock('../../context/DataContext', () => ({
  useData: () => ({
    addEntryToCache: mockAddEntryToCache,
  })
}))

describe('Reflection screen', () => {
  it('has a text input component on the screen', () => {
    render(<ReflectionScreen/>);
    expect(screen.getByPlaceholderText('Enter your reflection here')).toBeTruthy()
  })
  it('calls update entry when user is typing', () => {
    render(<ReflectionScreen/>);
    fireEvent(screen.getByPlaceholderText('Enter your reflection here'), 'onChangeText', 'my new reflection');
    expect(mockUpdateEntry).toHaveBeenCalledWith({'reflection': 'my new reflection'})
  })
})