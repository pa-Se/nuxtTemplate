export default defineNuxtRouteMiddleware(async (to, from) => {
  // const { $supabase } = useNuxtApp();
  // const {
  //   data: { session },
  //   error,
  // } = await $supabase.auth.getSession();
  // if (!to.path.includes("auth") && !session?.access_token) {
  //   return navigateTo("/auth/login");
  // }
  // if (to.path.includes("auth") && session?.access_token) {
  //   return navigateTo("/dashboard");
  // }
});
