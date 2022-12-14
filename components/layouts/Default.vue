<script setup lang="ts">
import { RouteRecordName, useRouter } from 'vue-router';
import pageCount from '../../helpers/pageCount';
import useNavigation from '../../composables/useNavigation';

const { navigate } = useNavigation();

defineProps<{
  count: number;
  name: RouteRecordName | null | undefined;
}>();

const emit = defineEmits<{
  (event: 'getData', value: number): void;
}>();

const router = useRouter();

function loadData(x = 1) {
  emit('getData', x);
}
</script>

<template>
  <div>
    <div class="nav">
      <button
        v-for="route in router.options.routes"
        :key="route.name"
        @click="navigate({ name: route.name })"
      >
        {{ route.name }}
      </button>
    </div>
    <div class="pages">
      <span
        v-for="x in pageCount(count)"
        :key="x"
        class="item"
        @click="loadData(x)"
        >{{ x }}</span
      >
    </div>
  </div>
</template>

<style lang="css" scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
}
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
