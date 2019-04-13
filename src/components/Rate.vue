<template>
    <div
            class="rate"
            :style="{ color, 'border-color': color }"
    >
    <span>
      <!--1/ 5. and convert to percentage value  -->
      {{ toPercentage(rateValue) }} %
    </span>
    </div>
</template>

<script>
    const toPercentage = value => Math.round(value * 10000) / 100;
    //1/ 4. Here we check, if value is between 0-1
    const between = (x, min, max) => (x >= min && x <= max);

    export default {
        name: 'rate',
        props: {
            rateValue: {
                //1/ 1. You can define props type,
                type: Number,
                //1/ 2. if it's required
                required: true,
                //1/ 3. and own property validator
                validator: val => between(val, 0, 1),
            },
            //5/ 6. If value is not required, you can define default value
            color: {
                type: String,
                required: false,
                default: 'black',
            },
            //6/ 7. If property has object type(array is also an object), default must be a function
            //which returns value
            exampleArrayProperty: {
                type: Array,
                required: false,
                default: () => [],
            },
        },
        methods: {
            toPercentage,
        },
    };
</script>
<style lang="scss" scoped>
    .rate {
        font-size: 65px;
        line-height: 245px;
        border: 4px solid;
        display: block;
        width: 260px;
        height: 260px;
        border-radius: 130px;
        margin: 37px auto;
    }
</style>
