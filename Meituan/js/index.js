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