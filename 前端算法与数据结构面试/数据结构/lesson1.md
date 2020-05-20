## 数据结构
* 数组
* 栈
* 队列
* 链表
* 树（二叉树）

### 数组
数组的访问效率高 插入效率低
#### 创建
```
    const arr = new Array()
    // 指定长度
    const arr = new Array(7)
```
#### 遍历
没有特殊需求，统一适用for循环使用遍历，从性能上，for循环是最快的
1. for
```
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
}
```
2. forEach
```
arr.forEach((item, index) => {
    // 输出数组的元素值，输出当前索引
    console.log(item, index);
})
```
3. map
```
const newArr = arr.map((item, index) => {
    console.log(item, index)
    return item + 1
})
```
4. filter
```
// 返回每项返回true组成的数组
const newArr = arr.filter((item, index) => {
   return item > 0
})
```
5. every
```
// 对每一项都返回true 结果就是true
const flag = arr.every((item, index) => {
    return item;
});
```
6. some
```
// 对每一项任意一项返回true 结果就是true
const flag = arr.some((item, index) => {
    return item;
});
```
#### 累加
```
function getSum(total, num) {
    return total + Math.round(num);
}
return arr.reduce(getsum, 0)
```
#### 是否包含
```
// fromindex默认是0 开始检索的位置
arr.includes(str, fromIndex) // true false
arr.indexOf(str, fromindex) // number
//  最后出现的位置
arr.lastIndexOf(str, fromindex)
```
#### 二维数组
##### 初始化一个数组
```
const len = arr.length;
for (let i = 0; i < len; i++) {
    arr[i] = [];
}
```
##### 二维数组的访问
```
const outerLen = arr.length;
for (let i = 0; i < outerLen; i++) {
    const innerLen = arr[i].length
    for (let j = 0; j < innerLen; j++) {
        console.log(arr[i][j], i, j)
    }
}
```


