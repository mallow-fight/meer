function findParentAttr(that, attr) {
    if(!that.$parent) return
    if(that.$parent[attr]) return that.$parent[attr]
    return findParentAttr(that.$parent, attr)
}
function isArray(arg) {
    return arg instanceof Array
}
function createArr(start, end) {
    const arr = []
    for(let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr
}
function formatSmallNumber(num) {
    if(num < 10) return `0${num}`
    return `${num}`
}
export {
    findParentAttr,
    isArray,
    createArr,
    formatSmallNumber
}