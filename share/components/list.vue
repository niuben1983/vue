<script>
    module.exports = {
        data () {
            return {

            }
        },
        props: {
            data: {
                twoWay: true
            }
        }
    }

</script>
<template>
    <ol>
        <li v-for="item in data">
            <h4>{{item.title}}</h4>
        </li>
    </ol>
</template>

