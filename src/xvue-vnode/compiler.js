// 编译器
// 递归遍历dom树
// 判断节点类型，如果是文本，则判断是否是插值绑定
// 如果是元素，则遍历其属性判断是否是指令或是事件，然后递归子元素

class Compile {
    constructor(el, vm) {
        this.$vm = vm

        this.$el = document.querySelector(el)
        this.compile(this.$el)
    }
    compile(el) {
        el.childNodes.forEach((node) => {
            if (node.nodeType === 1) {
                // console.log('编译元素', node.nodeName);
                this.compileElement(node)
                // 递归
                // console.log(node);
                if (node.childNodes.length > 0) {
                    this.compile(node)
                }
            } else if (this.isInter(node)) {
                // 插值绑定文本
                // console.log("编译文本", node.textContent);
                this.compileText(node)
            }
        })
    }
    isInter(node) {
        return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }

    // update : 给传入的node做初始化并创建watcher负责其更新
    undate(node, exp, dir) {
        const fn = this[dir + 'Updater']
        fn && fn(node, this.$vm[exp])

        // 创建watcher实例
        new Watcher(this.$vm, exp, function (val) {
            fn && fn(node, val)
        })
    }


    // 插值文本编译{{}}
    compileText(node) {
        this.undate(node, RegExp.$1, 'text')
        // console.log(RegExp.$1, this.$vm);
        // node.textContent = this.$vm[RegExp.$1]

    }


    // 编译元素
    compileElement(node) {

        const nodeAttrs = node.attributes
        // console.log(node.attributes, Array.from(nodeAttrs));
        Array.from(nodeAttrs).forEach(attr => {
            // v-xx
            // console.log(attr);
            const attrName = attr.name // v-text
            const exp = attr.value  //counter
            // console.log(attr.value);
            // v-modal=""
            if (this.isDirective(attrName)) {
                const dir = attrName.substring(2)
                this[dir] && this[dir](node, exp)
            }
            // @click=""
            if (this.isEvent(attrName)) {
                // console.log(attrName);
                const dir = attrName.substring(1)
                this.eventHandler(node, exp, dir)
            }
        })
    }
    isDirective(attrName) {
        // v- 开头
        return attrName.startsWith('v-')
    }
    isEvent(attrName) {
        return attrName.indexOf('@') === 0
    }
    eventHandler(node, exp, dir) {

        const fn = this.$vm.$options.methods && this.$vm.$options.methods[exp]

        // 节点监听事件，方法
        node.addEventListener(dir, fn.bind(this.$vm))
    }

    // v-text
    text(node, exp) {
        // node.textContent = this.$vm[exp]
        this.undate(node, exp, 'text')
    }
    textUpdater(node, val) {
        // node.textContent = this.$vm[RegExp.$1]
        node.textContent = val
    }

    // v-html
    html(node, exp) {
        // node.innerHTML = this.$vm[exp]
        this.undate(node, exp, 'html')
    }
    htmlUpdater(node, val) {
        node.innerHTML = val
    }

    // v-modal
    modal(node, exp) {

        // update 方法只完成赋值和更新
        this.undate(node, exp, 'modal')
        // 事件监听
        node.addEventListener('input', e => {
            this.$vm[exp] = e.target.value
        })

    }
    modalUpdater(node, val) {
        node.value = val
    }


}