import { createClient } from '@supabase/supabase-js';

import type { Database } from '../database/types';

const supabase = createClient<Database>(
  `https://szumfgaqmusrbrysqpew.supabase.co`,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);

export default supabase;
