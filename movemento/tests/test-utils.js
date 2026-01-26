import React from 'react';
import { render } from '@testing-library/react-native';

/**
 * Custom render function that wraps components with necessary providers
 * Usage: const { getByText } = renderWithProviders(<MyComponent />)
 */
export function renderWithProviders(
  ui,
  {
    initialState = {},
    store = null,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return children;
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

/**
 * Helper to wait for async operations
 */
export function waitFor(callback, options = {}) {
  return new Promise((resolve, reject) => {
    const { timeout = 1000, interval = 50 } = options;
    const startTime = Date.now();

    const check = () => {
      try {
        callback();
        resolve();
      } catch (error) {
        if (Date.now() - startTime > timeout) {
          reject(error);
        } else {
          setTimeout(check, interval);
        }
      }
    };

    check();
  });
}

/**
 * Mock data generators
 */
export const mockData = {
  journalEntry: () => ({
    id: '1',
    date: new Date().toISOString(),
    mood: 'happy',
    movements: ['walking', 'stretching'],
    reflection: 'Test reflection',
    userId: 'user-1',
  }),

  user: () => ({
    id: 'user-1',
    name: 'Test User',
    email: 'test@example.com',
  }),

  mood: (override = {}) => ({
    id: 'mood-1',
    name: 'happy',
    color: '#FFD700',
    ...override,
  }),

  movement: (override = {}) => ({
    id: 'movement-1',
    name: 'walking',
    description: 'A gentle walk',
    ...override,
  }),
};

/**
 * Common test setup and teardown utilities
 */
export const setupTest = () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
};

export default {
  renderWithProviders,
  waitFor,
  mockData,
  setupTest,
};
