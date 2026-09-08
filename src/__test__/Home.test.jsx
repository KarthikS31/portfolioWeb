// src/__test__/Home.test.jsx
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Home from '../pages/Home';

// Create a mock store with the shape your component expects
const mockStore = configureStore({
  reducer: {
    portfolio: () => ({
      social: [],
      about: {},
      loading: false
    })
  }
});

test('initial testing', () => {
  render(
    <Provider store={mockStore}>
      <Home />
    </Provider>
  );

  expect(screen.getByText(/karthik/i)).toBeInTheDocument();
});