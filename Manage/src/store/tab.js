export default{
    state:{
        isCollapse:false //用于控制菜单的展开与收起
    },
    mutations:{
        // 修改菜单的展开与收起
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}