<template>
    <span :class="{
      'spinner': true,
      'default-styles': styled,
      'loading': loading,
    }"
    :disabled="loading"
    >
        <ul>
         <slot name="options" v-for=" option in options" :option="option">
             <li v-bind:key="option.id">
                     {{ option }}
             </li>
         </slot>
        </ul>
        <span class="spinner"></span>
    </span>
</template>

<script>
    export default {
        name: "ElementList",
        props: {
            // textButton: {
            //     type: String,
            //     required: true
            // },
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
        },
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
