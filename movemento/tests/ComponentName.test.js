// Imports
import { render, fireEvent } from '@testing-library/react-native';
import ComponentName from '../ComponentName'; // Adjust the path

describe('ComponentName', () => {

  it('renders correctly with given props', () => {
    const { getByText } = render(
      <ComponentName label="Example" selected={false} onPress={() => {}} />
    );

    // Check that the label is visible
    expect(getByText('Example')).toBeTruthy();
  });

  it('updates visually when props change', () => {
    const { getByText, rerender } = render(
      <ComponentName label="Example" selected={false} />
    );

    const element = getByText('Example');

    // Example: check color when not selected
    expect(element.props.style.color).toBe('gray');

    // Simulate prop change
    rerender(<ComponentName label="Example" selected={true} />);
    
    // Example: check color when selected
    expect(getByText('Example').props.style.color).toBe('blue');
  });

  it('responds to user interaction', () => {
    const mockPress = jest.fn();

    const { getByText } = render(
      <ComponentName label="Example" selected={false} onPress={mockPress} />
    );

    // Simulate user pressing the component
    fireEvent.press(getByText('Example'));

    // Expect the callback to be called
    expect(mockPress).toHaveBeenCalledTimes(1);
  });

});