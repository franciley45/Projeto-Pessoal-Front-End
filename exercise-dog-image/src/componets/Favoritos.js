import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styled/Favoritos.css';
import logo from '../styled/1509547336090.jpg';
import {
  PUPPIES,
  HOME,
  HOME_1,
  FAVORITE_ROUTE,
  IMG_HOME,
  HOME_ROUTE,
  CONTEINER_FAVORITOS,
  H4,
  BTN_IMG,
  IMG_FAVORITOS,
  BTN_EXCLUIR,
} from '../services/consts';

function Favoritos() {
  const [favorites, setfavoritos] = useState([]);

  useEffect(() => {
    const SEARCH_STORAGE = JSON.parse(localStorage.getItem(PUPPIES));
    setfavoritos(SEARCH_STORAGE);
  }, []);

  const btnDelete = (event) => {
    const { id } = event.target;
    const RESULT = favorites.filter((e) => e.message !== id);
    setfavoritos(RESULT);
    localStorage.setItem(PUPPIES, JSON.stringify(RESULT));
  };

  const btnDeleteAll = () => {
    setfavoritos([]);
    localStorage.setItem(PUPPIES, JSON.stringify([]));
  };

  const VALIDATION = favorites === null || favorites.length === 0;

  return (
    <>
      <section className={ HOME }>
        <section>
          <Link className={ HOME_1 } to={ HOME_ROUTE }>
            Home
          </Link>
          <Link onClick={ btnDeleteAll } className={ HOME_1 } to={ FAVORITE_ROUTE }>
            Deleta Todos
          </Link>
        </section>
        <section>
          <img id={ IMG_HOME } src={ logo } alt={ logo } />
        </section>
      </section>

      <section className={ CONTEINER_FAVORITOS }>
        { VALIDATION ? <section className={ H4 }><h4>Você não tem nenhum imagem adicionada  nos favoritos </h4></section>
          : favorites.map((element) => (
            <section key={ element.message } className={ BTN_IMG }>
              <section>
                <img
                  src={ element.message }
                  alt={ element.message }
                  className={ IMG_FAVORITOS }
                />
              </section>
              <section>
                <button
                  className={ BTN_EXCLUIR }
                  type="button"
                  id={ element.message }
                  onClick={ btnDelete }
                >
                  Excluir
                </button>
              </section>
            </section>
          ))}
      </section>
    </>

  );
}

export default Favoritos;
