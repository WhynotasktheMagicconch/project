define(["jquery"],function($){
    function banner(){
        var oUl = $("#bannerimg").find(".banList");
        var aLis = oUl.find("li");
        var aBtns = $("#bannerimg").find(".bannerbutton").find("li");
       
        var timer = null;//每两秒切换一张图片
        var iNow = 0;//当前展示图片的下标
    
        //给按钮添加点击，点击按钮切换图片
        aBtns.click(function(){
            iNow = $(this).index();
            tab();
        })
    
        //添加一个定时器，每隔两秒切换一张图片
        timer = setInterval(function(){
            iNow++;
            tab();
        },2000);
    
        //给图片添加移入和移出效果
    
        $("#bannerimg").mouseenter(function(){
            clearInterval(timer);
        })
        $("#bannerimg").mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            },2000);
        })
        function tab(){
            aBtns.attr("class","").eq(iNow).attr("class","activebutton");
            
            if(iNow==aBtns.size()){
                aBtns.eq(0).attr("class","activebutton")
            }
    
            oUl.animate({top:-400*iNow},500,function(){
                if(iNow == aBtns.size()){
                    oUl.css("top",0);
                    iNow = 0;
                }
            })
        }
    }
    return{
        banner:banner
    }
})



/* $(function(){
    var oUl = $("#bannerimg").find(".banList");
    var aLis = oUl.find("li");
    var aBtns = $("#bannerimg").find(".bannerbutton").find("li");
   
    var timer = null;//每两秒切换一张图片
    var iNow = 0;//当前展示图片的下标

    //给按钮添加点击，点击按钮切换图片
    aBtns.click(function(){
        iNow = $(this).index();
        tab();
    })

    //添加一个定时器，每隔两秒切换一张图片
    timer = setInterval(function(){
        iNow++;
        tab();
    },2000);

    //给图片添加移入和移出效果

    $("#bannerimg").mouseenter(function(){
        clearInterval(timer);
    })
    $("#bannerimg").mouseleave(function(){
        timer = setInterval(function(){
            iNow++;
            tab();
        },2000);
    })
    function tab(){
        aBtns.attr("class","").eq(iNow).attr("class","activebutton");
        
        if(iNow==aBtns.size()){
            aBtns.eq(0).attr("class","activebutton")
        }

        oUl.animate({top:-400*iNow},500,function(){
            if(iNow == aBtns.size()){
                oUl.css("top",0);
                iNow = 0;
            }
        })
    }
}) */