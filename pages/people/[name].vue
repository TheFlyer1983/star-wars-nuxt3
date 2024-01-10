<script setup lang="ts">
const peopleStore = usePeopleStore();

onBeforeMount(() => {
  if (!peopleStore.selectedPerson) {
    navigateTo('/people');
  }
});
</script>

<template>
  <div>
    {{ peopleStore.selectedPerson?.name }}
  </div>
</template>
