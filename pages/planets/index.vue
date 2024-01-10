<script setup lang="ts">
import type { Planet } from '~~/types/planet';

const { getPlanets } = useSwapi();

useHead({
  title: 'Planets'
});

const planets = ref<Planet[]>();
const count = ref<number>();
const loaded = ref(false);
const page = ref(1);

async function loadData(x = 1) {
  const { data } = await getPlanets(x);
  planets.value = data.value?.results;
  count.value = data.value?.count;
  loaded.value = true;
}

onBeforeMount(async () => {
  await loadData();
});

watch(page, async () => {
  await loadData(page.value);
});
</script>

<template>
  <div v-if="loaded">
    <div>
      <span class="flex justify-center text-xl">
        There are {{ count }} planets in Star Wars
      </span>
      <div class="my-6 grid grid-cols-5 gap-6">
        <UCard
          v-for="planet in planets"
          :key="planet.name"
          class="flex cursor-pointer justify-center"
        >
          {{ planet.name }}
        </UCard>
      </div>
    </div>
    <div class="flex justify-evenly">
      <UPagination v-model="page" :total="count!" :max="count! + 2" size="lg" />
    </div>
  </div>
</template>
