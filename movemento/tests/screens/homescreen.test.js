import { render, screen, userEvent } from '@testing-library/react-native';
import CreateEntryButton from '../../components/buttons/CreateEntryButton';
import HomeScreen from '../../screens/HomeScreen';
import renderWithContexts from '../test-utils'

describe('CreateEntryButton', () => {
  it('renders the create entry button', () => {
    render(<CreateEntryButton onPress={() => {}}/>);
    expect(screen.getByText('Create an entry and go to the select movements screen')).toBeTruthy()
  })});

describe('Home Screen', () => {
  it('renders without crashing', () => {
    render(<HomeScreen />)
  })
})