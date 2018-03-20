<style src="./menu-group.less" lang="less" scoped>
</style>
<template>
    <div :class="menuGroupClass.contain" @click="catchPop">
        <Icon v-if="icon.length" :class="menuGroupClass.icon" :link="icon" />
        <div :class="menuGroupClass.title">{{title}}</div>
        <slot></slot>
    </div>
</template>
<script>
    import Icon from '../Icon/index.js'
    import {findParentAttr} from '../common.js'
    export default {
        name: 'menu-group',
        components: {
            Icon
        },
        methods: {
            catchPop(e) {
                e.stopPropagation()
            }
        },
        computed: {
            menuGroupClass() {
                const classes = {
                    'horizon': {
                        contain: {
                            'menu-group': true
                        },
                        icon: {
                            'menu-group-icon': true
                        },
                        title: {
                            'menu-group-title': true
                        }
                    },
                    'vertical': {
                        contain: {
                            'menu-group': true
                        },
                        icon: {
                            'menu-group-icon': true
                        },
                        title: {
                            'menu-group-title': true
                        }
                    }
                }[findParentAttr(this, 'direction')];
                return classes
            }
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
            }
        }
    }
</script>