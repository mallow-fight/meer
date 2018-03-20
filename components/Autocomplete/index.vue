<style src="./index.css" scoped></style>
<script>
    export default {
        name: 'Autocomplete',
        props: {
            dataSource: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                value: '',
                choosed: false
            }
        },
        methods: {
            renderSource(h) {
                if(this.choosed) return false
                return this.dataSource.map(val => {
                    if(this.value.length && val.indexOf(this.value) > -1) {
                        return h(
                            'div',
                            {
                                on: {
                                    click: (e) => {
                                        this.value = val
                                        this.choosed = true
                                    }
                                }
                            },
                            [val]
                        )
                    }
                })
            }
        },
        render(h) {
            return h(
                'div',
                [
                    h(
                        'input',
                        {
                            attrs: {
                                type: 'text',
                                placeholder: 'input there'
                            },
                            domProps: {
                                value: this.value
                            },
                            on: {
                                input: (e) => {
                                    this.value = e.target.value
                                    this.choosed = false
                                }
                            }
                        }
                    ),
                    this.renderSource(h)
                ]
            )
        }
    }
</script>