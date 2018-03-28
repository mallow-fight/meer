// 目前无法确定每个树节点的坐标
// 暂时方案，点击祖先节点，显示所有孩节点，同时隐藏其他祖先节点的所有孩节点
/**
 * 多叉树遍历
 */

 // 递归实现
 // 依靠fatherValue很难实现确定数组某一项的算法
 function recursionTree(treeNodes, fatherValue) {
    if (!treeNodes || !treeNodes.length) return;
    for(let i = 0, len = treeNodes.length; i < len; i++) {
        const childs = treeNodes[i].children
        treeNodes[i].fatherValue = fatherValue
        console.log(treeNodes[i])
        if(childs && childs.length > 0) {
            recursionTree(childs, treeNodes[i].value)
        }
    }
}

// 非递归广度优先实现
// 父子平行，难以确定位置
function breadthFirstTree(treeNodes) {
    if(!treeNodes || !treeNodes.length) return;
    let stack = []
    for(let i = 0, len = treeNodes.length; i < len; i++) {
        stack.push(treeNodes[i])
    }
    while(stack.length) {
        item = stack.shift()
        console.log(item.value)
        if(item.children && item.children.length) {
            stack = stack.concat(item.children)
        }
    }
}

// 非递归深度优先
function deepFirstTree(treeNodes) {
    if(!treeNodes || !treeNodes.length) return;
    let stack = []
    for(let i = 0, len = treeNodes.length; i < len; i++) {
        stack.push(treeNodes[i])
    }
    while(stack.length) {
        item = stack.shift()
        console.log(item.value)
        if(item.children && item.children.length) {
           stack = item.children.concat(stack)
       }
    }
}