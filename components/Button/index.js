export default {
    name: 'Button',
    data() {
        return {
            disabled: false,
            showSecond: false,
            childSecond: 45
        }
    },
    computed: {
        buttonClass() {
            return [
                'meer-button',
                'meer-button-' + this.type,
                'meer-button-size-' + this.size
            ]
        }
    },
    methods: {
        outerClick() {
            if(this.disabled) return
            this.disabled = this.showSecond  = true     
            this.childSecond = this.second
            this.buttonClass.push('meer-button-count-down')
            this.countDownTime = setInterval(() => {
                this.childSecond -= 1
                if(this.childSecond === -1) {
                    clearInterval(this.countDownTime)
                    this.buttonClass.pop()
                    this.disabled = this.showSecond = false
                }
            }, 1000)
        }
    },
    beforeDestroy() {
        if(this.countDownTime) {
            clearInterval(this.countDownTime)
        }
    },
    props: {
        text: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'normal'
        },
        click: {
            type: Function,
            default: (e) => {
                // console.log(e)
            }
        },
        size: {
            type: String,
            default: 'default'
        },
        second: {
            type: Number,
            default: 45
        }
    }
}