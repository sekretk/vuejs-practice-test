import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {        
        auth,
        user,
      },
    state: {
        clients:[
            {id: 1, name: 'Homer Simpson', avatar: 'images/homer.png'},
            {id: 2, name: 'Marge Simpson', avatar: 'images/marge.png'},
            {id: 3, name: 'Bartholomew Simpson', avatar: 'images/bart.png'},
            {id: 4, name: 'Lisa Simpson', avatar:  'images/lisa.png'},
        ]
    }
})