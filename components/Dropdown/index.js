export default {
    name: 'Dropdown',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        action: {
            type: String,
            default: 'click'
        },
        title: {
            type: String,
            default: 'Dropdown title'
        },
        initStatus: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // avoid use this.initStatus direct, use data or computed instead of
            sessionStatus: this.initStatus
        }
    },
    render(h) {
        const handleClick = (e) => {
            this.sessionStatus = !this.sessionStatus
            console.log(this.sessionStatus)
        }
        const renderChild = [h('div', ['title'])]
        if(this.sessionStatus) {
            renderChild.push(this.$slots.default)
        }
        const event = {on: {}}
        ;(this.action === 'click') && (event.on.click = handleClick)
        ;(this.action === 'hover') && (event.on.mouseenter = event.on.mouseleave = handleClick)
        return h(
            this.tag,
            event,
            renderChild
        )
    }
}