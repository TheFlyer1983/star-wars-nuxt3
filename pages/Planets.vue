<script setup lang="ts">
const { data, getPlanets } = useSwapi();
const { navigate } = useNavigation();
const route = useRoute();

useHead({
  title: 'Planets'
});

async function loadData(x: number = 1) {
  await getPlanets(x);
}

onBeforeMount(() => {
  loadData();
});
</script>

<template>
  <LayoutsDefault
    :count="data.count"
    v-if="data"
    :name="route.name"
    @getData="loadData($event)"
  >
    <div>
      <div>Planets</div>
      <div>
        <ul>
          <li v-for="planet in data?.results" :key="planet.name">
            {{ planet.name }}
          </li>
        </ul>
      </div>
    </div>
  </LayoutsDefault>
</template>

<style lang="css" scoped>
.pages {
  display: flex;
  justify-content: space-evenly;
}

.item {
  padding: 5px 10px 5px 10px;
  border: 1px solid;
  cursor: pointer;
}
</style>
