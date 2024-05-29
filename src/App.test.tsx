import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'
import * as currencyAPI from './api/useCurrencies';


afterEach(() => {
  jest.clearAllMocks();
});

test('successful render', () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  )
  const headerElement = screen.getByText(/George fx/i);
  expect(headerElement).toBeInTheDocument();

  const rowElement = screen.queryByTestId('currency-row-AED');
  expect(rowElement).toBeInTheDocument();
});

test('empty data render', () => {
  jest.spyOn(currencyAPI, 'useCurrencies').mockReturnValue({
    data: []
  });
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  )
  const emptyDataElement = screen.getByText(/No data/i);
  expect(emptyDataElement).toBeInTheDocument();
});

test('render 404', () => {
  render(
    <MemoryRouter initialEntries={["/baf"]}>
      <App />
    </MemoryRouter>
  );
  const pageElement = screen.getByText(/Page not found!/i);
  expect(pageElement).toBeInTheDocument();
});
