# Front-End Testing Configuration Guide

## Overview

Your project is now configured for comprehensive front-end testing with Jest and React Native Testing Library. This document explains the setup and how to use it.

## Configuration Files

### 1. `jest.config.js`
Enhanced Jest configuration with:
- **Test Discovery**: Finds tests in both `tests/` and `__tests__/` directories
- **Coverage Collection**: Tracks coverage for components, screens, navigation, context, and API files
- **Coverage Thresholds**: Requires minimum 60% coverage (configurable)
- **Module Resolution**: Supports `@/` path aliases for cleaner imports
- **Extended Timeout**: 10-second timeout for async operations

### 2. `jest.setup.js`
Initialization file with:
- **Native Mocks**: NativeEventEmitter mock for React Native compatibility
- **AsyncStorage Mock**: Pre-configured mock for local storage operations
- **Calendar Mock**: React-native-calendars component mock
- **Console Control**: Filters irrelevant warnings/errors during tests

### 3. `tests/test-utils.js`
Testing utilities including:
- **renderWithProviders()**: Custom render function for components with providers
- **waitFor()**: Helper for async operations
- **mockData**: Pre-built mock objects for testing

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage

# Run specific test file
npm test -- screens/HomeScreen.test.js

# Run tests matching a pattern
npm test -- --testNamePattern="button"
```

## Test Structure

Place test files in either location:
- `tests/` - Recommended for organized test suites
- `__tests__/` - Alternative location

### File Naming Convention
- `[ComponentName].test.js` for components
- `[ScreenName].test.js` for screens
- `[utility].test.js` for utilities

## Writing Tests

### Basic Component Test

```javascript
import { render, fireEvent } from '@testing-library/react-native';
import { renderWithProviders, mockData } from '../test-utils';
import MyComponent from '../../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByText } = renderWithProviders(<MyComponent />);
    expect(getByText('Expected Text')).toBeTruthy();
  });

  it('handles button press', () => {
    const mockFn = jest.fn();
    const { getByText } = renderWithProviders(
      <MyComponent onPress={mockFn} />
    );
    fireEvent.press(getByText('Button'));
    expect(mockFn).toHaveBeenCalled();
  });
});
```

### Testing with Mock Data

```javascript
import { mockData } from '../test-utils';

describe('EntryCard', () => {
  it('displays entry information', () => {
    const entry = mockData.journalEntry();
    const { getByText } = render(<EntryCard entry={entry} />);
    expect(getByText(entry.reflection)).toBeTruthy();
  });
});
```

### Testing Async Operations

```javascript
import { waitFor } from '../test-utils';

describe('DataFetch', () => {
  it('loads data on mount', async () => {
    const { getByText } = render(<DataComponent />);
    
    await waitFor(() => {
      expect(getByText('Loaded')).toBeTruthy();
    });
  });
});
```

## Coverage Reports

After running `npm test -- --coverage`, check:
- **Console Output**: Shows coverage percentages
- **Coverage Summary**: Indicates which files need more test coverage

## Mocking Strategies

### Mock External APIs
```javascript
jest.mock('../api/utilities', () => ({
  fetchEntries: jest.fn(() => Promise.resolve([])),
}));
```

### Mock Context
```javascript
const mockContextValue = {
  entries: [],
  setEntries: jest.fn(),
};

jest.mock('../context/DataContext', () => ({
  useData: () => mockContextValue,
}));
```

### Mock Navigation
```javascript
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));
```

## Common Patterns

### Testing Screen Components
```javascript
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import HomeScreen from '../../screens/HomeScreen';

describe('HomeScreen', () => {
  it('navigates on button press', async () => {
    const mockNavigate = jest.fn();
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => ({ navigate: mockNavigate }),
    }));

    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText('Continue'));
    
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
```

### Testing Custom Hooks
```javascript
import { renderHook, act } from '@testing-library/react-native';
import useEntry from '../../hooks/useEntry';

describe('useEntry hook', () => {
  it('returns entry data', () => {
    const { result } = renderHook(() => useEntry('entry-1'));
    expect(result.current.entry).toBeDefined();
  });

  it('updates entry', async () => {
    const { result } = renderHook(() => useEntry('entry-1'));
    
    act(() => {
      result.current.updateEntry({ mood: 'happy' });
    });
    
    expect(result.current.entry.mood).toBe('happy');
  });
});
```

## Debugging Tests

### Use `screen` for Better Debugging
```javascript
import { render, screen } from '@testing-library/react-native';

const { debug } = render(<MyComponent />);
debug(); // Prints the component tree
```

### Check What's Rendered
```javascript
const { getByText, queryByText } = render(<MyComponent />);

// Will throw if not found
getByText('Expected');

// Returns null if not found
queryByText('Optional');
```

## Tips for Effective Testing

1. **Test Behavior, Not Implementation**: Focus on what users see/interact with
2. **Use Semantic Queries**: Prefer `getByText`, `getByRole` over `getByTestId`
3. **Keep Tests Independent**: Each test should run in isolation
4. **Mock External Dependencies**: API calls, navigation, context
5. **Use Meaningful Assertions**: Clear expectations about what should happen
6. **Test Edge Cases**: Empty states, errors, loading states

## Next Steps

1. Run existing tests: `npm test`
2. Check coverage: `npm test -- --coverage`
3. Start writing tests for critical components
4. Gradually increase coverage threshold as you add tests

## Resources

- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Jest Documentation](https://jestjs.io/)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
