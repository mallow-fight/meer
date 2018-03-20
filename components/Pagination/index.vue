<style src="./index.css" scoped></style>
<script>
import tools from './tools.js'
export default {
    name: 'Pagination',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        total: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 10
        },
        defaultPageNo: {
            type: Number,
            default: 1
        },
        defaultLastPageText: {
            type: String,
            default: '<'
        },
        defaultNextPageText: {
            type: String,
            default: '>'
        },
        loadPage: {
            type: Function,
            default: () => {}
        },
        showTotal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            pageNo: this.defaultPageNo,
            maxPage: 1
        }
    },
    watch: {
        'defaultPageNo': function (newVal) {
            if(typeof newVal !== 'number' || newVal < 1 || JSON.stringify(newVal) === 'null') return
            this.pageNo = newVal
        }
    },
    methods: {
        proMidPages(h) {
            const maxPage = Math.ceil(this.total/this.pageSize)
            this.maxPage = maxPage
            const pages = []            
            let page = 1
            for(;page <= maxPage;page++) {
                pages.push(page)
            }
            return tools.handleMidPages.call(this, h, pages)
        },
        lastPage(e) {
            ;(this.pageNo > 1) && this.pageNo--
            return this.loadPage(this.pageNo, this.pageSize)         
        },
        nextPage(e) {
            ;(this.pageNo < this.maxPage) && this.pageNo++
            return this.loadPage(this.pageNo, this.pageSize)
        }
    },
    render(h) {
        const lastDisabled = (this.pageNo <= 1)
        const nextDisabled = (this.pageNo >= this.maxPage)
        if(this.total < 0) return console.error('total cannot less than zero!')
        if(this.pageSize <= 0) return console.error('pageSize cannot less than one!')
        let renderShowTotal = false
        if(this.showTotal) {
            renderShowTotal = h('span', `total is ${this.total}`)
        }
        return h(
            this.tag, // 最外层包含该组件的tag
            [
                renderShowTotal,
                h(
                    'button', // 上一页
                    {
                        class: {
                            'meer-last-page': true,
                            'meer-disabled': lastDisabled                         
                        },
                        on: {
                            click: (e) => {
                                return this.lastPage(e)
                            }
                        },
                        attrs: {
                            disabled: lastDisabled
                        }
                    },
                    [this.defaultLastPageText]
                ),
                this.proMidPages(h),
                h(
                    'button', // 下一页
                    {
                        class: {
                            'meer-next-page': true,
                            'meer-disabled': nextDisabled
                        },
                        on: {
                            click: (e) => {
                                return this.nextPage(e)
                            }
                        },
                        attrs: {
                            disabled: nextDisabled
                        }
                    },
                    [this.defaultNextPageText]
                )
            ]
        )
    }
}
</script>
