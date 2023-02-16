import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false, //用于控制菜单的展开与收起
        tabsList: [
            // 面包屑数据
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home',
            }
        ],
        menu:[]
    },
    mutations: {
        // 修改菜单的展开与收起
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val){
            // 判断添加的数据是否为首页
            if(val.name !== 'home'){
                const index =  state.tabsList.findIndex(item => item.name === val.name)
                // 如果不存在
                if(index === -1){
                    state.tabsList.push(val)
                }
            }
        },
        //删除指定的tag数据
        closeTag(state ,item){
            // console.log(item,'item')
            const index = state.tabsList.findIndex(val => val.name === item.name)
            //splice(索引，删除的个数)
            state.tabsList.splice(index,1)
        },
        //设置menu的数据
        setMenu(state,val){
            state.menu = val
            localStorage.setItem("menu", JSON.stringify(val))
        },
        //动态注册
        addMenu(state,router){
            //判断缓存中是否有数据
            if(!Cookie.get('menu')) return
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu =menu
            //组装动态路由的数据
            const menuArray = []
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            // console.log(menuArray,'menuArray')
        }
    }
}