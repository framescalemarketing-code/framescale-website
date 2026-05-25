import "server-only";

import { isAuthorizedAdminUser } from "@/lib/admin-config";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function getVerifiedAdminUser(accessToken: string) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser(accessToken);

  if (error || !data.user) {
    return null;
  }

  if (!isAuthorizedAdminUser(data.user)) {
    return null;
  }

  return data.user;
}
