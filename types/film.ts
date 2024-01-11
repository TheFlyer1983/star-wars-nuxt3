import { z } from 'zod';
import type { Response } from './index';

const FilmSchema = z.object({
  title: z.string()
});
export type Film = z.infer<typeof FilmSchema>;

export type FilmResponse = Response & {
  results: Array<Film>;
};
