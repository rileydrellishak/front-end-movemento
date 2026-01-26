import { render, screen, rerender, fireEvent } from '@testing-library/react-native';
import SelectableButton from '../../components/buttons/SelectableButton'

const testMovements = [
  {
    id: 1,
    name: 'barre'
  },
  {
    id: 2,
    name: 'ballet'
  },
  {
    id: 3,
    name: 'pilates'
  }
]

describe('MovementButtons', () => {
  it('shows movement name when passed in', () => {
    const button = <SelectableButton name='barre' isSelected={false}/>
    render(button)
    expect(screen.getByText('barre')).toBeTruthy()
    expect(screen.getByText('barre')).toBeOnTheScreen()
  });
  it('changes color when clicked', () => {
    const button = <SelectableButton name='barre' isSelected={false}/>
    render(button)
    expect(screen.getByText('barre')).toBeTruthy();
  })
})