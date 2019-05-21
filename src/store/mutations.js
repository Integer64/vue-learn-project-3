import * as types from './types';
import Vue from 'vue';

export default {
    [types.BUY_STOCK]: (state, payload) => {
        let record = state.portfolioStock.find(stock => stock.id === payload.id);
        let sumBuy = payload.price * payload.quantity;

        if (record) {
            record.quantity += payload.quantity;
        } else {
            state.portfolioStock.push(payload);
        }

        if(state.funds >= sumBuy) {
            state.funds = state.funds - sumBuy;
        }

    },

    [types.SELL_STOCK]: (state, payload) => {
        let record = state.portfolioStock.find(stock => stock.id === payload.id);
        if (record.quantity >= payload.quantity) {
            record.quantity -= payload.quantity;

            if(record.quantity === 0) {
                state.portfolioStock = state.portfolioStock.filter( stock => stock.id !== record.id );
            }

            state.funds = state.funds + (payload.price * payload.quantity);
        }
    },

    [types.MUTATE_UPDATE_VALUE]: (state) => {
        state.stocks.forEach((item)=> {
            const maxPriceChange = Math.floor(item.price * 0.15);
            const minPriceChange = Math.floor(item.price * 0.05);
            const priceChange = Math.floor(Math.random()*(maxPriceChange-minPriceChange+1)+minPriceChange);
            const operationType = Math.random() >= 0.5;

            if(operationType || (item.price - priceChange) <=0) {
                item.price += priceChange;
            } else {
                item.price -= priceChange;
            }

            let record = state.portfolioStock.find(stock => stock.id === item.id);

            if (record) {
                record.price = item.price;
            }

        })
    },

    [types.SAVING_DATA]: (state,) => {
        Vue.http.put('data.json', state);
    },

    [types.LOADING_DATA]: (state, payload) => {
        state.stocks = payload.stocks;
        state.funds = payload.funds;
        if(payload.portfolioStock && payload.portfolioStock.length > 0) {
            state.portfolioStock = payload.portfolioStock;
        }
    },
};