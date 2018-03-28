<style src="./index.less" lang="less" scoped>
</style>
<script>
    import classes from './classes.js'
    export default {
        name: 'Step',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            direction: {
                type: String,
                default: 'horizon'
            },
            current: {
                type: Number,
                default: 0
            }
        },
        render(h) {
            const tagsMap = {
                everyStep: 'div',
                line: 'div',
                compContain: 'div'
            }
            const cls = classes(this.direction)
            const compsLength = this.$slots.default.length
            const current = this.current
            const renders = this.$slots.default.map((comp, inx) => {
                if(inx < current) {
                    return h(
                        tagsMap.everyStep,
                        {class: cls.everyStep},
                        [
                            h(tagsMap.compContain, {class: cls.completeComp}, [comp]),
                            h(tagsMap.line, {class: cls.completeLine})
                        ]
                    )
                }
                if(inx === current) {
                    const child = [h(tagsMap.compContain, {class: cls.currentComp}, [comp])]
                    if(inx < compsLength - 1) {
                        child.push(h(tagsMap.line, {class: cls.waitLine}))
                    }
                    return h(
                        tagsMap.everyStep,
                        {class: cls.everyStep},
                        child
                    )
                }
                if(inx > current) {
                    const child = [h(tagsMap.compContain, {class: cls.waitComp}, [comp])]
                    if(inx < compsLength - 1) {
                        child.push(h(tagsMap.line, {class: cls.waitLine}))
                    }
                    return h(
                        tagsMap.everyStep,
                        {class: cls.everyStep},
                        child
                    )
                }
            })
            return h(
                this.tag,
                {class: cls.contain},
                renders
            )
        }
    }
</script>