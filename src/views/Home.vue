<template>
  <div class="home">
    <input type="text" v-model="userId" placeholder="user id">
    <button @click="goToUser(userId)">Go to user</button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      userId: '',
    }),
    methods: {
      goToUser(id) {
        this.$router.push({ name: 'user', params: { userId: id } });
      },
    },
  };
</script>
