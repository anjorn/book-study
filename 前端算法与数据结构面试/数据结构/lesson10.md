### 二叉树
* 迭代法实现二叉树的先中后序遍历
* 二叉树层序遍历的衍生问题
* 翻转二叉树

#### 遍历三兄弟的迭代实现
合理安排入栈和出栈的时机， 使栈的出栈序列符合二叉树的前序遍历规则
```
function TreeNode (val) {
    this.val = val;
    this,left = this.rigfht = null
}
```
```
const preorderTraversal = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = []
    stack.push(root)
    while(stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        if (cur.right) {
            stack.push(cur.right)
        }
        if (cur.left) {
            stack.push(cur.left)
        }
    }
    return res
}
```
```
const postorderTravesal = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const stack = []
    stack.push(root)
    while (stack.length) {
        const cur = stack.pop()
        res.unshift(cur.val)
        if (cur.left) {
            stack.push(cur.left)
        }
        if (cur.right) {
            stack.push (cur.right)
        }
    }
    return res
}
```
```
const inorderTraversal = function (root) {
    const res = []
    const stack = []
    let cur = root
    while(cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res
}
```
### 层序遍历的衍生问题
DFS和BFS 二叉树层序遍历的实现方法
```
const levelOrder = function (root) {
    const res = []
    if (!root) {
        return res
    }
    const queue = []
    queue.push(root)
    while (queue.length) {
        const level = []
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const top = queue.shift()
            level.push(top.val)
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }
        }
        res.push(level)
    }
    return res
}
```
翻转二叉树
```
const invertTree = function(root) {
    if (!root) {
        return root;
    }
    let right = invertTree(root.right)
    let left = invertTree(root.left)
    root.left = right
    root.right = left
    return root
}
```

#### 二叉搜索树
1. 是一颗空树
2. 是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域
3. 左孩子 <= 根结点 <= 右孩子

#### 二叉搜索树 编码
1. 查找数据域为某一特点值的结点
2. 插入新结点
3. 删除指定结点
```
function search (root, n) {
    if (!root) {
        return
    }
    if (root.val == n) {
        console.log('目标结点是', root)
    } else if (root.val > n) {
        search(root.left, n)
    } else {
        search(root.right, n)
    }
}
```

```
function insert(root, n) {
    if (!root) {
       root = new TreeNode(n)
       return
    }

    if (root.val == n) {
        return
    } else if (root.val > n) {
        insert(root.left, n)
    } else {
        insert(root.right, n)
    }
}
```
```
function delete(root, n) {
    if (!root) {
        return
    }
    if (root.val === n) {
        if (!root.left && !root.right) {
            root = null
        } else if (root.left) {
            const maxLeft = findMax(root.left)
            root.val = maxLeft.val
            delete(root.left, maxLeft.val)
        } else {
            const minRight = findMin(root.right)
            root.val = minRight.val
            delete(root.right, minRight.val)
        }
    } else if (root.val > n) {
        delete(root.left, n)
    } else {
        delete(root.right, n)
    }
}
function findMax(root) {
    while (root.right) {
        root = root.right
    }
}

function findMin(root) {
    while(root.left) {
        root = root.left
    }
}
```