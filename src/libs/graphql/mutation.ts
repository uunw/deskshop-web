import {
  GraphQLError,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { supabaseClient } from '@/libs/supabase';
import { log } from '@/utils';

import { graphqlProductType } from './query';

type SignInArg = { email: string; password: string };
type SignUpArg = { email: string; username: string; password: string };

const mutation = new GraphQLObjectType({
  name: `Mutation`,
  fields: {
    userSignIn: {
      type: GraphQLString,
      args: {
        email: {
          type: GraphQLString,
          description: `user email`,
        },
        password: {
          type: GraphQLString,
          description: `user password`,
        },
      },
      resolve: async (_, { email, password }: SignInArg) => {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw new GraphQLError(error.message);

        return data.session;
      },
    },
    userSignUp: {
      type: GraphQLString,
      args: {
        email: {
          type: GraphQLString,
        },
        username: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args: SignUpArg) => {
        log(args);

        const { data, error } = await supabaseClient.auth.signUp({
          email: args.email,
          password: args.password,
          options: {
            data: {
              username: args.username,
            },
          },
        });

        if (error) {
          console.error(error);
          throw new GraphQLError(error.message);
        }

        return data.user?.email;
      },
    },
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
    addProduct: {
      type: graphqlProductType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
    },
  },
});

export default mutation;
