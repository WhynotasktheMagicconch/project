define(["jquery"],function($){
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
                    }
                    $("#alert-message").html(obj.message);
                },
                error:function(msg){
                    alert(msg);
                }
            });
        })
    }
    return{
        login:login
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