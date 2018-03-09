<style src="./item.css" scoped></style>
<script>
export default {
    name: 'Menu-item',
    props: {
        title: {
            type: String,
            default: 'menu-item'
        },
        click: {
            type: Function,
            default: (e) => {}
        },
        path: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            show: true,
            direction: this.$parent.direction
        }
    },
    render(h) {
        const styles = {
            'horizon': {
                normalItem: {
                    normalItem: true
                }
            },
            'vertical': {
                normalItem: {
                    normalItem: true
                }
            }
        }[this.direction]
        return h(
            'div',
            {
                on: {
                    click: (e) => {
                        ;(this.path !== '') && (this.$router.push(this.path))
                        return this.click(e)
                    }
                }
            },
            [h('div', {
                class: styles.normalItem
            },[this.title])]
        )
    }
}
</script>
