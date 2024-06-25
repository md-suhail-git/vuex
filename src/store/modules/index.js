import Vue from 'vuex';
import Vuex from 'vue';
import todos from './store/modules/todoList';


//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.customRef({
    modules:{
        todos
    }
});