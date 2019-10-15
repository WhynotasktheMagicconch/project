define(["jquery","jquery-cookie"],function(){
    
    function addshop(){
        jiajian();
         // 用事件委托给购物车添加按钮
        $(".bodyview").on("click",".carbox .carbtn",function(){
            //取出当前按钮所在商品的id
            var id= this.id;
            /* 
                本地cookie存储必须为字符串
                cookie中存储商品的id和数量
                本地存储的商品结果[{id:id,num:1},{id:id,num:2}]

                cookie 存储的键:goods 值：数据结构转换为json格式的字符串
            */
            //判断是否为第一次存储
            var first  =$.cookie("goods") === null? true:false;
            var t = parseInt($("#num").val());
            if(first){
                //是第一次存储 
                /* var t = parseInt($("#num").val());
                alert(t); */
                var arr= [{id:id,num:t}];
                $.cookie("goods",JSON.stringify(arr),{
                    expires:1
                })
            }else{
                //不是第一次存储
                //判断以前是否添加过
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var same = false;//假设没有这个id
                //数组内循环进行判断是否有这个id
                for(var i = 0; i<cookieArr.length;i++){
                    if(cookieArr[i].id === id){
                        cookieArr[i].num +=t;
                        same = true;
                        break;
                    }
                }
                //没有添加过
                if(!same){
                    var obj = {id:id,num:t};
                    cookieArr.push(obj);
                }

                //更新cookie
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:1
                })
            }
            //统计购物车商品的数量添加到购物车显示
            shopcarsum();
        })
    }
   
    function shopcarsum(){
        var cookieStr = $.cookie("goods");
        if(cookieStr){
            var cookieArr = JSON.parse(cookieStr);
            var sum = 0;
            for(var i = 0; i<cookieArr.length;i++){
                sum +=cookieArr[i].num;
            }
            $("#shopping-amount").html(sum);
        }else{
            $("#shopping-amount").html(0);
        }
        
    }
    //增加数量
        function jiajian(){
            $(".bodyview").on("click",".carbox .num_c #jia",function(){
                /* var id = this.id; */ console.log('1');
                var num = $("#num").val();
                $("#num").val(parseInt(num)+1);
               
                stopBubble();
            })
            $(".bodyview").on("click",".carbox .num_c #jian",function(){
                var num = $("#num").val();

                $("#num").val(parseInt(num)-1);
                if(parseInt(num)-1 <= 1){
                    alert("不能还小啦")
                    $("#num").val(1);
                    
                }
                stopBubble();
            })

        }
        //封装跨浏览器兼容 的阻止事件冒泡
        function stopBubble(e){
            //e 是事件对象
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
        }
    return{
        addshop:addshop,
        shopcarsum:shopcarsum,
        jiajian:jiajian

    }

})