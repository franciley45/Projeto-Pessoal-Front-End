import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './tests/renderWithRouter';
import mock from './tests/mock';
import { FAVORITE_ROUTE } from './services/consts';
import logo from './styled/1509547336090.jpg';

describe('teste da tela Header', () => {
  test('teste da rota "/" se renderizando corretamente!', () => {
    renderWithRouter(<App />);
    const btnPaginaFavoritos = screen.getByText('Página de Favoritos');
    const msgLoading = screen.getByRole('heading');
    const busca = screen.getByText('Busca');
    const favoritar = screen.getByText('Favoritar');

    expect(btnPaginaFavoritos).toBeInTheDocument();
    expect(msgLoading).toBeInTheDocument();
    expect(busca).toBeInTheDocument();
    expect(favoritar).toBeInTheDocument();
  });

  test('teste do retorno da API', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock),
    });
    renderWithRouter(<App />);
    const img = await screen.findByRole('img', { alt: 'foto de cachorro' });

    expect(img.src).toBe('https://images.dog.ceo/breeds/komondor/n02105505_1145.jpg');
  });

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
});
