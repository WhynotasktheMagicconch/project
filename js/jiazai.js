
    define(["jquery","jquery-cookie"],function($){
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
                        <div class="pic"> <a href="${arr[i].herf}?id=${arr[i].id}" title="幽灵ZT250-S（国四版）" target="_blank"><img id="returnhtml" src="${arr[i].img}" alt="幽灵ZT250-S（国四版）" title="幽灵ZT250-S（国四版）"></a> </div>
                        <div class="cont">
                        <h3 class="title"> <a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" target="_blank">${arr[i].h1}</a> </h3> 
                        <h3 class="title_m"><a href="${arr[i].herf}" title="幽灵ZT250-S（国四版）" style="color:#999;" target="_blank">${arr[i].strong}</a> </h3>
                        <div class="meta"> <strong><i>￥</i>${arr[i].price}</strong></div>
                        <div class="info"> ${arr[i].numb}
                        <button id="${arr[i].id}" class="carbtn">加入购物车</button>
                        </div>
                        
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
            $.ajax({
                type:"get",
                url:"../hidnav.json",
                success:function(arr){
                    for(var i=0; i<arr.length;i++){
                        var node = $(`
                        <div class="yMenuListConin" style="display:none;">
                        <div class="yMenuLCinList">
                            <h3><img src="${arr[i].src}"><a href="${arr[i].href}">${arr[i].msg}</a><a href="" class="yListMore">更多 &gt;</a></h3>
                            <p>
                                <a href="#">弯梁车</a>
                                <a href="#">弯梁车</a>
                                <a href="#">踏板车</a>
                                <a href="#">太子车</a>
                                <a href="#">越野车</a>
                                <a href="#">跑车</a>
                                <a href="#">公务车</a>
                                <a href="#">外贸车</a>
                                <a href="#">三轮车</a>
                                <a href="#"">四轮车</a>
                            </p>
                        </div>
                    </div>
                        `);
                        node.appendTo(".yMenuListCon")
                    }
                }
            })


        }

        //取出地址栏的数据
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r != null) {
            return decodeURI(r[2]);
            }
            return null;
            }
        function XQajax(){
            var id = getUrlParam(`id`);
            $.ajax({
                type:"get",
                url:"../listmessage.json",
                success:function(arr){
                    var node = $(`
                    <div id="product-intro">
                    <div id="name1">
                      <h1>${arr[id].h1}</h1>
                      <strong>${arr[id].strong}</strong> </div>
                    <!--name end-->
                    <div class="clearfix">
                      <ul id="summary">
                              <li id="summary-price">
                          <div class="dt">价格：</div>
                          <div class="dd" id="vipprice"> <strong class="p-price" id="new-price">${arr[id].price}</strong></div>
                        </li>
  
                         <li>
                         
                          <div class="dt"></div>
                          <div class="dd db">在线支付定金或全款由牛摩网担保</div>
                         </li>
                        <li id="summary-time">
                          <div class="dt">上架时间：</div>
                          <div class="dd"> <em>${arr[id].time}</em></div>
                        </li>
                
                        <!-- 促销-->
                        <li id="summary-grade">
                          <div class="dt">已售：</div>
                          <div class="dd">${arr[id].numb} </div>
                        </li>
                
                        <!---是否包邮-->
                        <li id="summary-grade">
                            <div class="dt" style="line-height:30px;">快递：</div>
                            <div class="PackageMail">
                                    <div class="PackageMail selected"><a href="javascript:;">${arr[id].type}</a><i></i></div>
                            </div>
                        </li>
                
                        <!-- 商品评分-->
                
                      </ul>
                      <!--summary end-->
                
                        <!--start:卖家信息-->
                                <div id="brand-bar-pop">        <dl id="seller"> <dd><a target="_blank" href="http://www.newmotor.com.cn/dealer/13737/" title="进入卖家店铺">${arr[id].name}</a></dd>        </dl>        <dl id="evaluate" style="display:block;">          <dt>商家好评率：</dt>          <dd><em class="evaluate-grade"><strong>${arr[id].jmt}</strong></em></dd>        </dl>        <dl class="hide" id="online-service" style="display: block;">          <dt style="margin-bottom: 10px;">在线客服：</dt>          <dd><div> 		  <a target="_blank" id="j-im" class="djd-im" href="http://wpa.qq.com/msgrd?v=3&amp;uin=939148240&amp;site=qq&amp;menu=yes" title="佛山市南海金磊大贸店 联系客服"><img title="点击这里给我发消息" alt="点击这里给我发消息" src="http://www.newmotor.com.cn/images/shop/button_qq.gif" border="0"></a>		  </div></dd>        </dl>        <dl id="pop-company">          <dt>用&nbsp;户&nbsp;名：</dt>          <dd>${arr[id].username}</dd>        </dl>        <dl id="pop-address">          <dt>所&nbsp;在&nbsp;地：</dt>          <dd>${arr[id].place}</dd>        </dl>        <dl class="hide" id="hotline" style="display: block;">          <dt>联系电话：</dt>          <dd>${arr[id].phone}</dd>        </dl>        <div id="enter-shop"> <a target="_blank" href="${arr[id].shophref}">进入卖家店铺</a> </div>      </div>
                        <!--end:卖家信息-->
                
                      <ul id="choose">
                        <div class="carbox" style="position:relative"><input type="hidden" name="action" value="Add"><div class="num_c">数量：<span href="" id="jian"><img style="vertical-align:middle;" src="http://www.newmotor.com.cn/images/shop/ico_close.gif" border="0"></span> <input type="text"name="Q_1533" id="num" size="4" value="1" style="text-align:center;vertical-align:middle;"> <span href="" id="jia"><img style="vertical-align:middle;" src="http://www.newmotor.com.cn/images/shop/ico_open.gif" border="0"></span> 1<label style="color:#999">(库存<label id="stock"></label><font id="unit">1111</font>)</label></div><div id="buyselect"></div><div><input type="hidden" name="AttributeCart" id="AttributeCart" value=""><input type="hidden" name="ID" id="ID" value="1533"><a href="shopping.html"><input type="button"  id="buybtn"></a> <input name="istype" type="hidden" id="istype" value="0"><input type="button" style="position:relative;" id="${arr[id].id}" class="carbtn"></div></div>     
                      </ul>
                      <!--choose end-->
                      
                      <span class="clr"></span> </div>
                      
                <div id="preview">
                <div id="spec-n1" class="jqzoom">
                <img id="photolist" alt="KAWASAKI川崎H2 新款200匹马力怪兽  摩托" title="KAWASAKI川崎H2 新款200匹马力怪兽  摩托" src="${arr[id].img}">
                <div id="mark"></div>
                </div>
                
                <!-- 放大镜 -->
                <div id="big">
                  <img src="${arr[id].img}" alt="">
                </div>
                
                <div style="top: 0px; width: 350px; height: 50px; text-align: center; line-height: 50px;display:none;">
                <a href="http://www.newmotor.com.cn/User/User_Favorite.shtml?Action=Add&amp;ChannelID=120&amp;InfoID=1533" target="_blank"><img src="http://www.newmotor.com.cn/shop/images/buttons_coll.jpg">
                </a></div>
                
                </div>
                    <!--preview end-->
                  </div>
                  <!--product-intro end-->
                    `);
                    node.appendTo(".bodyview");
                    
                },
                error:function(msg){
                    alert(msg);
                }
            })
        }

        /* 购物车 */
        function shopingcar(){
            $(".tdbg").empty();
            $.ajax({
                type:"get",
                url:"../listmessage.json",
                success:function(arr){
                    //取出cookie中的数据
                    var cookieStr =  $.cookie("goods");
/*                     alert(cookieStr); */
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);
                        //找出购物车中的商品数据
                        var newArr = [];
                        for(var i =0;i<arr.length;i++){
                            for(var j=0;j<cookieArr.length;j++){
                                if(arr[i].id == cookieArr[j].id){
                                    //增加购物车的数量
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                }
                            }
                        }
                        /* alert(JSON.stringify(newArr)) */
                        //加载购物车页面
                        $(".tdbg").empty();
                        for(var i=0;i<newArr.length;i++){
                            var node = $(`
                            <tr class="tdbg" id="${newArr[i].id}" style="background:#fbf8f6;" height="100" align="center"> 
                            <td><input class="boxx" type="checkbox" value="" name="checkboxBtn" id=""></td>
                            <td width="400" valign="middle" align="left"><a href="http://mall.newmotor.com.cn/motor/1533.html" target="_blank"><img src="${newArr[i].img}" alt="KAWASAKI川崎H2 新款200匹马力怪兽  摩托" style="border:1px solid #ccc;padding:2px;margin:0 4px 0 5px;" width="50" height="50" align="left"></a><a href="http://mall.newmotor.com.cn/motor/1533.html" target="_blank">&nbsp;${newArr[i].h1}</a><br>&nbsp;</td>
                            <td><button id="jian">-</button> <input style="vertical-align:middle;text-align:center;" type="Text" name="Q_1119296" id="Q_1119296" value="${newArr[i].num}" size="4" class="textbox"> <button id="jia">+</button> </td>
                              <td><font style="color:#ff6600;">￥0.00</font><input type="hidden" id="dingjin1119296" value=""><input type="hidden" name="yingfuprice" id="yingfuprice1119296" value="360000"></td>
                              <td>￥<span id="price">${newArr[i].price}</span></td>
                              <td><font style="color:#ff6600;font-weight:bold;">￥<span name="myzongdingjin" id="myzongdingjin1119296">0.00</span></font></td>
                              <td><input type="hidden" id="hidWholesalePrice1119296" value="0"><input type="hidden" id="hidWholesaleNum1119296" value="0"><font style="font-size:14px;font-weight:bold">￥<span name="totalmyprice" id="myprice">${newArr[i].price *newArr[i].num}</span></font><span id="hidmyprice1119296" style="display:none">360000</span></td>
                              <td><span id="delete">删除</span> </td>
                          </tr>
                            
                            `);
                            node.insertBefore(".tdbg1");
                        }
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        }
        function listmsg(){
            $.ajax({
                type:"get",
                url:"../listmsg.json",
                success:function(arr){
                    for(var i = 0 ;i<arr.length;i++){
                        var node = $(`
                                <div overfour="false" class="prop-attrs ">  
                            <div class="attr">	
                                <div class="a-key">${arr[i].title}</div>	
                            <div class="a-values">	  
                                <div class="v-fold">		
                                    <ul class="f-list">		  
                                        
                                        </ul>	  
                                    </div>	
                                </div>  
                            </div>
                        </div>
                        `);
                node.appendTo(".attrs");
                var data = arr[i].a;
                
                for(var j = 0; j <data.length;j++){
                    var node1 = $(`
                    <li><a href="#">${data[j]}</a></li>
                    `);
                    node1.appendTo(node.find(".f-list"));
                }
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        }
        function list(){
            $.ajax({
                type:"get",
                url:"../listmessage.json",
                success:function(arr){ 
                    for(var i=0;i<arr.length;i++){
                        var node = $(`
                        <li class="liclass">
                        <div class="lh-wrap">
               
                         <div class="layout-ie8">
                           <div class="p-img"> <a title="新大洲本田【预付款】CBF190R国四电喷摩托车跨骑车运动休闲摩旅" target="_blank" href="#"> <img class="err-product" src="${arr[i].img}"> </a>
                             <div shop_id="5445" tpl="1"></div>
                           </div>
                           </div>
               
                           <div class="p-name"> <a title="新大洲本田【预付款】CBF190R国四电喷摩托车跨骑车运动休闲摩旅" target="_blank" href="#">${arr[i].h1}</a> </div>
                           <div class="p-price">
                           
                           <span style="float:left">价格:&nbsp￥;<font style="font-size:14px;font-weight:bold;color:#333;">${arr[i].price}</font></span>
                           <span style="float:right">定金:&nbsp;<strong>￥3000</strong>
                         </span>
                           
                           <span id="p5445"></span> </div>
                         <div style="color:#999;padding:0 5px;">
                         <span style="float:left;"><img src="http://www.newmotor.com.cn/images/shop/cart-shop1.png" style="vertical-align:middle;width:15px;height:15px;">&nbsp;&nbsp;已售&nbsp;433&nbsp;辆</span><span style="float:right;">上海</span>
                         </div>
                         </div>
                       </li>
                        
                        `);
                        node.appendTo(".list-h");
                    }
                },
                error:function(msg){
                    alert(msg);
                }
            })
        }
        return {
            msgajax:msgajax,
            XQajax:XQajax,
            shopingcar:shopingcar,
            listmsg:listmsg,
            list:list
        }
    })
    
