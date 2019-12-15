<template>
      <li>
        {{ data.text }}
      </li>
</template>
<script>
export default {
  props: {
    data: {
      type: [Object, String],
    },
  },
};
</script>
