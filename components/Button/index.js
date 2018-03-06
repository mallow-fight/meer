export default {
    name: 'Button',
    data() {
        return {
            disabled: false,
            childText: ''
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
    mounted() {
        this.childText = this.text
    },
    methods: {
        formatSecond() {
            if((!this.second && this.second !== 0) || this.second < 0) return false
            return true
        },
        beforeCountDown() {
            this.disabled  = true     
            this.childText = this.second
            this.buttonClass.push('meer-button-count-down')
        },
        afterCountDown() {
            this.disabled = false
            this.childText = this.text
            this.buttonClass.pop()            
        },
        outerClick() {
            if(!this.formatSecond() || this.disabled) return
            this.beforeCountDown()
            this.countDownTime = setInterval(() => {
                this.childText -= 1
                if(this.childText === -1) {
                    clearInterval(this.countDownTime)
                    this.afterCountDown()
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
            default: -1
        }
    }
}