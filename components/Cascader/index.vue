<style src="./index.css" scoped></style>
<script>
    export default {
        name: 'Cascader',
        props: {
            chooses: {
                type: Array,
                default: []
            }
        },
        render(h) {
            return h(
                'div',
                ['cascader']
            )
        }
    }
</script>