import type { Response } from './index';

export interface Person {
  name: string;
  height: string;
}
export type PersonResponse = Response & {
  results: Array<Person>;
}
