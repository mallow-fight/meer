export default {
    name: 'Row',
    props: {
        tag: {
            type: String,
            default: 'div'
        }
    },
    computed: {
        style() {
            return {
                display: 'flex',
                display: '-webkit-flex',
                'flex-flow': 'row wrap',
                width: '100%'
            }
        }
    },
    render(h) {
      return h(
        this.tag, 
        {
            style: this.style
        }, 
        this.$slots.default);
    }
  };