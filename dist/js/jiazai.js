
    define(["jquery"],function($){
        function msgajax(){
            $.ajax({
                type:"get",
                url:"../listmessage.json",
                success:function(arr){
                    for(var i=0; i< arr.length; i++){
                        //创建节点插入节点
                        var node = $(`
                        <li hover="on">
                        <div class="ui-figure figure-product">
                        <div class="pic"> <a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" target="_blank"><img src="${arr[i].img}" alt="幽灵ZT250-S（国四版）" title="幽灵ZT250-S（国四版）"></a> </div>
                        <div class="cont">
                        <h3 class="title"> <a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" target="_blank">${arr[i].title}</a> </h3> 
                        <h3 class="title_m"><a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" style="color:#999;" target="_blank">${arr[i].desc}</a> </h3>
                        <div class="meta"> <strong><i>￥</i>${arr[i].price}</strong></div>
                        <div class="info"> ${arr[i].salenumb} </div>
                        </div>
                        </div>
                        </li>
                        `);
                        node.appendTo(".product-list")
                    }
                },
                error:function(msg){
                    alert(msg)
                }
            })
            $.ajax({
                type:"get",
                url:"../navajax.json",
                success:function(arr){
                    for(var i=0; i< arr.length;i++){
                        //创建节点
                        var node = $(`
                        <li><a href="${arr[i].href}" target="_blank" class="yMenua">${arr[i].msg}</a></li>
                        `);
                        node.appendTo(".yMenuIndex")
                    }
        
                },
                error:function(msg){
                    alert(msg)
                }
            })
            $.ajax({
                type:"get",
                url:"../leftnav.json",
                success:function(arr){
                    for(var i=0; i<arr.length;i++){
                        //创建节点
                        var node = $(`
                            <li class="">
                                <a href="${arr[i].href}" target="_blank">${arr[i].msg}</a>
                                <span></span>
                            </li>
                        `);
                        node.appendTo(".pullDownList")
    
                    }
                },
                error:function(msg){
                    alert(msg)
                }
            })
            $.ajax({
                type:"get",
                url:"../listnav.json",
                success:function(arr){
                    //循环创建节点
                    for(var i=0; i<arr.length;i++){
                      var node =$(`
                    <li><a href="${arr[i].href}">${arr[i].msg}</a></li>
                    `);
                    node.appendTo(".ui-tabs")  
                    }
                },
                error:function(msg){
                    alert(msg)
                }
            })
            $.ajax({
                type:"get",
                url:"../banner.json",
                success:function(arr){
                    //循环创建节点
                    for(var i=0; i<arr.length;i++){
                        var node = $(`
                        <li class=""><a href="${arr[i].href}" target="_blank"><img src="${arr[i].src}"></a></li>
                        `);
                        node.appendTo(".banList");
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        }

        return {
            msgajax:msgajax
        }
    })
    

/* $(function(){
        $.ajax({
            type:"get",
            url:"../listmessage.json",
            success:function(arr){
                for(var i=0; i< arr.length; i++){
                    //创建节点插入节点
                    var node = $(`
                    <li hover="on">
                    <div class="ui-figure figure-product">
                    <div class="pic"> <a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" target="_blank"><img src="${arr[i].img}" alt="幽灵ZT250-S（国四版）" title="幽灵ZT250-S（国四版）"></a> </div>
                    <div class="cont">
                    <h3 class="title"> <a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" target="_blank">${arr[i].title}</a> </h3> 
                    <h3 class="title_m"><a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" style="color:#999;" target="_blank">${arr[i].desc}</a> </h3>
                    <div class="meta"> <strong><i>￥</i>${arr[i].price}</strong></div>
                    <div class="info"> ${arr[i].salenumb} </div>
                    </div>
                    </div>
                    </li>
                    `);
                    node.appendTo(".product-list")
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
        $.ajax({
            type:"get",
            url:"../navajax.json",
            success:function(arr){
                for(var i=0; i< arr.length;i++){
                    //创建节点
                    var node = $(`
                    <li><a href="${arr[i].href}" target="_blank" class="yMenua">${arr[i].msg}</a></li>
                    `);
                    node.appendTo(".yMenuIndex")
                }
    
            },
            error:function(msg){
                alert(msg)
            }
        })
        $.ajax({
            type:"get",
            url:"../leftnav.json",
            success:function(arr){
                for(var i=0; i<arr.length;i++){
                    //创建节点
                    var node = $(`
                        <li class="">
                            <a href="${arr[i].href}" target="_blank">${arr[i].msg}</a>
                            <span></span>
                        </li>
                    `);
                    node.appendTo(".pullDownList")

                }
            },
            error:function(msg){
                alert(msg)
            }
        })
        $.ajax({
            type:"get",
            url:"../listnav.json",
            success:function(arr){
                //循环创建节点
                for(var i=0; i<arr.length;i++){
                  var node =$(`
                <li><a href="${arr[i].href}">${arr[i].msg}</a></li>
                `);
                node.appendTo(".ui-tabs")  
                }
            },
            error:function(msg){
                alert(msg)
            }
        })
        $.ajax({
            type:"get",
            url:"../banner.json",
            success:function(arr){
                //循环创建节点
                for(var i=0; i<arr.length;i++){
                    var node = $(`
                    <li class=""><a href="${arr[i].href}" target="_blank"><img src="${arr[i].src}"></a></li>
                    `);
                    node.appendTo(".banList");
                }
            },
            error:function(msg){
                alert(msg);
            }
        })

}) */