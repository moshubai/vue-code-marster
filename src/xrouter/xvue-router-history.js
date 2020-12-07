// 声明组件内的Vue  此为下位的this指向
let Vue;
class VueRouter {
    constructor(options) {
        this.$options = options
        console.log(this.$options);
        // 
        // 需要响应式的current
        const initial = window.location.hash.slice(1) || "/";
        Vue.util.defineReactive(this, "current", initial);

        // 监听路由(url)变化
        window.addEventListener('popstate', (e) => {
            console.log(e, '555');
            this.onPopstate(e.state)
        })

    }
    onPopstate(to) {
        this.current = to
    }
}

VueRouter.install = function (_Vue) {
    Vue = _Vue
    // 利用全局混入延迟调用后续代码
    Vue.mixin({
        beforeCreate() {
            // 任务1：挂载$router
            // 以后每个组件都会调用该方法
            console.log(this.$options.router);
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        },

    })
    Vue.component("router-link", {
        props: {
            to: {
                type: String,
                required: true//必填
            }
        },
        render(h) {
            return h(
                "a",
                {
                    attrs: { href: this.to },
                    on: { click: this.navigate }
                },
                this.$slots.default
            )
        },
        methods: {
            navigate(e) {
                console.log(e);
                // history.pushState(state, title [, url]) 每执行一次都会增加一条历史记录，浏览器在返回时，就不会返回前一个页面了，
                // state：要设置的history.state的值，可以是任意类型的值，可根据此值进行判断执行想要的操作。
                // title：现在大多数浏览器不支持或者忽略这个参数，最好用null代替。
                // url：地址栏的值，若不需要可用空来代替。
                history.pushState(this.to, this.to, this.to)
                this.$router.onPopstate(this.to)
                e.preventDefault();
            }
        },

    })
    Vue.component("router-view", {
        render(h) {
            let Component = null
            console.log(this.$router.$options.routes, this.$router.current);
            const route = this.$router.$options.routes.find(
                (route) => route.path === this.$router.current
            )
            console.log(route);
            if (route) {
                Component = route.component;
            }
            return h(Component)
        },

    })
}

export default VueRouter