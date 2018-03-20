export default {
    handleMidPages: function handleMidPagesF (h, pages) {
        if(this.maxPage <=7) {
            return lessPage.call(this, h, pages)
        } else {
            return morePage.call(this, h, pages)
        }
    }
}
function lessPage (h, pages) {
    return pages.map( page => {
        return renderMidButton.call(this, h, page)
    })
}
function morePage(h, pages) {
    // 停留在第一页的状态
    return cutPages.call(this, pages).map( page => {
        return renderMidButton.call(this, h, page)
    })
}
function cutPages(pages) {
    if(this.pageNo < 5) {
        return [pages[0], pages[1], pages[2], pages[3], pages[4], ['...', 'right'], pages[pages.length-1]]
    }
    if(this.pageNo > this.maxPage - 4) {
        return [
            pages[0], 
            ['...', 'left'],
            pages[pages.length -5],
            pages[pages.length - 4],
            pages[pages.length - 3],
            pages[pages.length - 2],
            pages[pages.length - 1]
        ]
    }
    return [
        pages[0],
        ['...', 'left'],
        this.pageNo-2,
        this.pageNo-1,
        this.pageNo,
        this.pageNo+1,
        this.pageNo+2,
        ['...', 'right'],
        pages[pages.length - 1]
    ]
}
function renderMidButton(h, page) {
    const pageIsNo = typeof page === 'number'
    const pageDirection = page[1]
    pageIsNo ? page : (page = page[0])
    return h(
        'button',
        {
            class: {
                'meer-mid-pages': true,
                'meer-active-page': this.pageNo === page
            },
            on: {
                click: (e) => {
                    if(typeof page === 'number') {
                        this.pageNo = page
                        return this.loadPage(page, this.pageSize)
                    } else {
                        if(pageDirection === 'left') { this.pageNo -= 5 }
                        if(pageDirection === 'right') { this.pageNo += 5 }
                        if(this.pageNo < 1) { this.pageNo = 1 }
                        if(this.pageNo > this.maxPage) { this.pageNo = this.maxPage }
                        return this.loadPage(this.pageNo, this.pageSize)
                    }
                }
            }
        },
        [page]
    )
}