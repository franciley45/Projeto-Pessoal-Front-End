import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchAPI from '../services/SearchAPI';
import {
  PUPPIES,
  PUPPY_PHOTO,
  FAVORITE_ROUTE,
  CONTEINER_BTN,
  PAGE_FAVORITE,
  IMG_HEADER,
  SEARCH,
  FAVORITE,
  LINK,
} from '../services/consts';
import '../styled/Header.css';

function Header() {
  const [dog, setdog] = useState({});
  const [Loading, setLoading] = useState(true);
  const [arrayDog, setarrayDog] = useState([]);

  useEffect(() => {
    const request = async () => {
      const RETURN_API = await SearchAPI();
      setdog(RETURN_API);
      setLoading(false);
    };
    request();

    const SEARCH_STORAGE = localStorage.getItem(PUPPIES);
    const INITIAL_STATE = SEARCH_STORAGE === null ? []
      : JSON.parse(localStorage.getItem(PUPPIES));
    setarrayDog(INITIAL_STATE);
  }, []);

  useEffect(() => {
    localStorage.setItem(PUPPIES, JSON.stringify(arrayDog));
  }, [arrayDog]);

  const btnSearchDog = async () => {
    setLoading(true);
    const data = await SearchAPI();
    setdog(data);
    setLoading(false);
  };

  const btnFavorite = () => {
    setarrayDog((prevState) => ([
      ...prevState.filter((e) => e.message !== dog.message),
      dog,
    ]));
  };

  return (
    <>
      <Link id={ LINK } to={ FAVORITE_ROUTE }>
        <section className={ CONTEINER_BTN }>
          <button
            id={ PAGE_FAVORITE }
            type="button"
          >
            Página de Favoritos
          </button>
        </section>

      </Link>

      <section className={ CONTEINER_BTN }>
        {Loading ? <h5>Loading...</h5> : <img
          id={ IMG_HEADER }
          src={ dog.message }
          alt={ PUPPY_PHOTO }
        />}
      </section>
      <section>
        <button
          id={ SEARCH }
          type="button"
          onClick={ btnSearchDog }
        >
          Busca

        </button>
        <button
          id={ FAVORITE }
          type="button"
          onClick={ btnFavorite }
        >
          Favoritar

        </button>
      </section>

    </>
  );
}
export default Header;
