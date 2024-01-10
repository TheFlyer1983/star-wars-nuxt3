<script setup lang="ts">
import type { Film } from '~~/types/film';

const { getFilms } = useSwapi();

const films = ref<Film[]>();
const count = ref<number>();
const loaded = ref(false);
const page = ref(1);

async function loadData(x = 1) {
  const { films: data } = await getFilms(x);
  films.value = data.value?.results;
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
        There are {{ count }} films in the Star Wars series
      </span>
      <div class="my-6 grid grid-cols-3 gap-6">
        <UCard
          v-for="film in films"
          :key="film.title"
          class="flex cursor-pointer justify-center"
        >
          {{ film.title }}
        </UCard>
      </div>
    </div>
    <div class="flex justify-evenly">
      <UPagination v-model="page" :total="count!" :max="count! + 2" size="lg" />
    </div>
  </div>
</template>
