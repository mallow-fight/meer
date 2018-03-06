<template>
    <div id="Affix" :style="affixStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Affix',
        data() {
            return {
                affixStyle: {}
            }
        },
        mounted() {
            const win = this.win()
            const self = this.$el
            const offsetLeft = self.offsetLeft
            const offsetTop = self.offsetTop
            win.addEventListener('scroll',(e) => {
                if(win.scrollY > parseInt(this.offsetTop)) {
                    this.affixStyle = {
                        position: 'fixed',
                        left: offsetLeft + 'px',
                        top: offsetTop + 'px'
                    }
                } else {
                    this.affixStyle = {}
                }
            })
        },
        props: {
            offsetTop: {
                type: String,
                default: '0'
            },
            win: {
                type: Function,
                default: () => window
            }
        },
        
    }
</script>
<style scoped>

</style>