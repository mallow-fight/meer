<style src="./step.less" lang="less" scoped>
</style>
<script>
    import Icon from '../Icon/index.js'
    import classes from './classes.js'
    export default {
        name: 'step',
        components: {
            Icon
        },
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            },
            description: {
                type: String,
                default: ''
            }
        },
        render(h) {
            const tagsMap = {
                stepContain: 'div',
                stepIcon: 'Icon',
                stepTitle: 'div',
                stepDescription: 'div',
                stepTextContain: 'div'
            }
            const cls = classes(this.$parent.direction)
            return h(
                this.tag,
                {class: cls.step},
                [
                    h(
                        tagsMap.stepContain,
                        {class: cls.stepContain},
                        [
                            h(
                                tagsMap.stepIcon,
                                {
                                    props: {
                                        link: this.icon
                                    },
                                    class: cls.stepIcon
                                }
                            ),
                            h(tagsMap.stepTextContain,
                            {class: cls.stepTextContain},
                            [
                                h(
                                    tagsMap.stepTitle,
                                    {class: cls.stepTitle},
                                    this.title
                                ),
                                h(
                                    tagsMap.stepDescription,
                                    {class: cls.stepDescription},
                                    this.description
                                )
                            ])
                        ]
                    )
                ]
            )
        }
    }
</script>