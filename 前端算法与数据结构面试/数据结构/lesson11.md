### 堆结构及其在排序中的应用

#### 前置知识（完全二叉树）
1. 从第一层到倒数第二层，每一层都是满的
2. 最后一层的结点是从左到右连续排列的，不存在跳跃排列的情况
3. 对于索引为n的结点来说：
索引为（n-1）/2的结点是它的父结点
索引为2*n+1的结点是它的左孩子结点
索引为2*n+2的结点是它的右孩子结点

#### 堆
1. 大顶堆：每个结点的结点值都不小于其左右孩子的结点值
2. 小顶堆：每个结点的结点值都不大于其左右孩子的结点值
删除：向下比较+交换
```
function downHeap (low, high) {
    // i为父结点 j为当前结点的左孩子
    let i = low, j = i*2 + 1
    while (j <= high) {
        // 找出左右结点的最大的结点
        if (j+1 <= high && heap[j+1] > heap[j]) {
            j = j + 1
        }
        if (heap[i] < heap[j]) {
            const temp = heap[j]
            heap[j] = heap[i]
            heap[i] = temp
            i = j
            j = j*2 + 1
        } else {
            break
        }
    }
}
```
添加：向上比较+交换
```
function upHeap(low, high) {
    let i = high
    let j = Math.floor((i-1) / 2)
    while (j >= low) {
        if (heap[j] < heap[i]) {
            const temp = heap[j]
            heap[j] = heap[i]
            heap[i] = temp
            i = j
            j = Math.floor((i-1)/2)
        } else {
            break
        }
    }
}
```