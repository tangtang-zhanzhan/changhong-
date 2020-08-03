<?php
header("content-type:text/html;charset=utf8");
$link=mysqli_connect("localhost","root","","changhong");
mysqli_set_charset($link,'utf8');
$phone=$_POST["phone"];
$pas=$_POST["pass"];
$sqli="select * from user where phone=$phone";
$ress=mysqli_query($link,$sqli);
if(mysqli_fetch_row($ress)){
    echo json_encode(array(
        "code"=>400,
        "mag"=>"账号已存在，请重新注册"
    ));
}else{
    $sql="insert into user (phone,pas) values ($phone,'$pas')";
    $res=mysqli_query($link,$sql);
    if($res){
        echo json_encode(array(
            "cod"=>200,
            "mage"=>"注册成功，正在跳转登录页面"
        ));
    }else{
        echo json_encode(array(
            "cod"=>400,
            "mage"=>"注册失败，请稍后再试"
        ));
    }
}

?>