<style lang="less" src="./index.less" scoped></style>
<script>
import Line from '../Liner/index.vue'
import renderCheckbox from './common.js'
    export default {
        name: 'Checkbox',
        components: {
            Liner: Line
        },
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
            disabled: {
                type: Boolean,
                default: false
            },
            choosed: {
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
                this.$slots.default.map((slot, inx) => {
                    const props = this.$slots.default[inx].componentOptions.propsData
                    !props.sessionUnchoosedTitle && (props.sessionUnchoosedTitle = props.unchoosedTitle)
                    !props.sessionChoosedTitle && (props.sessionChoosedTitle = props.choosedTitle)
                    props.choosed = this.sessionChoosed                    
                    this.sessionChoosed ? (props.choosedTitle = props.unchoosedTitle = props.sessionChoosedTitle) 
                        : (props.choosedTitle = props.unchoosedTitle = props.sessionUnchoosedTitle) 
                })
                this.$emit('check', this.sessionChoosed)
            })
        }
    }
</script>