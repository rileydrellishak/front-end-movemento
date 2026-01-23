const helloWorld = () => {
  return 'hello, world!'
};

describe('Example', () => {
  describe('helloWorld', () => {
    it('returns the string', () => {
      const string = helloWorld();

      expect(string).toBe('hello, world!');
    })
  })
})

// Greeting.js
import { Text } from 'react-native';
import { render, getByText, rerender } from '@testing-library/react-native'

const Greeting = ({ name }) => {
  return <Text>Hello {name}</Text>;
}

describe('Greeting', () => {
  it('renders the name', () => {
    const { getByText, rerender } = render(<Greeting name='Riley'/>);

    expect(getByText('Hello Riley')).toBeTruthy();

    rerender(<Greeting name='Maille'/>);
    expect(getByText('Hello Maille')).toBeTruthy()
  }),
  it('renders a component', () => {
    const component = render(<Greeting name='Riley'/>);
    expect(component).toHaveTextContent('Hello Riley')
  })
})

