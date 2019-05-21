import * as types from './types';

export default {
    [types.FUNDS]: state => {
        return state.funds;
    },
    [types.FUNDS_FORMAT]: state => {
        return state.funds.toLocaleString('en-US');
    },
    [types.STOCKS]: state => {
        return state.stocks;
    },
    [types.STOCK]: state => id => {
        return state.stocks.find(stock => stock.id === id);
    },
    [types.PORTFOLIO_STOCKS]: state => {
        return state.portfolioStock;
    },
    [types.PORTFOLIO_STOCK]: state => id => {
        return state.portfolioStock.find(stock => stock.id === id);
    }
};