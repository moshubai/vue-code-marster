
// 实现 defineReactive 
function defineReactive(ojb, key, val) {
    Object.defineProperty(ojb, key, {
        get() {
            console.log('get', val);
            return val
        },

        set(v) {
            if (v !== val) {
                console.log('set', val)
                val = v
            }
        }
    })

}

function observe(ojb) {
    Object.keys(ojb).forEach((key) => {
        defineReactive(ojb, key, ojb[key])
    })
}

// vue 中有vue.set(ojb , key , val) 方法来实现 未定义在date里key动态添加。
function set(ojb, key, val) {
    defineReactive(ojb, key, val)
}



let ojb = {
    foo: 'food',
    bar: 'nodale'
}

observe(ojb)

ojb.foo = '1111111111111'
ojb.se ='5'