<script setup lang="ts">
import type { Person } from '~~/types/people';

const { getPeople } = useSwapi();

const people = ref<Person[]>();
const loaded = ref(false);
const count = ref<number>();
const page = ref(1);

definePageMeta({
  name: 'People'
});

useHead({
  title: "Paul's Nuxt App"
});

async function loadData(x = 1) {
  const { people: data } = await getPeople(x);
  people.value = data.value?.results;
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
        There are {{ count }} people in Star Wars
      </span>
      <div class="my-6 grid grid-cols-5 gap-6">
        <UCard
          v-for="person in people"
          :key="person.name"
          class="flex cursor-pointer justify-center"
        >
          {{ person.name }}
        </UCard>
      </div>
    </div>
    <div class="flex justify-evenly">
      <UPagination v-model="page" :total="count!" :max="count! + 2" size="lg" />
    </div>
  </div>
</template>
