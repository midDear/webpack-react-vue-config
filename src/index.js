import Vue from 'vue'
import helper from './helper';
import "./chain"

var vm = new Vue({
    el: '#app',
    created: async function () {
        this.message = await helper.getData()
        this.str = helper.randomStr()
    },
    data: {
        message: 'He1llo111111222',
        message2: 'dfsdfdsfsd',
        str: ''
    },
    methods: {
        cal: function () {
            f1()
        }
    }
})