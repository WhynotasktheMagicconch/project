define(["jquery","jquery-cookie"],function(){
    function zengjian(){
            //商品id
            $("#shoppingtable").on("click",".tdbg button",function(){
                //取商品的id
                var id = $(this).closest("tr").attr("id");
                //取出相应的数据
                var cookieArr =JSON.parse( $.cookie("goods"));
                for(var i = 0; i<cookieArr.length;i++){
                    if( id == cookieArr[i].id){ 
                        //拿出需要修改的数据
                        var goodsObj = cookieArr[i];
                        break; 
                    }
                }
                if(this.innerHTML == "+"){
                    goodsObj.num++;
                }else{
                    if(goodsObj.num == 1){
                        alert("数量已经最小了");
                    }else{
                        goodsObj.num--;
                    }
                }
                var onezongjia = goodsObj.num*$(this).parent().nextAll("td").has("#price").find("#price").text();
                $(this).siblings(".textbox").val(goodsObj.num);
                $(this).parent().nextAll("td").has("#myprice").find("#myprice").html(onezongjia);
                //重新存入cookie
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:1
                })
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
    // 删除商品 不仅要删除节点，还得把cookie删除
    function  shanchu(){
        $("#shoppingtable").on("click","#delete",function(){
            //获取商品ID
            var id = $(this).closest("tr").remove().attr("id");

            var cookieArr = JSON.parse($.cookie("goods"));
            for(var i = 0; i<cookieArr.length;i++){
                if(id == cookieArr[i].id){
                    cookieArr.splice(i,1);
                    break;
                }
            }
            //存储到cookie中的时候判断是否为空
            if(cookieArr.length){
                $.cookie("goods",JSON.stringify(cookieArr),{
                    expires:1
                })
            }else{
                $.cookie("goods",null);
            }
            shopcarsum();
        })
        
    }
    function jisuan(){
            showTotal();
        $("#shoppingtable").on("click",".tdbg .boxx",function(){
            //选择多选框后重新计算
            showTotal();
        })
    }
    function showTotal(){
        var total=0;
        //1.获取所有被勾选的复选框！循环遍历
        $("#shoppingtable").find(".boxx").each(function(){
            var isChecked = $(this).prop("checked");
            //如果被选中
            if(isChecked==true){
               var id = $(this).closest("tr").attr("id");
               /* alert(id); */
               //通过id找到单品总价，获得总价
               var text = $("#"+id).find("#myprice").text();
               /* alert(text); */
               //累加计算
               total += Number(text);
              /*  alert(total);  */   
            }
        })
        //5.显示
        $("#totalprice").html(total);
        $("#totalyingfuprice").html(total);
    }
    
    
    
    
    
    return {
        zengjian:zengjian,
        shanchu:shanchu,
        jisuan:jisuan,
        showTotal:showTotal
    }

})
