### 链表
1. 链表的处理：合并 删除等（删除操作重点）
2. 链表反转及其衍生
3. 链表成环问题及其衍生题目
处理链表的本质，是处理链表结点之间的指针关系

#### 链表的合并
```
const mergeTwoLists = function(l1, l2) {
    // 定义头结点，确保链表可以被访问到
    let head = new ListNode()
    // cur 这里就是针
    let cur = head
    // 针开始在l1和l2间穿梭
    while (l1 && l2) {
        if (l1.val <= l2.val> {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        // 针在串起一个结点后，也会往前一步
        cur = cur.next
    }
    // 处理链表不等长的情况
    cur.next = l1 !== null ? l1 : l2
    // 返回起始结点
    return head.next
}
```
```
// 删除
const deleteDuplicates = function (head) {
    // 定义针
    let cur = head
    while (cur != null && cur.next != null) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return head
}
```
```
// 前驱结点 dummy
const deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head
    }
    // dummy永远指向头结点
    let dummy = new ListNode()
    dummy.next = head
    // cur
    cur = dummy
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val) {
            let val = cur.next.val
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
}
```
#### 快慢指针和多指针
反复遍历

反转和指定位置的删除

```
const removeNthFromEnd = function(head, n) {
    const dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy

    while (n !== 0) {
        fast = fast.next
        n--
    }
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
}
```
反转链表
```
const reverseList = function (head) {
    let pre = null
    let cur = head
    while (cur != null) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}
```

局部反转一个链表
```
const reverseBetween = function(head, m, n) {
    let pre = null
    let cur
    let leftHead
    let dummy = new ListNode()
    dummy.next = head
    let  p = dummy
    for (let i = 0; i < m - 1; i++) {
         p = p.next
    }
    leftHead = p
    let start = leftHead.next
    pre = start
    cur = pre.next
    for (let i = m; i < n; i++) {
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    leftHead.next = pre
    start.next = cur
    return dummy.next
}
```

 定位环
 ```
 const hasCycle = function(head) {
    while (head) {
        if (head.flag) {
            return true
        }
        head.flag = true
        head = head.next
    }
    return false
 }
 ```
```
const detectCycle = function(head) {
    while (head) {
        if (head.flag) {
            return head
        }
        head.flag = true
        head = head.next
    }
    return null
 }
```
