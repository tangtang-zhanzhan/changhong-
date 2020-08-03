<?php
header("content-type:text/html;charset=utf8;");
$link=mysqli_connect("localhost","root","","changhong");
mysqli_set_charset($link,'utf8');
$phone=$_POST["phone"];
$pass=$_POST["pas"]; 
$sqli="select * from user where phone=$phone";
$ress=mysqli_query($link,$sqli);
if(mysqli_fetch_row($ress)){
    $sql="select * from user where pas='$pass'";
    $res=mysqli_query($link,$sql);
    if($res){
        echo json_encode(array(
            "cod"=>200, 
            "mage"=>"登录成功，稍后跳转首页页面"
        ));
    }else{
        echo json_encode(array(
            "cod"=>400,
            "mage"=>"账号或密码错误，请稍后再试"
        ));
    }
    
}else{
    echo json_encode(array(
        "code"=>400,
        "mag"=>"账号不存在，请先注册"
    ));
}



?>