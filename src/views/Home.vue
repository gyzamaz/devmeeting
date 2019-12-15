<template>
  <div class="home">

    <button @click="setAdmin"> Set isAdmin </button>
    <button @click="removeAdmin"> Remove key isAdmin </button>

    <ListOptions>
      <template v-slot:options=" { option }">
        <Option :data="option" />
      </template>
    </ListOptions>

  </div>
</template>

<script>
import ListOptions from '@/components/ListOptions.vue';
import Option from '@/components/Option.vue';

export default {
  name: 'home',
  components: {
    Option,
    ListOptions,
  },
  methods: {
    setAdmin() {
      localStorage.setItem('isAdmin', true);
    },
    removeAdmin() {
      localStorage.setItem('isAdmin', false);
    },
  },
};
</script>
