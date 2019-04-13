<template>
    <div id="app">
        <!--3/ 7. ...it's a good moment to use v-bind -->
        <Rate
                v-bind="rate"
        />

        <BaseInput value="ssss" />

        <BaseButton @click.native="handleClick" :loading="isLoading"/>

    </div>
</template>

<script>
    import Rate from '@/components/Rate.vue';
    import BaseButton from "../components/BaseButton";
    import BaseInput from "../components/BaseInput";

    export default {
        components: {
            BaseInput,
            BaseButton,
            Rate,
        },
        data: () => ({
            //4/ 6. If you want to bind each object property,
            rate: {
                rateValue: 0.43,
                color: 'green',
            },
            isLoading: false,
            isStyled: true
        }),
        methods: {
            handleClick() {
                console.log("click"); /* eslint-disable-line */
                this.isLoading = true;
                setTimeout(() => (this.isLoading = false), 11300);
            }
        },
    };
</script>


<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
