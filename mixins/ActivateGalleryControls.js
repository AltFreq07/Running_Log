export default {
    data() {
        return {
            hideControls: false,
            timer: undefined,
        }
    },
    methods: {
        activateControls() {
            this.hideControls = false
            if (this.timer !== undefined) window.clearTimeout(this.timer)
            this.timer = setTimeout(
                function () {
                    this.hideControls = true
                }.bind(this),
                2000
            )
        },
    },
}