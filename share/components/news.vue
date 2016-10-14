<script>
    //es6
    import List from './list.vue'
    import news from './service'

    export default {
        //data:function(){}，下面是es6写法
        data () {
            return {
                data: []
            }
        },
        components: {
            'list' : List
        },
        ready () {
            this.get();
        },
        methods: {
            get: function () {
                var _this = this;
                news.getList().then(function (response) {
                    _this.$set('data', JSON.parse(response.body));
                })
            }
        }

    }
</script>
<template>
    <div>
        <h1>{{data.success}}</h1>
    </div>
    <list :data.sync="data.data"></list>
</template>