<template>
    <span>
        <input
            :value="value"
            v-bind="$attrs"
            @input="customInput"
            v-on="listeners"
        />
    </span>
</template>

<script>

    export default {
        name: "BaseInput",
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: 'Default label',
            },
        },
        computed: {
            listeners() {
                const { input, ...listeners } = this.$listeners;
                return listeners;
            },
        },
        mounted() {
            console.log('$attrs:', this.$attrs);
        },
        methods: {
            customInput(event) {
                this.$emit('input', event.target.value);
            },
        },
    };
</script>
