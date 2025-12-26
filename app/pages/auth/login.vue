<script setup lang="ts">
import * as z from "zod";

// const { $supabase } = useNuxtApp();
const localeRoute = useLocaleRoute();

const { t } = useI18n();

definePageMeta({
  layout: "external",
});

const schema = z.object({
  email: z.email(t("form.email.schema.value")),
  password: z
    .string(t("form.password.schema.value"))
    .min(8, t("form.password.schema.min")),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: "",
  password: "",
});

async function onSubmit() {
  // const { data, error } = await $supabase.auth.signInWithPassword({
  //   email: state.email as string,
  //   password: state.password as string,
  // });

  state.email = "";
  state.password = "";

  navigateTo(
    localeRoute({
      path: "/dashboard",
    })
  );
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div
      class="w-full max-w-md p-8 flex flex-col gap-8 items-center bg-white rounded-xl shadow-lg"
    >
      <!-- Logo -->
      <div class="flex justify-center">LOGO HERE</div>

      <!-- Title -->
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-800">
          {{ $t("pages.login.title") }}
        </h2>
      </div>

      <!-- Form -->
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-6"
        @submit="onSubmit"
      >
        <UFormField :label="t('form.email.label')" name="email">
          <UInput
            v-model="state.email"
            type="email"
            placeholder="Enter your email"
          />
        </UFormField>

        <UFormField :label="t('form.password.label')" name="password">
          <UInput
            v-model="state.password"
            type="password"
            placeholder="Enter your password"
          />
        </UFormField>

        <div>
          <UButton
            type="submit"
            class="w-full bg-primary-500 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-300"
          >
            {{ $t("actions.login") }}
          </UButton>
        </div>
      </UForm>

      <!-- Sign up link -->
      <div class="text-center text-sm text-gray-600">
        Don't have an account?
        <NuxtLink
          to="/auth/signUp"
          class="text-green-600 hover:text-green-800 font-medium"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
