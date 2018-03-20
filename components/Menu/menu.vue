<style lang="less" scoped>
    @import '../index.less';
    .menuHorizon{
        width: 100%;
        border-bottom: 1px solid @shallowColor;
    }
    .menuVertical{
        width: max-content;
        border-right: 1px solid @shallowColor;
    }
</style>
<script>
    export default {
        name: 'Menu',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            direction: {
                type: String,
                default: 'horizon'
            }
        },
        render(h) {
            const classWrap = {
                horizon: {
                    menuHorizon: true
                },
                vertical: {
                    menuVertical: true
                }
            }[this.direction];
            return h(
                this.tag,
                {
                    class: classWrap
                },
                [this.$slots.default]
            )
        }
    }
</script>