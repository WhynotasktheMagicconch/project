define(["jquery","jquery-cookie"],function($){
    function login(){
        $("#btnSwapLogin").click(function(){
            $("#login").css({"display":'block'});
        })
        $("#close").click(function(){
            $("#login").css({"display":"none"});
        })
        $("#submit").click(function(){
            $.ajax({
                type: "post",
                url: "../php/login.php",
                data:{
                    username:$("#name").val(),
                    password:$("#pass").val()
                },
                success: function(result){
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $("#alert-message").css({
                            "display":'block',
                            'color':'red'
                        });
                    }else{
                        $("#alert-message").css({
                            "display":"block",
                            'color':'green'
                        });
                        $("#login").css({"display":"none"});

                        $.cookie("isLogin","aa",{
                            exprires:1
                        });
                        window.location.reload();
                        alert($.cookie("isLogin"))
                    }
                    $("#alert-message").html(obj.message);
                },
                error:function(msg){
                    alert(msg);
                }
            });
        })
    }
    function cookie(){
        var cookieStar =$.cookie("isLogin")
        if(cookieStar){
            $(".toplogintips").html("欢迎来到牛魔商场！！您已经登录<a href='' id='esc'>[退出]</a>");
        }
        $("#esc").click(function(){
            $.cookie("isLogin",null);
            window.location.reload();
        })
        
    }
    
    return{
        login:login,
        cookie:cookie
    }
})



/* $(function(){
    $("#btnSwapLogin").click(function(){
        $("#login").css({"display":'block'});
    })
    $("#close").click(function(){
        $("#login").css({"display":"none"});
    })
    $("#submit").click(function(){
        $.ajax({
            type: "post",
            url: "../php/login.php",
            data:{
                username:$("#name").val(),
                password:$("#pass").val()
            },
            success: function(result){
                var obj = JSON.parse(result);
                if(obj.code){
                    $("#alert-message").css({
                        "display":'block',
                        'color':'red'
                    });
                }else{
                    $("#alert-message").css({
                        "display":"block",
                        'color':'green'
                    });
                }
                $("#alert-message").html(obj.message);
            },
            error:function(msg){
                alert(msg);
            }
        });
    })
    
}) */