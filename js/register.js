$(function(){
    $("#UserName").blur(function(){
        //失去焦点时获取输入框的内容
        var Ovalue = $("#UserName").val();
        if(Ovalue.length > 16 || Ovalue.length < 4){
            //判断用户名的长度
            $("#usernamemsg").html("长度应为4~16个字符");
        }else if(/\W/.test(Ovalue)){
            $("#usernamemsg").html("用户名必须由字母数字下划线组成");
        }else{
            $("#usernamemsg").html("验证通过");
            $("#usernamemsg").css("color","green");
            
        }
    })
    //判断密码格式
    $("#upwd").blur(function(){
        var newPsd = $("#upwd").val();
        if(newPsd.length < 6){
            $("#passwordmsg1").html("密码应为6个以上的字符");
        }else if(/\s/.test(newPsd)){
            $("#passwordmsg1").html("用户名不能为空格");
        }else{
            $("#passwordmsg1").html("验证通过");
        }
    })
    //给密码框添加一个键盘事件
    //$("#upwd").

    //确认密码框
    $("#RePassWord").blur(function(){
        var newPsd = $("#upwd").val();
        var cpsd = $("#RePassWord").val();
        if(cpsd === newPsd && cpsd!=null && newPsd!=null){
           $("#passwordmsg2").html("密码确认通过"); 
           $("#passwordmsg2").css({
               color:"green"
           })
        }else{
            $("#passwordmsg2").html("密码确认失败")
        }
    })
    //生成验证码
    $("#Verification").html(testCode(5));
    $("#Refresh").click(function(){
        $("#Verification").html(testCode(5));
    })

    $("#phoneVerfic").blur(function(){
        newphoneVerfic = $("#phoneVerfic").val();
        if(newphoneVerfic.toLowerCase() == $("#Verification").html().toLowerCase()){
            $("#chkcodemsg").html("验证通过");
        }else{
            $("#chkcodemsg").html("验证失败");
        }
    })

    //ajax引入
    $("#register").click(function(){
        $.ajax({
            type:"post",
            url:"../php/register.php",
            data:{
                username:$("#UserName").val(),
                password:$("#upwd").val()
            },
            success:function(result){
                var obj = JSON.parse(result)
                if(obj.code){
                    alert(obj.message);
                }else{
                    location.href = "MN.html"
                }
                alert(obj.message);
                // $("#usernamemsg").html(obj.message);
            },
            error:function(msg){
                alert(msg);
            }
        })
    })
})

function testCode(n){
    // n是位数
    var arr = [];
    for(var i = 0;i < n ; i++){
        //Math.random();随机生成0到1的小数
        var tmp = parseInt(Math.random()* 123);
        if(tmp > 0 && tmp <= 9){
            arr.push(tmp);
        }else if(tmp >= 65&& tmp <= 90 || tmp >=97 && tmp <=122){
            arr.push(String.fromCharCode(tmp));
        }else{
            //随机到不在范围内的数
            i--;
        }
    }
    return arr.join("");
}