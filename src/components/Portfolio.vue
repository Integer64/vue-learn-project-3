<template>
    <div class="stocks">
        <div class="stocks__list row">
            <app-stock-sell v-for="stock in stocks" :id="stock.id" v-if="stock.quantity != null"></app-stock-sell>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';

    import StockSell from './Stocks/StockSell.vue';

    export default {
        name: "Portfolio",
        computed: {
            ...mapGetters({
                stocks: types.PORTFOLIO_STOCKS
            })
        },
        components: {
            appStockSell: StockSell
        }
    }
</script>

<style scoped>

</style>