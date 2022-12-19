<script setup lang="ts">
import { PersonResponse } from '~~/types/people';

const { getPeople } = useSwapi();

const people = ref({} as PersonResponse);
const loaded = ref(false);

definePageMeta({
  name: 'People'
});

useHead({
  title: "Paul's Nuxt App"
});

async function loadData(x = 1) {
  const { data } = await getPeople(x);
  people.value = data;
  loaded.value = true;
}

onBeforeMount(async () => {
  await loadData();
});
</script>

<template>
  <LayoutsDefault
    v-if="loaded"
    :count="people.count"
    @get-data="loadData($event)"
  >
    <div>
      <span class="flex justify-center text-xl">
        There are {{ people.count }} people in Star Wars
      </span>
      <ul class="p-3">
        <li v-for="person in people.results" :key="person.name">
          {{ person.name }}
        </li>
      </ul>
    </div>
  </LayoutsDefault>
</template>
