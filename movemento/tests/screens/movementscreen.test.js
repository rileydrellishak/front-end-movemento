import { render, screen, rerender, fireEvent } from '@testing-library/react-native';
import SelectableButton from '../../components/buttons/SelectableButton'
import SelectMovementsScreen from '../../screens/SelectMovementsScreen';

describe('Select movements screen', () => {
  it('renders movement buttons', () => {
    render(<SelectMovementsScreen/>);
    expect(screen.getByText('Badminton')).toBeTruthy()
  })
})