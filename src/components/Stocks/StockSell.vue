<template>
    <div class="col-xs-6">
        <div class="stock panel panel-info">
            <div class="stock__header panel-heading">
                <h3 class="stock__name panel-title">
                    {{stock.name}}
                    <small class="stock__price">
                        (Price: {{stock.price}} | Quantity: {{stock.quantity}})
                    </small>
                </h3>
            </div>
            <div class="stock__body panel-body">
                <div class="row">
                    <div class="col-xs-4">
                        <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                    </div>
                    <div class="col-xs-8 text-right">
                        <button class="btn btn-danger" :disabled="!(quantity > 0)" @click="sell">Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex';
    import * as types from '../../store/types';

    export default {
        name: "StockSell",
        props: ['id'],
        data() {
            return {
                quantity: null
            }
        },
        computed: {
            ...mapGetters({
                getStock: types.PORTFOLIO_STOCK
            }),
            stock() {
                return this.getStock(this.id);
            }
        },
        methods: {
            ...mapMutations({
                sellStock: types.SELL_STOCK
            }),
            sell() {
                if(this.quantity <= this.stock.quantity) {
                    let payload = {
                        id: this.stock.id,
                        name: this.stock.name,
                        price: this.stock.price
                    };

                    payload.quantity = parseInt(this.quantity);

                    this.sellStock(payload);
                } else {
                    alert("You don't have enough stocks!\r\nTry set less quantity.");
                }


            }
        }
    }
</script>

<style scoped>

</style>