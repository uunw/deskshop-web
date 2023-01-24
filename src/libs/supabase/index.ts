import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import type { GetServerSidePropsContext, PreviewData } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import type { Database } from '@/libs/database/types';

const supabaseClient = createClient<Database>(
  `https://szumfgaqmusrbrysqpew.supabase.co`,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);

const supbaseServerClient = (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => createServerSupabaseClient<Database>(ctx);

const supabaseBrowserClient = createBrowserSupabaseClient<Database>();

export { supabaseBrowserClient, supabaseClient, supbaseServerClient };
// export default supabase;
