<style src="./index.css" scoped></style>
<script>
import item from './item.vue'
import menu from './menu.vue'
export default {
    name: 'Menu-group',
    item,
    menu,
    props: {
        direction: {
            type: String,
            default: 'horizon'
        }
    },
    render(h) {
        return h(
            'div',
            [
                this.$slots.default
            ]
        )
    }
}
</script>
