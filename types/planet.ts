import { Response } from './index';

export interface Planet {
  name: string;
}
export interface PlanetResponse extends Response {
  results: Array<Planet>;
}
