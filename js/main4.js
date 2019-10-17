console.log("加载成功");

/* 
    配置所有引入的.js文件的路径
*/
require.config({
    paths:{
        "jquery":"jquery-1.10.1.min",
        "jquery-cookie":"jquery.cookie",
        "scrolltop":"scrolltop",
        "jiazai":"jiazai",
        "banner":"banner",
        "login":"login", 
    },
    shim:{
        //设置依赖关系 先引入jquery.js 然后再隐去jquery-cookie
        "jquery-cookie":["jquery"]
    }
})

//遵从AMD规范
require(["scrolltop"],function(scrolltop){
    scrolltop.show();
    scrolltop.tinajia();
    scrolltop.shopcarsum();
/*     scrolltop.returnhtml(); */
})
require(["jiazai"],function(jiazai){
   /*  jiazai.msgajax(); */
    jiazai.listmsg();
    jiazai.list();
})
require(["banner"],function(banner){
 /*    banner.banner(); */
})
require(["login"],function(login){
    login.login();
    login.cookie();
})