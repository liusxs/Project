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
var banner = document.querySelector('#banner-left');
var bannerImg = document.querySelectorAll('#banner-left img');
var bannerlist = document.querySelectorAll('.bannerNav li');
// 创建变量
var index = 0;
//  (1.鼠标不在轮播图区域的时候 轮播图正常播放)
var t = setInterval(function () {
    if (index == 2) {
        index = 0;
    } else {
        index++;
    }
    for (var n = 0; n <= 2; n++) {
        bannerImg[n].className = '';
    }
    bannerImg[index].className = 'show';
    for (var n = 0; n <= 2; n++) {
        bannerlist[n].className = '';
    }
    bannerlist[index].className = 'active';
}, 2000)
//  (2.鼠标移入轮播图区域 轮播图播放暂停)
banner.addEventListener('mouseenter', function () {
    clearInterval(t);
})
//  (3.鼠标移出轮播图区域 轮播图恢复播放)
banner.addEventListener('mouseleave', function () {
    t = setInterval(function () {
        if (index == 2) {
            index = 0;
        } else {
            index++;
        }
        for (var n = 0; n <= 2; n++) {
            bannerImg[n].className = '';
        }
        bannerImg[index].className = 'show';
        for (var n = 0; n <= 2; n++) {
            bannerlist[n].className = '';
        }
        bannerlist[index].className = 'active';
    }, 2000)
})
var bannerLeft = document.querySelector('#bannerLeft');
var bannerRight = document.querySelector('#bannerRight');
bannerLeft.addEventListener('click', function () {
    if (index == 0) {
        index = 2;
    } else {
        index--;
    }
    for (var n = 0; n <= 2; n++) {
        bannerImg[n].className = '';
    }
    bannerImg[index].className = 'show';
    for (var n = 0; n <= 2; n++) {
        bannerlist[n].className = '';
    }
    bannerlist[index].className = 'active';
})
bannerRight.addEventListener('click', function () {
    if (index == 2) {
        index = 0;
    } else {
        index++;
    }
    for (var n = 0; n <= 2; n++) {
        bannerImg[n].className = '';
    }
    bannerImg[index].className = 'show';
    for (var n = 0; n <= 2; n++) {
        bannerlist[n].className = '';
    }
    bannerlist[index].className = 'active';
})
// 鼠标移入左下方导航（小圆点）切换到对应的图片
for (var n = 0; n <= 2; n++) {
    bannerlist[n].index = n;
    bannerlist[n].addEventListener('mouseenter', function () {
        for (var n = 0; n <= 2; n++) {
            bannerImg[n].className = '';
        }
        index = this.index;
        for (var n = 0; n <= 2; n++) {
            bannerlist[n].className = '';
        }
        bannerImg[index].className = 'show';
        bannerlist[index].className = 'active';
    })
}

// 获取元素
var scan = document.querySelector('.scan');
var scan_img = document.querySelector('.scan_img');

scan.onclick = function () {
    if (scan_img.style.display == 'none') {
        scan_img.style.display = 'block';
    } else {
        scan_img.style.display = 'none';
    }
}

// 笔记：老式的纯JS滚动十分生硬，需要使用JQ达到更好的效果
function pageScroll() {
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0, -100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()', 100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if (sTop == 0) clearTimeout(scrolldelay);
}

window.onclick = function (ev) {
    var clickTips = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    var span = document.createElement('span');
    //随机显示文本处理 使用INNERTEXT显示 
    span.innerText = clickTips[parseInt(Math.random() * clickTips.length)];

    span.setAttribute("style", "z-index:999;position:absolute;left:" + ev.pageX + "px;top:" + (ev.pageY - 20) + "px;animation-duration:1s;" +
        "animation-fill-mode:both;animation-name:fadeOutUp;");
    document.body.appendChild(span);
    //WebKit
    if (typeof document.body.style.WebkitAnimation != "undefined") {
        span.addEventListener("webkitAnimationEnd", function () {
            document.body.removeChild(span);
        });
    } else {
        span.addEventListener("animationend", function () {
            document.body.removeChild(span);
        });
    }
}
// 获取选项卡导航菜单所有li并返回一个li列表集合
var btn_nav_li_list = document.getElementById("tab_nav").getElementsByTagName("li");
// 获取选项卡项目内容所有li并返回一个li列表集合
var btn_item_li_list = document.getElementById("tab_item").getElementsByTagName("li");

// 初始化选项卡
for (var itemi = 0; itemi < btn_item_li_list.length; itemi++) {
    btn_item_li_list[itemi].style.display = "none";
}
// 默认第一个显示
btn_item_li_list[0].style.display = "block";

// 循环遍历选项卡导航菜单li
for (var i = 0; i < btn_nav_li_list.length; i++) {
    // 为所有li设置自定义属性index，用来检索选项卡项目
    btn_nav_li_list[i].setAttribute("index", i);

    // 为所有li注册单击事件
    btn_nav_li_list[i].onclick = function () {
        // 先清除所有选项卡导航样式
        for (var navi = 0; navi < btn_nav_li_list.length; navi++) {
            btn_nav_li_list[navi].removeAttribute("class");
        }

        // 设置单击时候样式
        this.className = "btn-active";

        // 获取当前选项卡导航li的自定义属性index
        var index = this.getAttribute("index");

        // 先隐藏所有选项卡项目
        for (var itemi = 0; itemi < btn_item_li_list.length; itemi++) {
            btn_item_li_list[itemi].style.display = "none";
        }

        // 单机选项卡导航时显示
        btn_item_li_list[index].style.display = "block";
    }
}