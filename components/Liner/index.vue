<script>
    export default {
        name: 'Liner',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            direction: {
                type: String,
                default: 'horizon'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            }
        },
        render(h) {
            const how2render = {
                horizon: {
                    class: {
                        'meer-line': true
                    },
                    style: {
                        width: this.width
                    }
                },
                vertical: {
                    class: {
                        'meer-vertical-line': true
                    },
                    style: {
                        height: this.height
                    }
                }
            }[this.direction]
            return h(
                this.tag,
                how2render
            )
        }
    }
</script>
<style scoped>
    .meer-line{
        background: #d9d9d9;
        height: .2rem;
    }
    .meer-vertical-line{
        background: #d9d9d9;
        width: .2rem
    }
</style>