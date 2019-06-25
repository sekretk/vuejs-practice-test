import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex);

const fb = require("@/store/firebaseConfig.js");

const store = new Vuex.Store({
    modules: {
        auth,
        user,
    },
    state: {
        clients: [
            { id: 1, name: 'Homer Simpson', avatar: 'images/homer.png' },
            { id: 2, name: 'Marge Simpson', avatar: 'images/marge.png' },
            { id: 3, name: 'Bartholomew Simpson', avatar: 'images/bart.png' },
            { id: 4, name: 'Lisa Simpson', avatar: 'images/lisa.png' },
        ]
    },
    mutations: {
        setClients(state, items) {
            state.clients = items;
        },
    },
    actions: {
        async getClients({ state, commit }, plan) {
            try {
                const resultClient = [];
                fb.clientsCollection.get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        resultClient.push({ ...doc.data(), id: doc.id });
                        //   console.log(doc.id, " => ", doc.data());
                    });
                });

                commit('setClients', resultClient);
            } catch (error) {
                commit('setClients', []);
            }
        },
    },
})

fb.clientsCollection.onSnapshot(function (querySnapshot) {
    var clients = [];
    querySnapshot.forEach(function (doc) {
        clients.push(doc.data());
    });
    console.log("On snapshot: ", clients.join(", "));

    store.dispatch("getClients", store.state, clients);
})

export default store