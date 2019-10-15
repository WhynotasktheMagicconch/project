$(function(){
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
   

})