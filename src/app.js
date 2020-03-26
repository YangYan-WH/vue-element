import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('g-button', Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:true,
        loading3:true,
        message:'123',
    },
    methods:{
        inputChange(e){
            // this.number+=1
            
        },
    },
    
})