<template>
    <div class="stocks">
        <div class="stocks__list row">
            <app-stock v-for="stock in stocks" :key="stock.id" :id="stock.id"></app-stock>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';

    import Stock from './Stocks/Stock.vue';

    export default {
        name: "Stocks",
        computed: {
            ...mapGetters({
                stocks: types.STOCKS
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>