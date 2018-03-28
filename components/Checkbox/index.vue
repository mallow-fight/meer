<style lang="less" src="./index.less" scoped></style>
<script>
    import renderCheckbox from './common.js'
    export default {
        name: 'Checkbox',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            choosedTitle: {
                type: String,
                default: ''
            },
            unchoosedTitle: {
                type: String,
                default: ''
            },
            choosed: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            check: {
                type: Function,
                default: () => {}
            }
        },
        data() {
            return {
                sessionChoosed: this.choosed                
            }
        },
        render(h) {
            return renderCheckbox.call(this, h, (e) => {
                this.sessionChoosed = !this.sessionChoosed
                this.$emit('check', this.sessionChoosed)
            })
        }
    }
</script>