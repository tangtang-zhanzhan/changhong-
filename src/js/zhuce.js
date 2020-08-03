function Tab(){
    var codeStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var str=''
    for(var i=0;i<4;i++){
        var num=Math.floor(Math.random()*62)
        str+=codeStr.charAt(num)
    }
    $("form .yz").text(str)
}
// 验证码更新
Tab()
// 手机号码判断
function phone1(){
    $("input[name='phone']").bind('input propertychange', function() {
    $("form .phone").html('')
    var phone=parseInt($("input[name='phone']").val()) 
    var regPhone=/^1[3|5|7|8|][0-9]{9}$/
    if(!phone){
        $("form .phone").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请输入手机号码')
        $("form .rt1").html('')
    }else{
        if(regPhone.test(phone)){
            $("form .rt1").html('<img class=" lf" src="../img/b2b/signed-right-icon.png" alt="">')
            $("form .phone").html('')
        }else{
            $("form .phone").html('<img src="../img/b2b/signed-error-icon.png" alt="">  不是正确的手机号码')
            $("form .rt1").html('')
        }
    }
})
}
phone1()
// 密码判断
function pas(){
    $("input[name='pass']").bind('input propertychange', function() {
    $("form .pas").html('')
    var pass=$("input[name='pass']").val()
    var regPass=/^(?=.*[a-z])(?=.*\d)[\s\S]{8,16}$/i
    console.log( pass,pass.length)
    if(!pass){
        $("form .pas").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请输入密码')
        $("section form #pas").css("color","#f12020")
    }else{
        if(regPass.test(pass)){
            $("form .rt2").html('<img class=" lf" src="../img/b2b/signed-right-icon.png" alt="">')
            $("section form .pas").html('长度在8~16之间，必须包含字母和数字')
            $("section form #pas").css("color","#333")
        }else{
            $("section form .pas").html('<img src="../img/b2b/signed-error-icon.png" alt="">  长度在8~16之间，必须包含字母和数字')
            $("section form #pas").css("color","#f12020")
        }
    }
})
}
pas()
// 确认密码
function repas(){
    $("form .pas1").change(function() {
    $("section form .rePas").html('')
    var pass=$("input[name='pass']").val()
    var pass1=$("form .pas1").val()
    if(!pass1){
        $("section form .rePas").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请确认密码')
    }else{
        $("section form .rePas").html('')
        if(pass==pass1){
        $("section form .rePas").html('')
        $("form .rt3").html('<img class=" lf" src="../img/b2b/signed-right-icon.png" alt="">')
        }else{
            $("section form .rePas").html('<img src="../img/b2b/signed-error-icon.png" alt="">  两次密码不一致')
        }
    }
    
})
}
repas()
// 验证码更新
$("form .tab").click(function(){
    Tab()
})
// 验证码判断
function yzm(){
    var str=$("form .yz").text()
$("form .tyz").bind('input propertychange', function() {
    $("form .tph").html('')
    var tyz=$("form .tyz").val()
        if(tyz.length==0){
            $("form .tph").html('<img src="../img/b2b/signed-error-icon.png" alt="">验证码不能为空')
        }else{
            if(tyz.length==4){
                $("section form .tph").html('')
                if(tyz===str){
                    $("section form .tph").html('')
                    $("form .rt4").html('<img class=" lf" src="../img/b2b/signed-right-icon.png" alt="">')
                }else{
                    $("section form .tph").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 验证码不正确')
                }
            }else{
                $("section form .tph").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 验证码只能为4位数字')
            }
        }
})
}
yzm()
// 注册
function zc(){
    $("form button").click(function(){
    var phone=$("input[name='phone']").val()
    var pass=$("input[name='pass']").val()
    var pass1=$("form .pas1").val()
    var tyz=$("form .tyz").val()
    var cek=document.querySelector("form .tk .cek")
    if(cek.checked){
        if(phone&&pass&&pass1&&tyz){
            $.ajax({
                type:"post",
                url:'../api/zhuce.php',
                data:{phone,pass},
                success:function(res){
                    var res=JSON.parse(res)
                    if(res.code==400){
                        alert(res.mag)
                        location.replace("../html/zhuce.html")
                    }else{
                        if(res.cod==200){
                            alert(res.mage)
                            location.href="../html/denglu.html"
                        }else{
                            alert(res.mage)
                            location.replace("../html/zhuce.html")
                        }
                    }
                }
            })
        }else if(phone){
            $("form .phone").html('')
        }else if(pass){
            $("form .pas").html('')
            $("section form #pas").css("color","#f12020")
        }else if(pass1){
            $("section form .rePas").html('')
        }else if(tyz){
            $("form .tph").html('')
        }else{
            $("form .phone").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请输入手机号码')
            $("form .pas").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请输入密码')
            $("section form .rePas").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请确认密码')
            $("form .tph").html('<img src="../img/b2b/signed-error-icon.png" alt="">验证码不能为空')
            $("section form #pas").css("color","#f12020")
        }
    }else{
        $("form .cek1").html('<img src="../img/b2b/signed-error-icon.png" alt=""> 请阅读并接受 版权声明 和 隐私保护 条款')
    }
})
}
zc()