import { Response } from './index';

export interface Person {
  name: string;
  height: string;
}
export interface PersonResponse extends Response {
  results: Array<Person>;
}
