<template>
    <div class="panel panel-default">
        <div class="panel-body">
            <h1>Trade or View your Portfolio</h1>
            <p>You may Save & Load your Data</p>
            <p>Click on 'End Day' to begin a new Day</p>
            <hr>
            <h4><strong>Your Funds: ${{funds}}</strong></h4>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';

    export default {
        name: "StockTrader",
        computed: {
            ...mapGetters({
                funds: types.FUNDS_FORMAT
            })
        },
    }
</script>

<style scoped>

</style>