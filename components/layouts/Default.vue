<script setup lang="ts">
import pageCount from '../../helpers/pageCount';
import useNavigation from '../../composables/useNavigation';

const { navigate } = useNavigation();

defineProps<{
  count: number;
}>();

const emit = defineEmits<{
  (event: 'get-data', value: number): void;
}>();

const router = useRouter();

function loadData(x: number) {
  emit('get-data', x);
}
</script>

<template>
  <div>
    <div class="flex justify-evenly pt-2.5">
      <button
        v-for="route in router.options.routes"
        :key="route.name"
        class="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        @click="navigate({ name: route.name })"
      >
        {{ route.name }}
      </button>
    </div>
    <slot />
    <div class="flex justify-evenly">
      <span
        v-for="x in pageCount(count)"
        :key="x"
        class="cursor-pointer rounded border border-solid border-black py-1.5 px-2.5"
        @click="loadData(x)"
        >{{ x }}</span
      >
    </div>
  </div>
</template>
