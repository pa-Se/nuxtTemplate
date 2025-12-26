export function useTrpcClient() {
  return useNuxtApp().$trpc;
}
