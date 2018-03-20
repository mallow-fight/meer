<style lang="less" src="./index.less" scoped></style>
<template>
    <div class="dropdown" 
    @mouseenter="mouseenter" 
    @mouseleave="mouseleave"
    @click="mouseclick">
        <button 
            class="button" 
            ref="button">
            <span class="buttonText">{{title}}</span>
            <Icon class="buttonIcon" :link="icon" />
        </button>
        <div ref="down" v-show="controlList" :style="fixPosition" :class="positionClass">
            <div @click="clickItem(li, $event)" class="list-item" v-for="li in list" :key="li.key">
                {{li.value}}
            </div>
        </div>
    </div>
</template>
<script>
    import Icon from '../Icon/index.js'
    export default {
        name: 'Dropdown',
        components: {
            Icon
        },
        data() {
            return {
                positionClass: {down: true},
                controlList: true,
                fixPosition: {}             
            }
        },
        mounted() {
            const button = this.$refs.button
            const btHeight = button.offsetHeight
            const btWidth = button.offsetWidth
            const down = this.$refs.down
            const dwHeight = down.offsetHeight
            const dwWidth = down.offsetWidth
            this.controlList = false
            const set = (h, w) => {
                this.fixPosition.top = h + 'px'
                this.fixPosition.left = w + 'px'
            }
            switch(this.position) {
                case 'down':
                    set(btHeight, 3);break;
                case 'top':
                    set(-dwHeight, 3);break;
                case 'left':
                    set(3, -dwWidth);break;
                case 'right':
                    set(3, btWidth);break;
                case 'down-left':
                    set(btHeight, -dwWidth);break;
                case 'down-right':
                    set(btHeight, btWidth);break;
                case 'top-left':
                    set(-dwHeight, -dwWidth);break;
                case 'top-right':
                    set(-dwHeight, dwWidth);break;
                default: break;
            }
        },
        methods: {
            mouseenter() {
                ;(this.action === 'hover') && (this.controlList = true)
            },
            mouseleave() {
                this.controlList = false
            },
            mouseclick() {
                ;(this.action === 'click') && (this.controlList = !this.controlList)
            },
            clickItem(li, e) {
                e.stopPropagation()
                this.controlList = false
                return this.click(e, li)
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            list: {
                type: Array,
                default: []
            },
            position: {
                // down top left right down-left down-right top-left top-right
                type: String,
                default: 'down'
            },
            action: {
                type: String,
                default: 'hover'
            },
            initStatus: {
                type: Boolean,
                default: false
            },
            click: {
                type: Function,
                default: (e, li) => {}
            },
            icon: {
                type: String,
                default: 'down'
            }
        }
    }
</script>