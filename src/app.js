import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:true,
        loading3:true,
    }
})