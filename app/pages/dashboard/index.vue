<template>
  <div class="flex flex-col gap-2">
    <span>{{ $t("welcome") }}</span>
    <UButton>Logout</UButton>
  </div>
</template>

<script setup lang="ts">
// const { $supabase } = useNuxtApp();
// const { t } = useI18n();
// async function logout() {
//   const error = await $supabase.auth.signOut();

//   if (error.error) {
//     console.warn(error.error);
//     return;
//   }

//   navigateTo("auth/login");
// }
</script>
