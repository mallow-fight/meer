export default {
    name: 'Col',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: String,
            default: '0'
        },
        offset: {
            type: String,
            default: '0'
        }
    },
    computed: {
        style() {
            return {
                display: 'inline-flex',
                display: '-webkit-inline-flex',
                'flex-flow': 'row wrap',
                'justify-content': 'flex-start',
                width: `${(100/24)*this.span}%`,
                marginLeft: `calc(100%/24*${this.offset})`
            }
        }
    },
    render(h) {
        return h(
            this.tag,
            {
                style: this.style
            },
            this.$slots.default
        )
    }
}