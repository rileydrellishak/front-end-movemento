import { render, screen } from '@testing-library/react-native';
import CreateEntryButton from '../../components/buttons/CreateEntryButton';


describe('CreateEntryButton', () => {
  it('renders the create entry button', () => {
    render(<CreateEntryButton onPress={() => {}}/>);
    expect(screen.getByText('Create an entry and go to the select movements screen')).toBeTruthy()
  })
});