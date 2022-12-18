import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum([`production`, `development`]),
  PORT: z.number(),
  MONGO_URI: z.string(),
});

const envs = envSchema.safeParse(envSchema);
if (!envs.success) {
  // log(envs.error);
  console.error(envs.error);
  process.exit(1);
}

export default envs.data;
