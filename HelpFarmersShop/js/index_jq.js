$(function(){
    // 返回顶部平滑过度
     $("#go-to-top").click(function(){
        	//点击按钮时，返回顶部，过渡时间为0.4秒
            $("html,body").animate({scrollTop :'0'},400);
        return false;
    });

    //吸顶效果
    $(window).scroll(function(){
        var sTop = parseInt($(window).scrollTop());
        if(sTop > 300){
            $('#go-to-top').show();
             $(".two").css({
                'position':'fixed',
                'marginTop':'0px',
                'z-index':'999',
                'background-color':'#009900',
                'top':'0',
                // 'border-bottom':'2px solid #009900',
                'transition':'all 1s',
            });
            $('.two-tan').css({
                'position':'fixed',
                'width':'100%',
                'z-index':'999',
                'background-color':'#009900',
                'transition':'all 1s',
                'top':'0',
            })
        }
        else{
            $('#go-to-top').hide();
            $(".two").css({
                'position':'static',
                // 'marginTop':'10px',
                'border':'none',
                'z-index':'999',
                'margin-left': '150px',
                'background-color':'rgb(245, 244, 244)',
                'top':'0',
            });
            $('.two-tan').css({
                'position':'static',
                // 'width':'0',
                'z-index':'999',
                'background-color':'rgb(245, 244, 244)',
                'top':'0',
            })
        }
    });
});