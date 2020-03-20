import Vue from 'vue'
import Button from './button'

Vue.component('g-button', Button)

new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:true,
        loading3:true,
    }
})