import type { AuthError, AuthResponse } from '@supabase/supabase-js';

import { getAvatarUrlFromEamil } from '@/utils';

import { supabaseBrowserClient } from '.';

type SignInCredentials = {
  email: string;
  password: string;
};

type SignUpCredentials = {
  email: string;
  password: string;
  fullName: string;
};

async function signInPassword(
  credentials: SignInCredentials,
): Promise<AuthResponse> {
  const res = await supabaseBrowserClient.auth.signInWithPassword(credentials);

  return res;
}

async function signUp(credentials: SignUpCredentials): Promise<AuthResponse> {
  const avatarUrl = await getAvatarUrlFromEamil(credentials.email);

  const res = await supabaseBrowserClient.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        full_name: credentials.fullName,
        avatar_url: avatarUrl,
      },
    },
  });

  return res;
}

async function signOut(): Promise<AuthError | null> {
  const { error } = await supabaseBrowserClient.auth.signOut();

  return error;
}

export { signInPassword, signOut, signUp };
