var banner=document.querySelector('#banner');
var bannerImg=document.querySelectorAll('#banner img');
var bannerlist=document.querySelectorAll('.bannerNav li');
var index=0;
//  (1.鼠标不在轮播图区域的时候 轮播图正常播放)
var t=setInterval(function(){
    if(index==5){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=5;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=5;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
}, 2000)
//  (2.鼠标移入轮播图区域 轮播图播放暂停)
banner.addEventListener('mouseenter',function(){
    clearInterval(t);
})
//  (3.鼠标移出轮播图区域 轮播图恢复播放)
banner.addEventListener('mouseleave',function(){
    t=setInterval(function(){
        if(index==5){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=5;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=5;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
    },2000)
})
var bannerLeft=document.querySelector('#bannerLeft');
var bannerRight=document.querySelector('#bannerRight');
bannerLeft.addEventListener('click',function(){
    if(index==0){
        index=5;
    }else{
        index--;
    }
    for(var n=0;n<=5;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=5;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
})
bannerRight.addEventListener('click',function(){
    if(index==5){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=5;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=5;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
})
// 鼠标移入左下方导航（小圆点）切换到对应的图片
for(var n=0;n<=5;n++){
    bannerlist[n].index=n;
    bannerlist[n].addEventListener('mouseenter',function(){
        for(var n=0;n<=5;n++){
            bannerImg[n].className='';
        }
        index=this.index;
        for(var n=0;n<=5;n++){
            bannerlist[n].className='';
        }
        bannerImg[index].className='show';
        bannerlist[index].className='active';
    })
}
let seniorTab = document.getElementById("senior-tab");
    // -找出所有的菜单标题
    let seniorTabLi = seniorTab.getElementsByTagName("li");
    let container = document.getElementById("tab-container");
    // 找出所有的tabList 
    let tabList = container.getElementsByClassName("tablist");

    //（遍历） 操作内容显示区域
for(let i = 0; i < seniorTabLi.length; i ++){
    seniorTabLi[i].onmouseover = function(){
        //鼠标移入li时
        //-隐藏所有的tab内容
        for(let j = 0 ; j < seniorTabLi.length; j ++){
            // hotelTabLi[j].className = "";
            tabList[j].style.display = "none";
        }
        // -显示与当前li绑定的tab内容
        // hotelTabLi[i].className = ""
        tabList[i].style.display = "block";
    }
}
