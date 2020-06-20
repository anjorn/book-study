class OpenButton {
    onClick () {
        const modal = new Modal()
        modal.style.display = 'block'
    }
}

class Decorator {
    constructor(open_button) {
        this.open_button = open_button
    }

    onClick() {
        this.open_button.onClick()
        // 包装了一层新逻辑
        this.changeButtonStatus()
    }
    changeButtonStatus() {
        this.changeButtonText()
        this.disableButton()
    }
    disableButton() {
        const btn = document.getElementById('open')
        btn.setAttribute('disabeld', true)
    }
    changeButtonText() {
        const btn = document.getElementById('open')
        btn.innerText = '快去登录'
    }
}

const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click', function() {
    decorator.onClick()
})

// 装饰器函数 它的第一个参数是目标类
function classDecorator(target) {
    target.hasDecorator = true
    return target
}

// @classDecorator
// class Button {
//     @funcDecorator
//     onClick() {
//         console.log('我是Func的原有逻辑')
//     }
// }

// console.log('button是否被装饰了:', Buttton.hasDecorator)

// function funcDecorator (target, name, descriptor) {
//     let originalMethod = decorator.value
//     decorator.value = function () {
//         console.log('我是Func的装饰器逻辑')
//         return originalMethod.apply(this, arguments)
//     }
//     return decorator
// }

// const button = new Button()
// button.onClick()


// import React, { Component } from 'react'

// const BorderHoc = WrappedComponent => class extends Component {
//     render() {
//         return <div style={{ border: 'solid 1px red'}}>
//             <WrappedComponent />
//             </div>
//     }
// }
// export default BorderHoc


// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import action from './actions.js'

// function mapStateToProps(state) {
//     return state.app
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(action, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)


// import React, { Component } from 'react'
// import connect from './connect.js'

// @connect
// export default class App extends Component {
//     render() {
//         // App的业务逻辑
//     }
// }

export default class HttpUtils {
    // get 方法
    static get(url) {
        return new Promise((resolve, reject) => {
            // 调用fetch
            fetch(url)
            .then(response => response.jon())
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
    // post方法
    static post(url, data) {
        return new Promise((resolve, reject) => {
            // 调用fetch
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: this.changeData(data)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
    static changeData(obj) {
        var prop;
        var str = '';
        var i = 0;
        for (prop in obj) {
            if (!prop) {
                return
            }
            if (i == 0) {
                str += pro + '=' + obj[prop]
            } else {
                str += '&' + prop + '=' + obj[prop]
            }
            i++
        }
        return str
    }
}


const father = document.getElementById('father')
father.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.innerText)
})


class PreLoadImage {
    constructor (imgNode) {
        this.imgNode = imgNode
    }

    setSrc(imgUrl) {
       this.imgNode.src = imgUrl  
    }
}

class ProxyImage {
    static LOADING_URL = '*****'

    constructor(targetImage) {
        this.targetImage = targetImage
    }

    setSrc(target) {
        this.targetImage.setSrc(ProxyImage.LOADING_URL)
        const virtualImage = new Image()
        virtualImage.onload = () => {
            this.targetImage.setSrc(targetUrl)
        }
        virtualImage.src = targetUrl
    }
}

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
})

console.log(proxyAddAll(1,2,3,4,5,6))

// 发布
class Publisher {
    constructor() {
        this.observers = []
        console.log('Publisher created')
    }
    // 增加订阅者
    add(observer) {
        console.log('Publisher.add invoked')
        this.observers.push(observer)
    }
    // 移除订阅者
    remove(observer) {
        console.log('Publisher.remove invoked')
        this.observers.forEach((item, i) => {
            if (item === observer) {
                this.observers.splice(i, 1)
            }
        })
    }
    // 通知所有订阅者
    notify() {
        console.log('Publisher.notify invoked')
        this.observers.forEach((observers) => {
            observers.update(this)
        })
    }
}

class observer {
    constructor () {
        console.log('Observer created')
    }
    update() {
        console.log('Obserer.update invoked')
    }
}

class PrdPublisher extends Publisher {
    constructor() {
        super()
        this.prdState = null
        this.observers = []
        console.log('Prdublished creared')
    }
    // 该方法用于获取当前的prdState
    getState() {
        console.log('PrdPublisher.getState invoked')
        return this.prdState
    }

    // 该方法用于改变prdState的值
    setState(state) {
        console.log('PrdPublisher.setState invoked')
        //
        this.prdState = state
        // 需求文档变更，立刻通知所有开发者
        this.notify()
    }
}

class DeveloperObserver extends Observer {
    constructor() {
        super()
        this.prdState = {}
        console.log('DeveloperObserver created')
    }

    update(publisher) {
        console.log('DeveloperObserver.update invoked')
        this.prdState = publisher.getState()
        this.work()
    }

    work() {
        const prd = this.prdState
        console.log('996 begins...')
    }
}