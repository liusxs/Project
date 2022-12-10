$(document).ready(function() {
    // 定义变量
    var star_ok = "★";
    var star_no = "☆";

    // 移入事件
    $(".star>li").on("mouseenter", function() {
        $(this).prevAll().text(star_ok); 	// 前面全部元素设置为选上
        $(this).text(star_ok); 				// 当前的元素设置为悬选上
        $(this).nextAll().text(star_no); 	// 后面所有元素设置为没选
    });

    // 移出事件
    $(".star>li").on("mouseleave", function() {
        // 所有的元素设置为没选上
        $(".star>li").text(star_no);
        // 重新设置所选上的元素
        $(".star>li.start-current").text(star_ok).prevAll().text(star_ok);
    });

    // 点击事件
    $(".star>li").on("click", function() {
        $(this).addClass("start-current").siblings().removeClass("start-current"); // 为当前的五角星设置标记					
    });
});