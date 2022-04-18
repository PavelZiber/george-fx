import { render, screen, act } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'
import { API_URL } from './constants'
import { currencyResponse } from './mocks'


afterEach(() => {
  jest.clearAllMocks();
});

test('successful render', async() => {
  jest.spyOn(global, 'fetch').mockReturnValue({
    json: () => Promise.resolve(currencyResponse)
  });
  await act( async () => render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  ));
  const headerElement = screen.getByText(/George fx/i);
  expect(headerElement).toBeInTheDocument();

  const rowElement = screen.queryByTestId('currency-row-AED');
  expect(fetch).toHaveBeenCalledWith(API_URL);
  expect(rowElement).toBeInTheDocument();
});

test('empty data render', async() => {
  jest.spyOn(global, 'fetch').mockReturnValue({
    json: () => Promise.resolve({ fx: []})
  });
  await act( async () => render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  ));
  expect(fetch).toHaveBeenCalledWith(API_URL);
  const emptyDataElement = screen.getByText(/No data/i);
  expect(emptyDataElement).toBeInTheDocument();
});

test('render api error', async() => {
  jest.spyOn(global, 'fetch').mockReturnValue({
    json: () => Promise.reject(new Error('API error'))
  });
  await act( async () => render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  ));
  expect(fetch).toHaveBeenCalledWith(API_URL);
  const errorElement = screen.getByText(/Something went wrong!/i);
  expect(errorElement).toBeInTheDocument();
});

test('render 404', async() => {
  jest.spyOn(global, 'fetch').mockReturnValue({
    json: () => Promise.reject(new Error('API error'))
  });
  await act( async () => render(
    <MemoryRouter initialEntries={["/baf"]}>
      <App />
    </MemoryRouter>
  ));
  const pageElement = screen.getByText(/Page not found!/i);
  expect(pageElement).toBeInTheDocument();
});
