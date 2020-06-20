const addAll = function() {
    console.log('进行了一次新计算');
    let result = 0
    const len = arguments.length
    for (let i = 0; i < len; i++) {
        result += arguments[i]
    }
    return result
}

const proxyAddAll = (function() {
    const resultCache = {}
    return function() {
        const args = Array.prototype.join.call(arguments, ',')

        if (args in resultCache) {
            return resultCache
        }
        return resultCache[args] = addAll(...arguments)
    }
})()

console.log(proxyAddAll(1,2,3,4,5,6))
console.log(proxyAddAll(1,2,3,4,5,6))

const EventBus = new Vue()
export default EventBus

import bus from 'EventBus的文件路径'
Vue.prototype.bus= bus

this.bus.$on('someEvent', func)

this.bus.$emit('someEvent', params)

class EventEmitter {
    constructor() {
        this.handlers = {}
    }

    on(eventName, cb) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = []
        }

        this.handlers[eventName].push(cb)
    }

    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach((callback) => {
                callback(...args)
            });
        }
    }

    off(eventName, cb) {
        const callback = this.handlers[eventName]
        const index = callback.indexOf(cb)
        if (index != -1) {
            callback.splice(index, 1)
        }
    }
    // 单次注册
    once(eventName, cb) {

    }
}

const arr = [1, 2, 3]
arr.forEach((item, index) => {
    console.log(`索引为${index}的元素是${item}`)
})

const arr = [1, 2, 3]
const aNodes = document.getElementsByTagName('a')
$.each(arr, function(index, item) {
    console.log(`数组的第${index}个元素是${item}`);
})

$.each(aNodes, function(index, aNode) {
    console.log(`DOM类数组的第${index}个元素是${aNode.innerText}`);
})

const arr = [1, 2, 3]
const len = arr.length
for (item of arr) {
    console.log(`当前元素是${item}`)
}


const arr = [1, 2, 3]
const iterator = arr[Symbol.iterator]()

iterator.next()
iterator.next()
iterator.next()

const iterator = arr[Symbol.iterator]()

let now = { done: false}

while(!now.done) {
    now = iterator.next()
    if (!now.done) {
        console.log(`现在遍历到了${now.value}`);
    }
}

function *iteratorGenerator () {
    yield '1号选手'
    yield '2号选手'
    yield '3号选手'
}

const iterator = iteratorGenerator()

iterator.next()
iterator.next()
iterator.next()


function iteratorGenerator(list) {
    var idx = 0
    var len = list.length
    return {
        next: function() {
            var done = idx >= len
            var value = !done ? list[idx++] : undefined
            return {
                done: done,
                value: value
            }
        }
    }
}


function iteratorGenerator(list) {
    var idx = 0;
    var len = list.length
    return {
        next: function() {
            var done = idx >= len
            var value = !done ? list[idx++] : undefined
            return {
                done: done,
                value: value
            }
        }
    }
}