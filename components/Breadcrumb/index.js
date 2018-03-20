export default {
    name: 'Breadcrumb',
    props: {
        split: {
            type: String,
            default: '/'
        },
        tag: {
            type: String,
            default: 'div'
        },
        pathColor: {
            type: String,
            default: 'red'
        },
        splitColor: {
            type: String,
            default: 'skyblue'
        }
    },
    render(h) {
        // notice: this.$router.currentRoute.path is not useful. willnot change after change route.
        if(!this.$route) return console.error('食用Breadcrumb前请配合食用vue-router')
        const currentPath = this.$route.path
        const currentPathArr = []
        currentPath.split('/').map( path => {
            if(path) currentPathArr.push(path)
        })
        function wrapPath(inx) {
            let pt = ''
            for(let i =0; i < inx + 1; i++) {
                pt = pt + currentPathArr[i] + '/'
            }
            return pt
        }
        const cp = []
        currentPathArr.map( (path, inx) => {
            cp[inx] = {
                name: path,
                pathTotal: wrapPath(inx)
            }
        })
        const renderPath = cp.map( path => {
            return h(
                'span',
                {
                    on: {
                        click: (e) => {
                            this.$router.push('/'+ path.pathTotal)
                        }
                    }
                },
                [   
                    h('span',{
                        style: {
                            color: this.pathColor
                        }
                    }, [path.name]),
                    h('span',{
                        style: {
                            color: this.splitColor
                        }
                    }, ['/'])
                ]
            )
        })
        return h(this.tag, renderPath)
    }
}