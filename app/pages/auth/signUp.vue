<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";

definePageMeta({
  layout: "external",
});

const { $trpc } = useNuxtApp();
const x = useTrpcClient();
const hello = ref();

onMounted(async () => {
  hello.value = await $trpc.test.hello.query({ text: "client" });
});

const schema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string("Password is required")
    .min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();

async function triggerTrpc() {
  hello.value = await $trpc.test.hello.query({ text: "client" });
  console.log(hello.value);
}

async function onSubmit(event: FormSubmitEvent<typeof state>) {
  // const { data, error } = await $supabase.auth.signUp({
  //   email: state.email,
  //   password: state.password,
  // });

  state.email = "";
  state.password = "";

  toast.add({
    title: "Success",
    description: "The form has been submitted.",
    color: "success",
  });
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-primary-50 to-secondary-50 p-4"
  >
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="bg-primary-600 p-6 text-center">
        <h1 class="text-2xl font-bold text-white">Create Account</h1>
        <p class="text-primary-100 mt-1">Join our plant community</p>
      </div>

      <div class="p-6">
        {{ hello }}

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormField label="Email" name="email">
            <UInput v-model="state.email" placeholder="your@email.com" />
          </UFormField>

          <UFormField label="Password" name="password">
            <UInput
              v-model="state.password"
              type="password"
              placeholder="At least 8 characters"
            />
          </UFormField>

          <UButton
            type="submit"
            class="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Create Account
          </UButton>
        </UForm>

        <div class="mt-6 text-center">
          <p class="text-neutral-600 text-sm">
            Already have an account?
            <NuxtLink
              to="/auth/login"
              class="text-primary-600 hover:text-primary-800 font-medium"
            >
              Sign in
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
    <UButton label="trigger" @click="triggerTrpc" class="mt-4"></UButton>
  </div>
</template>
