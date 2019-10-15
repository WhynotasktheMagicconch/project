define(['jquery'],function($){
     function leftshow(){
         $(".pullDownList").on("mouseenter","li",function(){
             this.style.backgroundColor="red";
             $(".yMenuListCon").css("display","block");
             $(".yMenuListConin").eq($(this).index()).show();
         })
         $(".pullDownList").on("mouseleave","li",function(){
            this.style.backgroundColor="black";
            $(".yMenuListCon").css("display","none");
            $(".yMenuListConin").eq($(this).index()).hide();
        })
        
        $(".yMenuListCon").on("mouseenter",".yMenuListConin",function(){
            $(".yMenuListCon").css("display","block");
            $(".yMenuListConin").eq($(this).index()).show();
        })
        $(".yMenuListCon").on("mouseleave",".yMenuListConin",function(){
            $(".yMenuListCon").css("display","none");
            $(".yMenuListConin").eq($(this).index()).hide();
        })
     }
    return{
        leftshow:leftshow
    } 
})


/* $(function(){
    var aBtns = $(".pullDownList").find("li");
    var aDivs = $(".yMenuListCon").find(".yMenuListConin");
    
    aBtns.hover(function(){
        //先取消按钮的样式
        aBtns.hover(function(){
            $(".yMenuListCon").css("display","block");
            aBtns.attr("class","");
            $(this).attr("class","hoveractive");
            aDivs.eq($(this).index()).fadeIn();

        },function(){
            aDivs.eq($(this).index()).fadeOut();
            aBtns.attr("class","");
            $(".yMenuListCon").css("display","none");
        });
    })
   

}) */