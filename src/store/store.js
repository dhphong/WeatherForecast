import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isSearch: false,
        isCurrent: false,
        isStart: false,
        weather: {},
        place: ''
    },
    mutations,
    actions,
    getters
});
