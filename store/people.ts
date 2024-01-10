import { defineStore } from 'pinia';
import type { Person } from '~/types/people';

export const usePeopleStore = defineStore('People', () => {
  const people = ref<Person[]>();
  const count = ref<number>();
  const page = ref(1);

  const selectedPerson = ref<Person>();

  function selectPerson(person: Person) {
    selectedPerson.value = person;
  }

  return { people, count, page, selectedPerson, selectPerson };
});
