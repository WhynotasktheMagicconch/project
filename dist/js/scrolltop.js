/* 
AMD规范
*/
    define(["jquery"],function($){
        function show(){
            $(".egotop-btn").click(function(){
                $(window).scrollTop(0);
                return false;//防止事件冒泡
            })
            $("#menu").find("span").hover(function(){ 
                $("#menu").stop(true);
                $("#menu").find("span").stop(true);
                $("#menu").animate({
                    right:0
                },500,"linear")
                $("#menu").find("span").animate({
                    right:150
                },500,"linear")
            })
            $("#menu").mouseout(function () { 
                $("#menu").animate({
                    right:-150
                },2000,"linear")
                $("#menu").find("span").animate({
                    right:0
                },2000,"linear")
            }); 
        }

        return {
            show:show
        }
    })
/* $(function(){
    
    $(".egotop-btn").click(function(){
        $(window).scrollTop(0);
        return false;//防止事件冒泡
    })
    $("#menu").find("span").hover(function(){ 
        $("#menu").stop(true);
        $("#menu").find("span").stop(true);
        $("#menu").animate({
            right:0
        },500,"linear")
        $("#menu").find("span").animate({
            right:150
        },500,"linear")
    })
    $("#menu").mouseout(function () { 
        $("#menu").animate({
            right:-150
        },1000,"linear")
        $("#menu").find("span").animate({
            right:0
        },1000,"linear")
    });

}) */