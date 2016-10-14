<script>
    //es6

    import action from './action';

    export default {
//        el:"#app",
        //data:function(){}，下面是es6写法
        data () {
            return {
                data: action.state.message,
            }
        },
        methods: {
            changeA () {
                action.actionA();
                this.$set('data', action.state.message);
            },
            changeB () {
                action.actionB();
                this.$set('data', action.state.message);
            }
        }
    }
</script>
<template>
    <button v-on:click="changeA">A</button>
    <button v-on:click="changeB">B</button>


    <div>{{ data }}</div>
</template>