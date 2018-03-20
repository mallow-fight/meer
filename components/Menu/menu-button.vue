<style src="./menu-button.less" lang="less" scoped></style>
<template>
    <button 
    @mouseenter="mouseenter" 
    @mouseleave="mouseleave"
    @click="mouseClick"
    :class="menuButtonClass.contain" 
    ref="menuButton">
            <Icon :class="menuButtonClass.icon" v-if="icon.length" :link="icon" />
            <div :class="menuButtonClass.title">{{title}}</div>
            <div v-show="showSlot" :style="fixPosition" :class="menuButtonClass.slotClass">
                <slot></slot>        
            </div>
    </button>
</template>
<script>
    import Icon from '../Icon/index.js'
    export default {
        name: 'menu-button',
        components: {
            Icon
        },
        data() {
            return {
                fixPosition: {},
                showSlot: true
            }
        },
        mounted() {
            if(this.$parent.direction === 'horizon') {
                this.fixHorizon()                
            } else {
                this.showSlot = false
            }
        },
        methods: {
            fixHorizon() {
                const menuButton = this.$refs.menuButton
                const offsetHeight = menuButton.offsetHeight
                const offsetWidth = menuButton.offsetWidth
                this.showSlot = false            
                this.fixPosition.top = offsetHeight + 3 + 'px'
                this.fixPosition.left = '3px'
            },
            mouseenter() {
                if(this.disabled || this.type === 'click') return
                this.showSlot = true
            },
            mouseleave() {
                if(this.disabled) return
                this.showSlot = false
            },
            mouseClick(e) {
                if(this.disabled) return
                e.preventDefault()
                this.showSlot = !this.showSlot
            }
        },
        computed: {
            menuButtonClass(){
                let disable = false
                ;this.disabled ? (disable = true) : false;
                const classes = {
                    horizon: {
                        contain: {
                            'menu-button': true,
                            'not-allowed': disable
                        },
                        icon: {
                            'menu-button-horizon-icon': true
                        },
                        title: {
                            'menu-button-horizon-title': true,
                        },
                        slotClass: {
                            slotClass: true
                        }
                    },
                    vertical: {
                        contain: {
                            'menu-vertical-button': true,
                            'not-allowed': disable
                        },
                        icon: {
                            'menu-button-horizon-icon': true
                        },
                        title: {
                            'menu-button-horizon-title': true
                        }
                    }
                }[this.$parent.direction];
                return classes
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'click'
            }
        }
    }
</script>