import { Response } from './index';

export interface PlanetResponse extends Response {
  results: Array<Planet>;
}

export interface Planet {
  name: string;
}
