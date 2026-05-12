const policyId = process.env.NEXT_PUBLIC_IUBENDA_POLICY_ID?.trim() || "26891202";

export const iubenda = {
  siteId: Number(process.env.NEXT_PUBLIC_IUBENDA_SITE_ID?.trim() || "4528993"),
  policyId,
  policyIdNumber: Number(policyId),
  widgetId:
    process.env.NEXT_PUBLIC_IUBENDA_WIDGET_ID?.trim() ||
    "2d54165d-88d8-4b24-a956-b743f39cdc9f",
  get privacyPolicyUrl() {
    return `https://www.iubenda.com/privacy-policy/${policyId}`;
  },
  get cookiePolicyUrl() {
    return `https://www.iubenda.com/privacy-policy/${policyId}/cookie-policy`;
  },
} as const;
