<template>
  <div class="score">
    <h1>Score</h1>

    <BaseButton @click.native="addUser"  :loading="isLoading">
      Add user
    </BaseButton>
  </div>
</template>
<script>
import { mapState } from 'vuex';


import BaseButton from '@/components/BaseButton.vue';

export default {
  components: { BaseButton },
  data() {
    return {
      isLoading: false,
      isStyled: true,
    };
  },
  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },
  methods: {
    addUser() {
      this.$store.dispatch('user/setUserId', 1);
    },
  },

};
</script>
