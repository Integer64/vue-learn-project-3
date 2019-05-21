import Vue from 'vue';
import * as types from './types';

export default {
    [types.UPDATE_VALUE]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_VALUE, payload)
    },

    [types.SAVE_DATA]: ({commit}, payload) => {
        commit(types.SAVING_DATA, payload)
    },

    [types.LOAD_DATA]: ({commit}, payload) => {
        Vue.http.get('data.json')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    commit(types.LOADING_DATA, data)
                }
            });
    },
};
