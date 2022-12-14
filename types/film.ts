import { Response } from './index';

export interface FilmResponse extends Response {
  results: Array<Film>;
}

export interface Film {
  title: string;
}
