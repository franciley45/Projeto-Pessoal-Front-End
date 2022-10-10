import React from 'react';
import { screen } from '@testing-library/react';
/* import userEvent from '@testing-library/user-event'; */
import App from '../App';
import renderWithRouter from './renderWithRouter';
/* import { mock } from './mock'; */
import { FAVORITE_ROUTE } from '../services/consts';
import logo from '../styled/1509547336090.jpg';

test('teste da rota "/Favoritos" se renderizando corretamente', () => {
  renderWithRouter(<App />, FAVORITE_ROUTE);
  const home = screen.getByText(/home/i);
  const btnDeletetAll = screen.getByText(/deleta todos/i);
  const imghome = screen.getByAltText(logo);
  const h4 = screen.getByRole('heading', { lever: 4 });

  expect(home).toBeInTheDocument();
  expect(btnDeletetAll).toBeInTheDocument();
  expect(imghome).toBeInTheDocument();
  expect(h4).toBeInTheDocument();
});
