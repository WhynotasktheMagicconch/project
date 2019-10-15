/* 
AMD规范
*/
    define(["jquery","jquery-cookie"],function($){
        function show(){
           
            $(".bdshare-slide-button-box").mouseenter(function(){
                $(".bdshare-slide-button-box").css({width:226})
                $(".bdshare-slide-list-box").css({
                    width:226,
                    display:block
                }).show();
                // stopBubble();
            })
            $(".bdshare-slide-button-box").mouseleave(function(){
                $(".bdshare-slide-button-box").css({width:0});
                $(".bdshare-slide-list-box").css({width:0,display:none}).hide();

                // stopBubble();
            })
           /*  $("bdshare-slide-list-box").mouseenter(function(){
                $(".bdshare-slide-button-box").css('display','block')
                $(".bdshare-slide-button-box").animate({
                    width:226
                },1000,"linear");
                $(".bdshare-slide-list-box").animate({
                    width:226,
                    "display":"block"
                },1000,"linear");
                // stopBubble();
            })
            $(".bdshare-slide-list-box").mouseleave(function(){
                $(".bdshare-slide-button-box").animate({
                    width:0
                },1000,"linear");
                $(".bdshare-slide-list-box").animate({
                    width:0,
                    "display":"block"
                },1000,"linear");
                // stopBubble();
            }) */






             $(".egotop-btn").click(function(){
                $(window).scrollTop(0);
                return false;//防止事件冒泡
            })
        }
        //封装跨浏览器兼容 的阻止事件冒泡
        /* function stopBubble(e){
            //e 是事件对象
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
        } */
        function tinajia(){
            $(".product-list").on("click",".carbtn",function(){
                //取出当前商品的id
                var id = this.id;
                //判断是否是第一次存储
                var first = $.cookie("goods") == null? true:false;
                if(first){
                    var arr = [{id:id,num:1}];
                    $.cookie("goods",JSON.stringify(arr),{
                        expries:1
                    })
                }else{
                    //不是第一次存储
                    //判断这个商品以前是否存储过
                    var cookieStr = $.cookie("goods");
                    var cookieArr = JSON.parse(cookieStr);
                    //假设没存储过
                    var same = false; 
                    //循环遍历判断
                    for(var i = 0;i<cookieArr.length;i++){
                        if(cookieArr[i].id == id){
                            cookieArr[i].num++;
                            same = true;
                            break;
                        }
                    }
                    //判断没有添加过
                    if(!same){
                        var obj = {id:id,num:1}
                        cookieArr.push(obj);
                    }
                    //更新cookie
                    $.cookie("goods",JSON.stringify(cookieArr),{
                        expries:1
                    })
                }
                shopcarsum();
            })
            
        }
        //统计数量
        function shopcarsum(){
            var cookieStr = $.cookie("goods");
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                var sum = 0;
                for(var i= 0;i<cookieArr.length;i++){
                    sum +=cookieArr[i].num;
                }
                $("#shopping-amount").html(sum);
            }else{
                $("#shopping-amount").html(0);
            }
        }
        /* function returnhtml(){
            $(".product-list").on("click",".pic #returnhtml",function(){
                //取出当前商品的id
                var id = this.id;
                var arr = [{id:id}]
                $.cookie("returntype",JSON.stringify(arr))
            })
        } */
        return {
            show:show,
            tinajia:tinajia,
            shopcarsum:shopcarsum,
/*             returnhtml:returnhtml */
        }
    })
