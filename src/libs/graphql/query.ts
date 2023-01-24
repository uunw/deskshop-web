import {
  GraphQLError,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import type { IProduct } from '@/interfaces/Product';
import { supabaseClient } from '@/libs/supabase';

const graphqlProductType = new GraphQLObjectType<IProduct, unknown>({
  name: `Product`,
  fields: {
    productId: {
      type: GraphQLString,
      description: `product id nano id 32 char`,
    },
    name: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt,
      description: `product price THB`,
    },
  },
});

const query = new GraphQLObjectType<number, number>({
  name: `Query`,
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => `world`,
    },
    getProducts: {
      type: new GraphQLList(graphqlProductType),
      resolve: async () => {
        const { error, data } = await supabaseClient.from(`products`).select();
        if (error) throw new GraphQLError(`can't query products`);

        return data;
      },
    },
  },
});

export { graphqlProductType };

export default query;
