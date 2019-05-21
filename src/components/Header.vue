<template>
    <header class="header navbar navbar-default">
        <div class="container-fluid">
            <div class="nav-header">
                <router-link to="/" tag="a" active-class="active" class="navbar-brand">
                    <strong>Stock Trader</strong>
                </router-link>
            </div>
            <ul class="nav navbar-nav">
                <router-link to="/portfolio" tag="li" active-class="active">
                    <a>Portfolio</a>
                </router-link>
                <router-link to="/stocks" tag="li" active-class="active">
                    <a>Stocks</a>
                </router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" @click="endDay">End Day</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click="saveData">Save</a></li>
                        <li><a href="#" @click="loadData">Load</a></li>
                    </ul>
                </li>
                <li><a href="#"><strong>Funds: ${{funds}}</strong></a></li>
            </ul>
        </div>

    </header>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        name: "Header",
        computed: {
            ...mapGetters({
                funds: types.FUNDS_FORMAT
            })
        },
        methods: {
            ...mapActions({
                endDay: types.UPDATE_VALUE,
                fetchData: types.LOAD_DATA,
                savingData: types.SAVE_DATA,
            }),
            saveData() {
                this.savingData();
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>

<style scoped>
    .header {
        margin: 30px auto;
    }
</style>