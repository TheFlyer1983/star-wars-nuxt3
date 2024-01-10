<script setup lang="ts">
import type { Person } from '~~/types/people';

const { getPeople } = useSwapi();
const { selectPerson } = usePeopleStore();
const { people, count, page } = storeToRefs(usePeopleStore());

const loaded = ref(false);

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
  if (!people.value) {
    await loadData();
  } else {
    loaded.value = true;
  }
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
      <div class="my-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        <NuxtLink
          v-for="person in people"
          :key="person.name"
          :to="{
            name: 'people-name',
            params: { name: person.name.replace(' ', '_') }
          }"
          @click="selectPerson(person)"
        >
          <UCard class="flex cursor-pointer justify-center">
            {{ person.name }}
          </UCard>
        </NuxtLink>
      </div>
    </div>
    <div class="flex justify-evenly">
      <UPagination v-model="page" :total="count!" :max="count! + 2" size="lg" />
    </div>
  </div>
</template>
