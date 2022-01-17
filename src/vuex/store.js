import Vuex from "vuex"
import Vue from "vue"
import axios from "axios"
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [],
        card: [],
        orders: []
    },
    plugins: [createPersistedState()],
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, response) => {
            state.products = response;
        },
        SET_CARD: (state, response) => {
            if(state.card.length){
                let isProductExist = false;
                state.card.map(function (item) {
                    if(item.id === response.id){
                        isProductExist = true;
                        item.quantity++
                    }
                })
                if(!isProductExist){
                    state.card.push(response)
                }
            }else{
                state.card.push(response)
            }

        },
        REMOVE_FROM_CARD: (state, index) =>{
            state.card.splice(index, 1);
        },
        INCREMENT: (state, index) =>{
            state.card[index].quantity++;
        },
        DECREMENT: (state, index) =>{
            if(state.card[index].quantity > 1) {
                state.card[index].quantity--;
            }
        },
        CLEAN_CARD: (state) =>{
            state.card = [];
        },

    },
    actions: {
        GET_PRODUCTS({commit}){
            return axios.get("../products.json")
            .then((response) => {

                response.data.map((item) =>{
                    item.quantity = 1;
                })
                commit('SET_PRODUCTS_TO_STATE', response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        },
        ADD_TO_CARD({commit}, product){
            commit('SET_CARD', product);
        },
        DELETE_FROM_CARD({commit}, index){
            commit('REMOVE_FROM_CARD', index);
        },
        INCREMENT_CARD_ITEM({commit}, index){
            commit('INCREMENT', index);
        },
        DECREMENT_CARD_ITEM({commit}, index){
            commit('DECREMENT', index);
        },
        CLEAN_IN_CARD({commit}){
            commit('CLEAN_CARD')
        }
    },
    getters: {
        PRODUCTS (state) {
            return state.products;
        },
        CARD (state) {
            return state.card;
        },
        GET_PRODUCT_PO_ID: state => id => {
            return state.products.find(p => p.id == id);
        }
    }
});

export default store