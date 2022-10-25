// 返回顶部js代码
// function pageScroll(){    
//     //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）    
//     window.scrollBy(0,-100);    
//     //延时递归调用，模拟滚动向上效果    
//     scrolldelay = setTimeout('pageScroll()',5);    
//     //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值    
//     var sTop=document.documentElement.scrollTop+document.body.scrollTop;    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）    
//     if(sTop==0) 
//     clearTimeout(scrolldelay);
// }
// 获取元素
var banner=document.querySelector('#banner-left');
var bannerImg=document.querySelectorAll('#banner-left img');
var bannerlist=document.querySelectorAll('.bannerNav li');
// 创建变量
var index=0;
//  (1.鼠标不在轮播图区域的时候 轮播图正常播放)
var t=setInterval(function(){
    if(index==2){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=2;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=2;n++){
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
        if(index==2){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=2;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=2;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
    },2000)
})
var bannerLeft=document.querySelector('#bannerLeft');
var bannerRight=document.querySelector('#bannerRight');
bannerLeft.addEventListener('click',function(){
    if(index==0){
        index=2;
    }else{
        index--;
    }
    for(var n=0;n<=2;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=2;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
})
bannerRight.addEventListener('click',function(){
    if(index==2){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=2;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=2;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
})
// 鼠标移入左下方导航（小圆点）切换到对应的图片
for(var n=0;n<=2;n++){
    bannerlist[n].index=n;
    bannerlist[n].addEventListener('mouseenter',function(){
        for(var n=0;n<=2;n++){
            bannerImg[n].className='';
        }
        index=this.index;
        for(var n=0;n<=2;n++){
            bannerlist[n].className='';
        }
        bannerImg[index].className='show';
        bannerlist[index].className='active';
    })
}

// 获取元素
var scan = document.querySelector('.scan');
var scan_img = document.querySelector('.scan_img');

scan.onclick = function(){
    if(scan_img.style.display == 'none'){
        scan_img.style.display = 'block';
    }else{
        scan_img.style.display = 'none';
    }
}