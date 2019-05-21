import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stocks: [
            {
                id: 0,
                name: 'BMW',
                price: 110
            },
            {
                id: 1,
                name: 'Google',
                price: 130
            },
            {
                id: 2,
                name: 'Apple',
                price: 310
            },
            {
                id: 3,
                name: 'Twitter',
                price: 10
            }
        ],
        portfolioStock: []
    },
    getters,
    mutations,
    actions,
});