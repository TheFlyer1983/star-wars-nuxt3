<script lang="ts" setup>
const router = useRouter();
const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  }
});
</script>
<template>
  <div>
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <div class="flex justify-center text-center text-7xl text-yellow-300">
      <h1>star wars</h1>
    </div>
    <div class="flex justify-evenly pt-2.5">
      <UButton
        v-for="route in router.options.routes"
        :key="route.name"
        @click="navigateTo({ name: route.name })"
      >
        {{ route.name }}
      </UButton>
    </div>

    <main class="p-5">
      <slot />
    </main>
  </div>
</template>
