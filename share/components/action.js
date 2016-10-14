export default {
    state: {
        message: 'Hello!'
    },
    actionA: function () {
        this.state.message = 'action A triggered'
    },

    actionB: function () {
        this.state.message = 'action B triggered'
    }
}