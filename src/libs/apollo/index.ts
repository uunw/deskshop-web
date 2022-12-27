import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV !== `production`
      ? `http://localhost:3000`
      : `https://ikea-deskshop.vercel.app`,
  cache: new InMemoryCache(),
});

export { client };
