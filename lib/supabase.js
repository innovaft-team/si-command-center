import { createClient } from '@supabase/supabase-js'

/**
 * Returns a Supabase client instance.
 * Credentials are read from environment variables only — never hardcoded.
 * Throws a clear error at call time if env vars are missing.
 */
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. ' +
      'Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY ' +
      'in your .env.local file (for local dev) or in your hosting platform dashboard.'
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}
