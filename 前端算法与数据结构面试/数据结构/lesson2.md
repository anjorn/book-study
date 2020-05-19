### 栈和队列
栈和队列的实现一般都要依赖于数组

#### 数组添加元素
```
const arr = [1, 2]
arr.unshift(0) //[0,1,2]

const arr = [1, 2]
arr.push(3) // [1, 2, 3]

// splice
const arr = [1, 2]
arr.splice(1, 0, 3) // [1, 3, 2]
```

#### 数组删除元素
```
const arr = [1, 2, 3]
arr.shift() // [2, 3]

const arr = []1, 2, 3]
arr.pop() // [1, 2]
```

### 栈
后进先出
* 只允许从尾部添加元素 push
* 只允许从尾部取出元素 pop
```
// 初始状态 栈空
const stack = []

// 入栈
stack.push('东北大板')
stack.push('东北大板')
stack.push('东北大板')
stack.push('东北大板')
stack.push('东北大板')

// 出栈
while (stack.length) {
  const top = stack[stack.length - 1]
  console.log('现在取出的冰淇淋是', top)
  stack.pop()
}

// 栈空
stack // []

```

### 队列
先进先出
* 只允许从尾部添加元素
* 只允许从头部删除元素

```
const queue = []
queue.push('小测')
queue.push('小测')
queue.push('小测')
queue.push('小测')
queue.push('小测')

while (queue.length) {
    // 访问队头元素
    const top = queue[0]
    console.log(top, '取餐')
    // 出队
    queue.shift()
}

// 队空
queue // []

```