<?php
    header("Content-type:text/html;charset=utf-8");
    //统一返回格式
    $responseData = array("code" =>0,"message" => "");
    //取出传回来的的数据
    $username = $_POST["username"];
    $password = $_POST["password"];

    //链接数据库
    $link = mysql_connect("localhost","root","123456");

    //2.判断是否链接成功
    if(!$link){
        echo "链接失败";
        $responseData['code'] = 1;
        $responseData['message'] = "数据库连接失败";
        echo json_encode($responseData);
        exit;//终止后续所有代码
    }
    //3.设置字符集
    mysql_set_charset("utf8");

    //4.选择数据库
    mysql_select_db("project");

    //5.发送sql语句，验证用户名是否重名
    $sql1 = "SELECT * FROM users WHERE username ='{$username}'";

    //6.发送sql语句
    $res = mysql_query($sql1);
    //7.取出第一行数据
    $row = mysql_fetch_assoc($res);
    if($row){
        //用户重名
        $responseData['code'] = 2;
        $responseData['message'] = "用户名已经存在";
        echo json_encode($responseData);
        exit;
    }
    //准备将sql数据插入到数据库中
    $sql2 = "INSERT INTO users(username,password) VALUES('{$username}','{$password}')";
    
    //返回布尔值
    $res = mysql_query($sql2);
    if(!$res){
        $responseData['code'] = 3;
        $responseData['message'] = "注册失败";
        echo json_encode($responseData);
    }else{
        $responseData['message'] = "注册成功";
        echo json_encode($responseData);
    }

    mysql_close($link);


?>