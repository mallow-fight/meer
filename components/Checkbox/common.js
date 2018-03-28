export default function renderCheckbox(h, clickFn) {
    return h(
        this.tag,
        [
            h(
                'input',
                {
                    attrs: {
                        type: 'checkbox',
                        disabled: this.disabled,
                        checked: this.choosed
                    },
                    class: {
                        box: true
                    },
                    on: {
                        click: (e) => {
                            return clickFn(e)
                        }
                    }
                }
            ),
            h(
                'div',
                {
                    class: {
                        title: true
                    }
                },
                [this.sessionChoosed ? this.choosedTitle : this.unchoosedTitle]
            ),
            this.$slots.default ? h(
                'Liner'
            ) : false,
            this.$slots.default
        ]
    )
}