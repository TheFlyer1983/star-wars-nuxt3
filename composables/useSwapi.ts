import { PersonResponse } from '~~/types/people';
import request from '~~/helpers/axios';
import { apiConfig } from '~~/constants/apiConfig';
import { PlanetResponse } from '~~/types/planet';
import { FilmResponse } from '~~/types/film';

function useSwapi() {
  async function getPeople(pageNumber = 1) {
    const response = await request.get<PersonResponse>(apiConfig.people, {
      params: { page: pageNumber.toString() }
    });

    return { data: response.data };
  }

  async function getPlanets(pageNumber = 1) {
    const response = await request.get<PlanetResponse>(apiConfig.planets, {
      params: { page: pageNumber.toString() }
    });

    return { data: response.data };
  }

  async function getFilms(pageNumber = 1) {
    const response = await request.get<FilmResponse>(apiConfig.films, {
      params: { page: pageNumber.toString() }
    });

    return { data: response.data };
  }

  return { getPeople, getPlanets, getFilms };
}

export default useSwapi;
