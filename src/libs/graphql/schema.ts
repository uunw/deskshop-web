import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

const query = new GraphQLObjectType({
  name: `Query`,
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => `world`,
    },
  },
});

const mutation = new GraphQLObjectType<unknown>({
  name: `Mutation`,
  fields: {
    getName: {
      type: GraphQLString,
      args: {
        id: {
          type: GraphQLID,
          description: `user id`,
        },
      },
      resolve: (_, args: { id: string }) => {
        const id = String(args.id);

        return `id: ${id}`;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
