### 深度搜索
#### 深度优先搜索DFS
1. 只要没有碰壁，就决不选择其他的道路，继续走
2. 核心思想是试图穷举所有的完整路径
3. 栈结构
4. DFS与二叉树的遍历

#### 广度优先搜索BFS
1. 以“广度”为第一要务、雨露均沾，一层一层地扫描
```
function BFS(入口坐标) {
    const queue = []
    queue.push(入口坐标)
    while (queue.length) {
        const top = queue[0]
        访问top
        for (检查 top 元素出发能够遍历到的所有元素) {
            queue.push(top能够直接抵达的元素)
        }
    }
    queue.shift()
}
```

#### 递归回溯
```
const permute = function(nums) {
    const len = nums.length
    const curr = []
    const res = []
    const visited = {}
    function dfs(nth) {
        if (nth === len) {
            res.push(curr.slice())
            return
        }

        for (let i = 0; i < len; i++) {
            if (!visited[nums[i]]) {
                visited[nums[i]] = 1
                curr.push(nums[i])
                dfs(nth + 1)
                curr.pop()
                visited[nums[i]] = 0
            }
        }
    }
    dfs(0)
}
```

```
const subsets = function(nums) {
    let len = nums.length
    let res = []
    let subset = []
    function dfs (index) {
        res.push(subset.slice())
        for (let i = 0; i < len; i++) {
            subset.push(nums[i])
            dfs(i + 1)
            subset.pop()
        }
    }
    dfs(0)
    return res
}
```
#### 剪枝
深度优先搜索中，有时我们会去掉一些不符合题目要求的、没有作用的答案，进而得到正确答案。这个丢掉答案的过程，形似剪掉树的枝叶，所以这一方法被称为“剪枝”。   

1. 递归式：普通组合问题，每到一个新的坑位处，我们都需要对组合结果数组进行更新
2. 递归边界：只要组合内数字个数达到了k个，就不再继续当前的路径向下遍历，就是直接返回

```
const combine = function(n, k) {
    const res = []
    const subset = []
    dfs(0)
    function dfs (index) {
        if (subset.length == k) {
            res.push(subset.slice())
            return
        }
        for (let i = index; i <= n; i++) {
            subset.push(i)
            dfs(i+1)
            subset.pop()
        }
    }
    return res
}
```
#### 回溯算法
1. 概念： 回溯法是一种选优搜索法，按选优条件向前搜索，以达到目标，但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择。走不通就退回再走的技术为回溯法，满足回溯条件的某个状态的点称为回溯点

2. 思想：从一条路往前走，能进则进，不能进则退回来，换一条路再试
##### 递归和回溯问题 - 解题模版总结
* 什么时候用（确定场景）
1. 题目中暗示了一个或多个解，并且要求我们详尽的列举出每一个解的内容时，一定要想到DFS，想到递归回溯
2. 题目经过分析后，可以转化为树形逻辑模型求解
* 为什么这么用（提供依据）
递归和回溯的过程，本身就是穷举的过程。
* 怎么用（细化步骤）
1. 一个模型（树形逻辑模型）
2. 两个要点（递归式和递归边界）
```
function xxx(入参) {
    前期的变量定义、缓存等准备工作
    // 定义路径栈
    const path = []
    // 进入dfs
    dfs(起点)
    // 定义dfs
    dfs (递归参数) {
        if (到达了递归边界) {
            结合题意处理边界逻辑，往往和path内容有关
            return
        }
        注意这里也可能不是for 视题意决定
        for (遍历坑位的可选填) {
            path.push(当前选中值)
            处理坑位本身的相关逻辑
            path.pop()
        }
    }
    
}
```