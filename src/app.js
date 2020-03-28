import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

import Row from './row.vue'
import Col from './col.vue'

Vue.component('g-button', Button)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)

new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:true,
        loading3:true,
        message:'请输入',
    },
    methods:{
        inputChange(e){
            // this.number+=1
            
        },
    },
    
})