import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

function isValidHttpUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseServiceKey && isValidHttpUrl(supabaseUrl)
);

// When Supabase is not configured, return a chainable stand-in so routes
// respond with an empty result instead of crashing with a 500.
// Any chain (.from().select().eq()...) awaits to { data: null, error }.
function createUnconfiguredClient() {
  const result = {
    data: null,
    count: null,
    error: { message: 'Supabase is not configured', code: 'SUPABASE_NOT_CONFIGURED' },
  };
  const handler = {
    get(_target, prop) {
      if (prop === 'then') return (resolve) => resolve(result);
      return proxy;
    },
    apply() {
      return proxy;
    },
  };
  const proxy = new Proxy(function () {}, handler);
  return proxy;
}

if (!isSupabaseConfigured && process.env.NODE_ENV !== 'production') {
  console.warn(
    '[supabase] Not configured (set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local). ' +
      'Database features are disabled and routes return empty results.'
  );
}

// We use the service_role key to bypass RLS since we handle auth via our own JWT mechanism
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseServiceKey)
  : createUnconfiguredClient();
