<script setup lang="ts">
import { FilmResponse } from '~~/types/film';

const { getFilms } = useSwapi();

const films = ref({} as FilmResponse);
const loaded = ref(false);

async function loadData(x = 1) {
  const { data } = await getFilms(x);
  films.value = data;
  loaded.value = true;
}

definePageMeta({
  name: 'Films'
});

onBeforeMount(() => {
  loadData();
});
</script>

<template>
  <LayoutsDefault
    v-if="loaded"
    :count="films.count"
    @get-data="loadData($event)"
  >
    <div>
      <div>Planets</div>
      <div>
        <ul>
          <li v-for="film in films?.results" :key="film.title">
            {{ film.title }}
          </li>
        </ul>
      </div>
    </div>
  </LayoutsDefault>
</template>
