$(function(){
    $("#loginsubmit").click(function(){
        $.ajax({
            type:"post",
            url:"../php/login.php",
            data:{
                username:$("#Username").val(),
                password:$("#Password").val()
            },
            success: function(result){
                var obj = JSON.parse(result);
                if(obj.code){
                    $("#loginname_error").html(obj.message);
                }else{
                    $("#loginpwd_error").html(obj.message);
                }
                $.cookie("isLogin",$("#Username").val(),{
                    exprires:1
                });
                /* alert($.cookie("isLogin")) */
                location.href="MN.html";
            },
            error:function(msg){
                alert(msg);
            }
        })
    });
})