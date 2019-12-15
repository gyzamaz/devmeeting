<template>
  <button :class="{
      'spinner': true,
      'loading': loading,
    }"
        :disabled="loading"
  >
    <span v-if="loading"> ladowanie </span>

    <slot v-else> {{ textButton}} </slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  computed: {

  },
  props: {
    textButton: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>

</style>
