export default {
    state: {
        message: 'Hello!'
    },
    actionA: function (i) {
        this.state.message = 'action A triggered'+i;
    },

    actionB: function () {
        this.state.message = 'action B triggered'
    }
}