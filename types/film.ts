import type { Response } from './index';

export interface Film {
  title: string;
}

export interface FilmResponse extends Response {
  count: number;
  results: Array<Film>;
}
