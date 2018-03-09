<style src="./menu.css" scoped></style>
<script>
export default {
    name: 'Menu',
    props: {
        title: {
            type: String,
            default: 'menu-title'
        },
        type: {
            type: String,
            default: 'click'
        },
        disabled: {
            type: String,
            default: 'false'
        },
        click: {
            type: Function,
            default: (e) => {}
        }
    },
    data() {
        return {
            show: false,
            fixVerticakItemsHoverTop: '-20px',
            direction: this.$parent.direction
        }
    },
    render(h) {
        const styles = {
            'horizon': {
                button: {
                    menuButtonHorizon: this.disabled !== 'true',
                    disabledMenuButtonHorizon: this.disabled === 'true'
                },
                menuLine: {
                    menuLineHorizon: true
                },
                menuItems: {
                    menuItemsContainHorizon: true
                }
            },
            'vertical': {
                button: {
                    verticalButton: this.disabled !== 'true',
                    disabledVerticalButton: this.disabled === 'true'
                },
                menuLine: {
                    verticalMenuLine: true
                },
                menuItems: {
                    verticalMenuItemsClick: this.type === 'click',
                    verticalMenuItemsHover: this.type === 'hover'
                },
                fixVerticakItemsHoverTop: {
                    top: this.type === 'hover' ? this.fixVerticakItemsHoverTop : null
                }
            }
        }[this.direction]

        const menuItems = []        
        if(this.show) {
            menuItems.push(h(
                    'div',
                    {
                        class: styles.menuItems
                    },
                    [this.$slots.default]
                )
            )
        }
        return h(
            'button',
            {
                class: styles.button,
                style: {
                    cursor: this.disabled !== 'true' ? 'pointer': 'not-allowed',
                },
                attrs: {
                    disabled: this.disabled === 'true' ? true : false
                },
                on: {
                    click:  (e) => {
                        e.preventDefault()                        
                        this.show = !this.show
                        return this.click(e)
                    },
                    mouseenter: (e) => {
                        if(this.type !== 'hover') return
                        console.log(e)
                        // this.fixVerticakItemsHoverTop = -e.target.offsetHeight + 'px'
                        this.show = true
                    },
                    mouseleave: (e) => {
                        this.show = false
                    }
                }
            },
            [
                h('div', [this.title]),
                h('div', {
                    class: styles.menuLine,
                    style: styles.fixVerticakItemsHoverTop
                }, menuItems)
            ]
        )
    }
}

</script>
