<style src="./menu-item.less" lang="less" scoped>
</style>
<template>
    <button :class="menuItemClass.contain" @click="click">
        <Icon :class="menuItemClass.icon" v-if="icon.length" :link="icon" />
        <div :class="menuItemClass.title">{{title}}</div>
    </button>
</template>
<script>
    import Icon from '../Icon/index.js'
    import {findParentAttr} from '../common.js'
    export default {
        name: 'menu-item',
        computed: {
            menuItemClass() {
                const classes = {
                    horizon: {
                        contain: {
                            menuItem: true
                        },
                        icon: {
                            icon: true
                        },
                        title: {
                            title: true
                        }
                    },
                    vertical: {
                        contain: {
                            menuItem: true
                        },
                        icon: {
                            icon: true
                        },
                        title: {
                            title: true
                        }
                    }
                }[findParentAttr(this, 'direction')]
                return classes
            }
        },
        components: {
            Icon
        },
        methods: {
            click(e) {
                e.stopPropagation()
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