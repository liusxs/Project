$(function(){
    // 设置商品数量的上下限额
    var min_num=1;
    var max_num=10;
    $('.checkall').change(function(){
        var isChecked=$(this).prop('checked');
        $('.j-checkbox').prop('checked',isChecked)
        $('.j-checkbox').prop('checked',$(this).prop('checked'));
        $('.checkall,j-checkbox').prop('checked',$(this).prop('checked'));
        // 全选中的商品增加背景色
        if($(this).prop('checked')){
            $('.cart-item').addClass('check-cart-item')
        }else{
            $('.cart-item').removeClass('check-cart-item')
        }
        getSum();
    })
    // 被单选中的商品添加背景色
    $('.j-checkbox').click(function(){
        if($('.j-checkbox:checked').length==3){
            $('.checkall').prop('checked',true)
        }else{
            $('.checkall').prop('checked',false)
        }
        if($(this).prop('checked')){
            $(this).parent().parent('.cart-item').addClass('check-cart-item')
        }else{
            $(this).parent().parent('.cart-item').removeClass('check-cart-item')
        }
        getSum();
    })
    // 商品数量的增加与单价的增加
    $('.increment').click(function(){
        var n=$(this).siblings('.itxt').val();
        if(n<max_num){
            n++;
            $(this).siblings('.itxt').val(n);
            var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
            var sum=(p*n).toFixed(2);
            $(this).parent().parent().siblings('.p-sum').html('￥'+sum);  
            getSum();  
        }else{
            alert('商品数量已达上限!');
            return true;
        }
    })
    // 商品数量的减少与单价的减少
    $('.decrement').click(function(){
        var m=$(this).siblings('.itxt').val();
        if(m>min_num){
            m--;
            $(this).siblings('.itxt').val(m);
            var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
            var sum=(p*m).toFixed(2);
            $(this).parent().parent().siblings('.p-sum').html('￥'+sum);
            getSum();
        }else{
            alert('最少购买'+min_num+'件哦!');
            return false;
        }
    })
    // 文本框输入数值 小计随之改变 方法1
    $('.itxt').change(function(){
        var n=$(this).val();
        var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
        var sum=(p*n).toFixed(2);   
        $(this).parent().parent().siblings('.p-sum').html('￥'+sum); 
        $(this).siblings('.itxt').val(n);
        getSum();
        if(n<=min_num&&n>max_num){
            var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
            var sum=(p*n).toFixed(2);   
            $(this).parent().parent().siblings('.p-sum').html('￥'+sum); 
        }
        if(n<=min_num){
            var n=$(this).val(min_num);
            var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
            var sum=(p*n).toFixed(2); 
            $(this).parent().parent().siblings('.p-sum').html('￥'+p*min_num);   
            alert('最少购买一件哦!');
        }
        if(n>max_num){
            var n=$(this).val(max_num);
            var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
            var sum=(p*n).toFixed(2);
            $(this).parent().parent().siblings('.p-sum').html('￥'+p*max_num);
            alert('已达到商品上限!');
        }
        // $(this).parent().parent().siblings('.p-sum').html('￥'+sum);    
    })
    // 方法2
    // $('.itxt').change(function(){
    //     var n=$(this).val();
    //     var p=$(this).parent().parent().siblings('.p-price').html().substr(1);
    //     var sum=(p*n).toFixed(2);
    //     $(this).parent().parent().siblings('.p-sum').html('￥'+sum);
    // })
    // 计算商品总价值
    getSum();
    function getSum(){
        var count=0;
        var price=0;
        $('.itxt').each(function(index,element){
            count+=parseInt($(element).val());
        })
        $('.amount-sum em').text(count);
        $('.p-sum').each(function(i,ele){
            price+=parseFloat($(ele).text().substr(1));
        })
        $('.price-sum em').text('￥'+ price.toFixed(2));
    }
    // 删除商品
    $('.p-action a').click(function(){
        $(this).parent().parent('.cart-item').remove();
        getSum();
    })
    // 删除被选中的商品
    $('.remove-batch').click(function(){
        $('.j-checkbox:checked').parent().parent('.cart-item').remove();
        getSum();
    })
    // 删除所有的商品
    $('.clear-all').click(function(){
        $('.cart-item').remove();
        getSum();
    })
})