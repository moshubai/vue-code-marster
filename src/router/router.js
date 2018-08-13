import App from '../App'

const login = r => require.ensure([], () => r(require('../components/login')), 'login')

const home = r => require.ensure([], () => r(require('../components/home')), 'home')
const selectcity = r => require.ensure([], () => r(require('../components/selectcity')), 'selectcity')

const news = r => require.ensure([], () => r(require('../components/news')), 'news')

const friends = r => require.ensure([], () => r(require('../components/friends')), 'friends')
const friendsDetails = r => require.ensure([], () => r(require('../components/friends_details')), 'friendsDetails')

const mine = r => require.ensure([], () => r(require('../components/mine')), 'mine')
const minepicture = r => require.ensure([], () => r(require('../components/minepicture')), 'minepicture')

export default [{
    path: '/', //顶层路由，对应index.html
    component: App, //二级路由。对应App.vue
    children: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/selectcity',
            component: selectcity,
            meta: {
                title: '选择城市'
            }
        },
        {
            path: '/login',
            component: login,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/news',
            component: news,
            meta: {
                auth: true,
                title: '消息'
            }
        },
        {
            path: '/friends',
            component: friends,
            meta: {
                title: '朋友圈'
            }
        },
        {
            path: '/friendsDetails',
            component: friendsDetails,
            meta: {
                title: '详情'
            }
        },
        {
            path: '/mine',
            component: mine,
            meta: {
                title: '我的'
            }
        },
        {
            path: '/minepicture',
            component: minepicture,
            meta: {
                title: '个人信息'
            }
        },

    ]
}]