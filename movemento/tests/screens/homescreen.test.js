import { render, screen, getByText } from '@testing-library/react-native';
import CreateEntryButton from '../../components/buttons/CreateEntryButton';
import HomeScreen from '../../screens/HomeScreen';
import RootStack from '../../navigation/StackNavigator'


describe('CreateEntryButton', () => {
  it('renders the create entry button', () => {
    const { getByText } = render(<CreateEntryButton onPress={() => {navigator.navigate('SelectMovements')}}/>);
    expect(screen.getByText('Create an entry and go to the select movements screen')).toBeTruthy()
  })
});

describe('UserSelector', () => {
  it('shows names of all registered users to pick from', () => {
    const {getByText} = render()
  })
})