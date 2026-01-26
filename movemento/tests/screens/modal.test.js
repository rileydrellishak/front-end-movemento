import { render, screen, userEvent } from '@testing-library/react-native';
import CreateEntryButton from '../../components/buttons/CreateEntryButton';
import SelectMovementsScreen from '../../screens/SelectMovementsScreen'
import renderWithContexts from '../test-utils'

describe('SelectMovements', () => {
  it('shows movement buttons', async () => {
    await renderWithContexts(<SelectMovementsScreen />);
    expect(screen.getByText('barre')).toBeTruthy()
  })
})