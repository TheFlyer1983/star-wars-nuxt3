<script setup lang="ts">
import { PlanetResponse } from '~~/types/planet';

const { getPlanets } = useSwapi();

useHead({
  title: 'Planets'
});

const planets = ref({} as PlanetResponse);
const loaded = ref(false);

async function loadData(x = 1) {
  const { data } = await getPlanets(x);
  planets.value = data;
  loaded.value = true;
}

onBeforeMount(() => {
  loadData();
});
</script>

<template>
  <LayoutsDefault
    v-if="loaded"
    :count="planets.count"
    @get-data="loadData($event)"
  >
    <div>
      <div>Planets</div>
      <div>
        <ul>
          <li v-for="planet in planets.results" :key="planet.name">
            {{ planet.name }}
          </li>
        </ul>
      </div>
    </div>
  </LayoutsDefault>
</template>
