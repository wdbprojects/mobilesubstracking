export const routes = {
  home: "/" as const,
  subscriptions: "/subscriptions" as const,
  insights: "/insights" as const,
  settings: "/settings" as const,
  onboarding: "/onboarding" as const,
  // auth
  signUp: "/(auth)/sign-up" as const,
  signIn: "/(auth)/sign-in" as const,
};
