import type { PersonResponse } from '~~/types/people';
import { apiConfig } from '~~/constants/apiConfig';
import type { PlanetResponse } from '~~/types/planet';
import type { FilmResponse } from '~~/types/film';

function useSwapi() {
  async function getPeople(pageNumber = 1) {
    const { data: people } = await useFetch<PersonResponse>(apiConfig.people, {
      params: { page: pageNumber.toString() }
    });

    return { people };
  }

  async function getPlanets(pageNumber = 1) {
    const { data } = await useFetch<PlanetResponse>(apiConfig.planets, {
      params: { page: pageNumber.toString() }
    });

    return { data };
  }

  async function getFilms(pageNumber = 1) {
    const { data: films } = await useFetch<FilmResponse>(apiConfig.films, {
      params: { page: pageNumber.toString() }
    });

    return { films };
  }

  return { getPeople, getPlanets, getFilms };
}

export default useSwapi;
