import "server-only";

import { ADMIN_EMAIL } from "@/lib/admin-config";
import { getSupabaseServerClient } from "@/lib/supabase/server";

function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("Missing ADMIN_PASSWORD.");
  }
  return password;
}

export async function ensureAdminSupabaseUser() {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    throw error;
  }

  const existing = data.users.find((user) => user.email?.toLowerCase() === ADMIN_EMAIL);

  if (existing) {
    const { error: updateError } = await supabase.auth.admin.updateUserById(existing.id, {
      password: getAdminPassword(),
      email_confirm: true,
      user_metadata: {
        ...(existing.user_metadata ?? {}),
        role: "admin",
      },
    });

    if (updateError) {
      throw updateError;
    }

    return existing;
  }

  const { data: created, error: createError } = await supabase.auth.admin.createUser({
    email: ADMIN_EMAIL,
    password: getAdminPassword(),
    email_confirm: true,
    user_metadata: {
      role: "admin",
    },
  });

  if (createError || !created.user) {
    throw createError ?? new Error("Unable to create admin user.");
  }

  return created.user;
}

export async function getVerifiedAdminUser(accessToken: string) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser(accessToken);

  if (error || !data.user) {
    return null;
  }

  if (data.user.email?.toLowerCase() !== ADMIN_EMAIL) {
    return null;
  }

  return data.user;
}
