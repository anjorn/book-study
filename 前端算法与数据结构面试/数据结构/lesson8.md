### 栈和队列真题
```
// 括号
const map = {
    '}': '{',
    ']': '['
    ')': '('
}
const isValid = function (s) {
    if (!s) {
        return true
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]
        if (ch in Object.getKeys(map)) {
            stack.push(ch)
        } else {
            let temp = stack.pop()
            if (map[temp] != temp) {
                return false
            }
        }
    }
    return !stack.length
}
```
// 最小栈 取出栈最小的数字
// 递减趋势的栈
```
```

### 队列
1. 栈向队列的转化
2. 双端队列
双端队列就是允许在队列的两端进行插入和删除的队列
3. 优先队列

```
const maxSlidingWindow = function (nums, k) {
    let stack = [nums[0]]
    let len = nums.length;
    let res = new Array(len - k + 1)
    for (let i = 1; i < len - 1; i++) {
       while (stack.length > 0 && nums[i] > stack[stack.length - 1]){
           stack.pop()
       }
       stack.push(nums[i])
       res[i - k] = stack[stack.length - 1]]
    }
    return res
}
```