<script>
    //es6
    import List from './list.vue'
    import news from './service'

    export default {
        //data:function(){}，下面是es6写法
        data () {
            return {
                data: [],
                number: 1
            }
        },
        components: {
            'list' : List
        },
        ready () {
            this.get();
        },
        methods: {
            get () {
                var _this = this;
                news.getList(_this.number, 5).then(function (response) {
                    _this.data = response.body.data;
                })
            },
            next () {
                var _this = this;
                _this.number++;
                news.getList(_this.number, 5).then(function (response) {
                    _this.data = _this.data.concat(response.body.data);
                })
            }
        }

    }


</script>
<template>
    <div>
        <h1>{{data.success}}</h1>
    </div>
    <button v-on:click = "next">下一页</button>
    <list :data.sync="data"></list>
</template>