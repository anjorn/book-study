### 字符串

#### 反转字符串

```
const str = 'juejin'
const res = str.split('').reverse().join('')
console.log(res)
```

#### 判断一个字符串是否是回文字符串
1. 正反都一样
```
function isPalidrome(str) {
    const res = str.split('').reverse().join('')
    return str === res
}
```
2. 对称性（从中间位置劈开，两个字串在内容上是完全对称的）
```
function isPalidrome(str) {
    const len = str.length
    for (let i = 0; i < len / 2; i++) {
        if(str[i] !== str[len-i-1]) {
            return false
        }
    }
    return true
}
```

#### 回文字符串的衍生问题
对称性和双指针

```
const validPalindrome = function(s) {
    const len = s.length;
    let i = 0, j = len - 1
    while (i < j && s[i] === s[j]) {
        i++;
        j--;
    }
    if (isPalindrome(i+1, j)) {
        return true
    }
    if (isPalindrome(i, j-1)) {
        return true
    }
    function isPalindrome (st, ed) {
        while (st < ed) {
            if (s[st] !== s[ed]) {
                return false
            }
            st++
            ed--
        }
        return true
    }
    return false
}
```

### 字符串匹配问题 - 正则表达式
```
const WordDictionary = function () {
    this.words = new Map()
}
WordDictionary.prototype.addWord = function (word) {
    if (!this.words.has(word.length)) {
        this.words.set(word.length, [word])
    } else {
        this.words.get(word.length).push(word)
        this.words.set(word.length, this.words.get(word.length))
    }
}
WordDictionary.prototype.search = function (word) {
    let arr = this.words.get(word.length);
    if (!arr) {
        return false
    }
    if (!word.includes('.')) {
        return arr.includes(word)
    }
    // 否则是正则
    const reg = new RegExp(word)
    return arr.some(item => {
        return reg.test(item)
    })
}
```

### 正则表达式
1. \s 空字符 * 代表可以出现0次或多次
2. () 分组
3. [] 中的内容是或者的关系 
4. .是任意字符
5. + 代表出现1次或多次
6. ？零次或一次
7. 从字符串中 提取链接地址
```
/<a(?:[^>]*)+href="(.*)"(?:[^>]*)*>/
```
8. 精准匹配/^ddd$/