function findParentAttr(that, attr) {
    if(!that.$parent) return
    if(that.$parent[attr]) return that.$parent[attr]
    return findParentAttr(that.$parent, attr)
}
export {
    findParentAttr
}