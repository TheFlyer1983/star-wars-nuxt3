<script setup lang="ts">
import { PersonResponse } from '~~/types/people';

const { getPeople } = useSwapi();
const route = useRoute();

definePageMeta({
  name: 'People'
});

useHead({
  title: "Paul's Nuxt App"
});

const name = ref('Paul');
const loading = ref(false);
const people = ref([] as Array<PersonResponse>);

async function loadData(x = 1) {
  const data = await getPeople(x);
  people.value = [data];
}

onBeforeMount(() => {
  loadData();
});
</script>

<template>
  <LayoutsDefault
    v-if="people"
    :count="people.count"
    :name="route.name"
    @getData="loadData($event)"
  >
    <div>
      Hello {{ name }}!

      <div>
        <h1>There are {{ people?.count }} people in Star Wars</h1>
        <ul>
          <li v-for="person in people?.results" :key="person.name">
            {{ person.name }}
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
