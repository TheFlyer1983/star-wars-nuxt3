<script setup lang="ts">
const { data, getFilms } = useSwapi();
const route = useRoute();

async function loadData(x: number = 1) {
  await getFilms(x);
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
    v-if="data"
    :count="data.count"
    :name="route.name"
    @getData="loadData($event)"
  >
    <div>
      <div>Planets</div>
      <!-- <button @click="navigate({ name: Routes.People })">Navigate</button> -->

      <div>
        <ul>
          <li v-for="film in data?.results" :key="film.title">
            {{ film.title }}
          </li>
        </ul>
      </div>
    </div>
  </LayoutsDefault>
</template>

<style lang="scss" scoped></style>
