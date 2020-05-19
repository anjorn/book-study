### 链表
线性结构

主要定位目标结点的前驱结点

链表的插入和删除效果高 访问效率低
```
function ListNode (val) {
    this.val = val;
    this.netx = null;
}

const node = new ListNode(1)
node.next = new ListNode(2)

// 添加元素
// 前驱结点和目标结点的next指针指向
const node3 = new ListNode(3)
node3.next = node1.next
node1.next = node3

// 删除元素
node1.next = node3.next
```

### 树
* 树的层次计算规则：根结点所在的那一层记为第一层，其子结点所在的就是第二层
* 结点和树的高度计算规则：叶子结点高度记为1，每向上一层高度就加1，逐层向上累加至目标结点时，所得到的值就是目标结点的高度。树中结点的最大高度，成为树的高度
* 度的概念：一个结点开叉出去多少个子树，被成为结点的度
* 叶子结点：叶子结点就是度为0的结点

### 二叉树
* 没有根结点，作为一颗空树存在
* 不是空树就由根结点，左子树和右子树组成 左右子树都是二叉树
```
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const node = new TreeNode(1)
```

#### 二叉树遍历
* 先序遍历 根结点 -> 左子树 -> 右子树
* 中序遍历 左子树 -> 根结点 -> 右子树
* 后序遍历 左子树 -> 右子树 -> 根结点
* 层次遍历

* 递归遍历
* 迭代遍历

##### 递归遍历
递归函数：
* 递归式
* 递归边界
```
const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        right: {
            val: 'F'
        }
    }
}
```
```
// 递归函数
// 所有遍历函数的入参都是树的根结点对象 前序遍历
function preorder (root) {
    //  递归边界 root为空
    if (!root) {
        return;
    }
    // 输出当前遍历的结点值
    console.log('当前遍历的val值', root.val);
    preorder(root.left) // 遍历左子树
    preorder(root.right) // 遍历右子树
    
}

// 中序遍历
function inorder (root) {
    // 递归边界 root为空  
    if (!root) {
        return
    }
    inorder(root.left)
    console.log('当前遍历的val值', root.val)
    inorder(root.right)
}

// 后序遍历
function postorder (root) {
    // 递归边界 root为空
    if (!root) {
        return;
    }
    postorder(root.left)
    postorder(root.right)
    console.log('当前遍历的val值', root.val)
}
```