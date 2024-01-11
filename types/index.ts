import { z } from 'zod';

const ResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable()
});

export type Response = z.infer<typeof ResponseSchema>;
