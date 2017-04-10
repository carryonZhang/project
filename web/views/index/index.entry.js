/**
 * Created by long-mac on 2017/4/10.
 */
// import Vue from 'vue';

const newsitem = new Vue({
    el: '.item',
    data: {
        isActive: false
    },
    methods: {
        highlight: function () {
            this.isActive = !this.isActive
        }
    }
})