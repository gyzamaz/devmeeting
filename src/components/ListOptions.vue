<template>
  <ul>
    <slot name="options" v-for="option in options" :option="option">
      <li :key="option.id">
        {{ option }}
      </li>
    </slot>
  </ul>
</template>

<script>
export default {
  name: 'Options',
  data() {
    return {
      options: [
        {
          id: 0,
          text: 'Eat pizza',
          createdAt: '2019-02-02T12:43:35.404Z',
        },
        {
          id: 1,
          text: 'Eat burger',
          createdAt: '2019-02-02T12:43:35.404Z',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
