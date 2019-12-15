<template>
  <input :value="value"/>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>

</style>
