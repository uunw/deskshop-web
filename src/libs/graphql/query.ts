import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import type { IProduct } from '@/interfaces/Product';

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
    imageCoverUrl: {
      type: GraphQLString,
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
        // const { error, data } = await supabaseClient.from(`products`).select();
        // if (error) throw new GraphQLError(`can't query products`);

        const products = [
          {
            productId: `aaa`,
            name: `LINNMON ลินมูน / ADILS อดิลส์`,
            price: 990,
            imagesCoverUrl: `https://www.ikea.com/th/th/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg`,
          },
          {
            productId: `1234`,
            name: `LINNMON ลินมูน / OLOV อูลอฟ`,
            price: 2690,
            imageCoverUrl: `https://www.ikea.com/th/th/images/products/linnmon-olov-desk-white-stained-oak-effect-black__0977215_pe813460_s5.jpg`,
          },
        ];

        return products;
      },
    },
  },
});

export { graphqlProductType };

export default query;
