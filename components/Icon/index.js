import './iconfont.js'
export default {
    name: 'Icon',
    props: {
        link: {
            type: String,
            default: '#'
        }
    },
    render(h) {
        return h(
            'svg',
            {
                class: {
                    logo: true
                }
            },
            [
                h(
                    'use',
                    {
                        attrs: {
                            'xlink:href': '#icon-' + this.link
                        }
                    }
                )
            ]
        )
    }
}