import { z } from 'zod';
import type { Response } from './index';

const PersonSchema = z.object({
  name: z.string(),
  height: z.string()
});

export type Person = z.infer<typeof PersonSchema>;

export type PersonResponse = Response & {
  results: Array<Person>;
};
