<template>
    <div class="col-xs-6">
        <div class="stock panel panel-success">
            <div class="stock__header panel-heading">
                <h3 class="stock__name panel-title">
                    {{stock.name}}
                    <small class="stock__price">
                        (Price: {{stock.price}})
                    </small>
                </h3>
            </div>
            <div class="stock__body panel-body">
                <div class="row">
                    <div class="col-xs-4">
                        <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
                    </div>
                    <div class="col-xs-8 text-right">
                        <button class="btn btn-success" :disabled="!(quantity > 0)" @click="buy" >Buy</button>
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
        name: "Stock",
        props: ['id'],
        data() {
            return {
                quantity: null
            }
        },
        computed: {
            ...mapGetters({
                getStock: types.STOCK,
                getFunds: types.FUNDS
            }),
            funds() {
                return this.getFunds;
            },
            stock() {
                return this.getStock(this.id);
            }
        },
        methods: {
            ...mapMutations({
                buyStock: types.BUY_STOCK
            }),
            buy() {
                let funds = this.funds;
                let sumBuy = this.quantity * this.stock.price;

                if(funds >= sumBuy) {
                    let payload = {
                        id: this.stock.id,
                        name: this.stock.name,
                        price: this.stock.price
                    };

                    payload.quantity = parseInt(this.quantity);
                    this.buyStock(payload);
                    this.quantity = 0;
                } else {
                    alert("You don't have enough money!\r\nTry set less quantity.");
                }

            }
        }
    }
</script>

<style scoped>

</style>