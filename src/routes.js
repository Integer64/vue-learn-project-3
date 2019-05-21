import StockTrader from './components/StockTrader.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stocks.vue';

export const routes = [
    {   path: '',
        component: StockTrader },
    {   path: '/portfolio',
        component: Portfolio },
    {   path: '/stocks',
        component: Stocks },
    {
        path: '*',
        redirect: '/'
    }
];
