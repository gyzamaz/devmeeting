<template>
    <button :class="{
      'spinner': true,
      'default-styles': styled,
      'loading': loading,
    }"
    :disabled="loading"
    type="button"
    >
        <slot>Submit</slot>
        <span class="spinner"></span>
    </button>
</template>

<script>
    export default {
        name: "BaseButton",
        props: {
            loading: {
                type: Boolean,
                required: false,
                default: false
            },
            styled: {
                type: Boolean,
                required: false,
                default: true
            }
        }
    };
</script>

<style scoped>
    .spinner {
        background: ur('@/assets/spinner.gif');
    }
    .loading {
        padding-right: 3rem !important;
    }
    .loading .spinner {
        opacity: 1;
    }
    .loading .spinner span {
        opacity: 1;
    }
    button:not(:disabled) {
        transition-delay: 0.2s;
    }
    button:not(:disabled) .spinner span {
        box-shadow: 0 0 0 0.2rem #888 inset;
        border: 7.4px solid transparent;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
    }
    button:not(:disabled) .spinner span:nth-child(1) {
        transform: rotate(0deg) !important;
    }
    button:not(:disabled) .spinner span:nth-child(2) {
        transform: rotate(90deg) !important;
    }
    button:not(:disabled) .spinner span:nth-child(3) {
        transform: rotate(180deg) !important;
    }
    button:not(:disabled) .spinner span:nth-child(4) {
        transform: rotate(270deg) !important;
    }
</style>
