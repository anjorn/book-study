### 排序
* 基础排序算法
    - 冒泡排序
    - 插入排序
    - 选择排序
* 进阶排序算法
    - 归并排序
    - 快速排序

#### 冒泡排序
```
function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
```

#### 选择排序
```
function selectSort (arr) {
    const len = arr.length
    let minIndex
    for (let i = 0; i < len; i++) {
        minIndex = i
        for (let j = i+1; j <len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}
```

#### 插入排序
```
function insertSort(arr) {
    const len = arr.length
    let temp
    for (let i = 1; i < len; i++) {
        let j = i
        temp = arr[i]
        while (j > 0 && arr[j-1] > temp) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    return arr
}
```
### 分治思想
#### 归并排序
* 分解子问题
* 求解每个子问题
* 合并子问题的解，得出大问题的解
* 时间复杂度O(nlog(n))
```
function mergeSort (arr) {
    const len = arr.length
    if (len <= 1) {
        return arr
    }
    const mid = Math.floor(len / 2)
    const leftArr = mergeSort(arr.slice(0, mid))
    const rightArr = mergeSort(arr.slice(mid, len))
    arr = mergeArr(leftArr, rightArr)
    return arr
}

function mergeArr (arr1, arr2) {
    let i = 0, j = 0
    const res = []
    const len1 = arr1.length
    const len2 = arr2.length
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}
```

#### 快速排序
思路：将原始的数组筛选成较小和较大的两个子数组，然后递归的排序两个子数组
```
function quickSort (arr, left = 0, right = arr.length - 1) {
    if (arr.length > 1) {
        const nextPivot = partition(arr, left, right)
        if (left < nextPivot - 1) {
            quickSort(arr, left, nextPivot-1)
        }
        if (nextPivot < right) {
            quickSort(arr, nextPivot, right)
        }
    }
    return arr
}

function partition(arr, left, right) {
    let pivotValue = arr[Math.floor(left + (right - left)/2)]
    let i = left
    let j = right
    while (i <= j) {
        while(arr[i] < pivotValue) {
            i++
        }
        while(arr[j] > pivotValue) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
```