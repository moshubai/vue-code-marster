export default {
    render(h) {
        // 标记当前router-view深度
        this.$vnode.data.routerView = true

        let depth = 0
        let parent = this.$parent
        // console.log(parent,'parent');

        while (parent) {
            const vnodeData = parent.$vnode && parent.$vnode.data
            if (vnodeData) {
                if (vnodeData.routerView) {
                    // 说明当前parent是一个router-view
                    depth++
                }
            }
            parent = parent.$parent
        }


        // const { roterMap, current } = this.$router
        // console.log(roterMap, current);
        // const Component = roterMap[current].component || null


        let Component = null
        // this.current当前路径，并筛选出来。返回当前的component
        const route = this.$router.matched[depth]
        // console.log('====================================');
        console.log(this.$router.matched,route,depth);
        // console.log('====================================');

        // const route = this.$router.$options.routes.find(
        //     (route) => route.path === this.$router.current
        // );
        if (route) {
            Component = route.component
        }
        return h(Component);
    }

}