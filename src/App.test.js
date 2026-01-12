import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders overview component for the default route', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const overviewElement = screen.getByText(/This is the overview section./i);
  expect(overviewElement).toBeInTheDocument();
});
