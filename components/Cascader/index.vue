<style lang="less" src="./index.less" scoped></style>
<script>
    export default {
        name: 'Cascader',
        props: {
            source: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                sourceSession: [],
                show: false
            }
        },
        methods: {
            init() {
                this.sourceSession = this.source.map( goods => {
                    return {
                        value: goods.value,
                        label: goods.label
                    }
                })
            },
            handleClickFather(value) {
                this.source.map((goods, inx) => {
                    if(goods.value === value) {
                        this.sourceSession[inx].children = goods.children
                    }
                })
            },
            renderAll(source, h, tag) {
                if(!source || !source.length) return;
                return source.map( (goods, inx) => {
                    let child = [goods.label]
                    if(goods.children && goods.children.length) {
                        child = child.concat(this.renderAll(goods.children, h, 'child'))
                    }
                    const father = h('div', {
                        on: {
                            click: e => {
                                this.show = false                                
                                e.stopPropagation()
                                if(tag === 'father') {
                                    console.log(goods)
                                    this.init()
                                    this.handleClickFather(goods.value)
                                } else {
                                    console.log(goods)
                                }                              
                                this.show = true
                            }
                        }
                    }, child)
                    return father
                })
            }
        },
        created() {
            this.init()            
        },
        render(h) {
            return h(
                'div',
                [
                    h(
                        'input',
                        {
                            attrs: {
                                placeholder: 'select there',
                                type: 'text',
                                readOnly: true
                            },
                            on: {
                                click: (e) => {
                                    e.preventDefault()
                                    this.init()
                                    this.show = !this.show
                                }
                            }
                        }
                    ),
                    h(
                        'div',
                        {
                            style: {
                                display: this.show ? 'block' : 'none'
                            }
                        },
                        this.renderAll(this.sourceSession, h, 'father')                        
                    )
                ]
            )
        }
    }
</script>