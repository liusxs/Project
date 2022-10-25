var banner=document.querySelector('#banner');
var bannerImg=document.querySelectorAll('#banner img');
var index=0;
var t=setInterval(function(){
    if(index==3){
        index=0;
    }else{
        index++;
    }
    for(var n=0;n<=3;n++){
        bannerImg[n].className='';
    }
    bannerImg[index].className='show';
    for(var n=0;n<=3;n++){
        bannerlist[n].className='';
    }
    bannerlist[index].className='active';
}, 2000)