import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

import schema from '@/libs/graphql/schema';

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
  // healthCheckEndpoint: `/api/graphql-health`,
});
