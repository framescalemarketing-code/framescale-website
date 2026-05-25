import "server-only";

type AdminUserLike = {
	app_metadata?: Record<string, unknown> | null;
	user_metadata?: Record<string, unknown> | null;
};

function getRoleValue(value: unknown): string | null {
	return typeof value === "string" && value.trim() ? value.trim().toLowerCase() : null;
}

export function isAuthorizedAdminUser(user: AdminUserLike | null | undefined) {
	if (!user) {
		return false;
	}

	const role = getRoleValue(user.app_metadata?.role) ?? getRoleValue(user.user_metadata?.role);
	return role === "admin";
}
