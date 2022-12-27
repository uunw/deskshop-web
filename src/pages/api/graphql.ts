import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

import schema from '@/libs/graphql/schema';
import { parseBearerToken } from '@/utils';

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
};

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  schema,
  graphqlEndpoint: `/api/graphql`,
  graphiql: process.env.NODE_ENV !== `production`,
  context: async ({ req }) => {
    const token = parseBearerToken(req.headers.authorization);

    return { token };
  },
  // healthCheckEndpoint: `/api/graphql-health`,
});
