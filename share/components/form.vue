<script>
    //es6

    import action from './action';

    let i = 0;

    export default {
        data () {
            return {
                data: action.state.message,
            }
        },
        methods: {
            changeA () {

                action.actionA(i++);
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