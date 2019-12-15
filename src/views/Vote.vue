<template>
  <div class="vote">
    <h1>Vote</h1>
    <BaseButton  @click.native="handleClick" :loading="isLoading">
      <template>{{ textButton }}</template>
    </BaseButton>
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'Vote',
  components: { BaseButton },
  data() {
    return {
      isLoading: false,
      isStyled: true,
      message: '',
      textButton: 'Wyslij',
    };
  },
  methods: {
    handleClick() {
      this.isLoading = true;
      setTimeout(() => (this.isLoading = false), 3000);       /* eslint-disable-line */
    },
  },
};
</script>
