import { AxiosRequestConfig } from 'axios';
import { PersonResponse } from '~~/types/people';
import request from '~~/helpers/axios';
import { apiConfig } from '~~/constants/apiConfig';
import { PlanetResponse } from '~~/types/planet';
import { FilmResponse } from '~~/types/film';

function useSwapi() {
  async function getPeople(pageNumber: number = 1) {
    const response = await request.get<PersonResponse>(apiConfig.people, {
      params: { page: pageNumber.toString() }
    });

    return response.data;
  }

  async function getPlanets(pageNumber: number = 1) {
    const response = await request.get<PlanetResponse>(apiConfig.planets, {
      params: { page: pageNumber.toString() }
    });

    return response.data;
  }

  async function getFilms(pageNumber: number = 1) {
    const response = await request.get<FilmResponse>(apiConfig.films, {
      params: { page: pageNumber.toString() }
    });

    return response.data;
  }

  return { getPeople, getPlanets, getFilms };
}

export default useSwapi;
