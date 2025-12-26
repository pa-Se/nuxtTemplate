<template>
  <div
    class="w-full max-w-screen flex flex-col h-dvh bg-linear-to-b from-neutral-50 to-secondary-100 p-5"
  >
    <LayoutAppHeader />
    <slot />
    <LayoutAppFooter />
  </div>
</template>
