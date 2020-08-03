var pth=location.search.slice(1,location.search.length)
// 切换验证方式
function yz1(){
    $(".pht .c_btn").click(function(){
        $(".pht .c_btn").removeClass("btn")
        $(".pht .s_btn").addClass("btn")
        $("form .c_phe").removeClass("act_phe")
        $("form .s_phe").addClass("act_phe")
    })
}
yz1()
function yz2(){
    $(".pht .s_btn").click(function(){
        $(".pht .s_btn").removeClass("btn")
        $(".pht .c_btn").addClass("btn")
        $("form .s_phe").removeClass("act_phe")
        $("form .c_phe").addClass("act_phe")
    })
}
yz2()
function toolbar(){
    var codeArr="0123456789"
    var str=''
    for(var i=0;i<4;i++){
        var num=Math.floor(Math.random()*10)
        str+=codeArr.charAt(num)
    }
    $('form .yz').html(str)
}
toolbar()
// 获取验证码
$("form .c_phe .tab").click(function(){
    toolbar()
})
// 登录
function get(){
    $("form .denL").click(function(){
        var phone=$("input[name='phone']").val()
        var pas=$("input[name='pas']").val()
        var phy=$("input[name='yz']").val()
        if(phy){
            var yz=$(".c_phe .yz").text()
            if(phy==yz){
                $.post("../api/denglu.php",{phone,pas},function(res){
                    var res=JSON.parse(res)
                    if(res.code!=400){
                        if(pth){
                            alert("登录成功即将跳转页面")
                            location.href=pth
                        }else{
                            alert("登录成功，稍后首页页面")
                            location.href="../html/index1.html"
                        }
                    }else{
                        alert(res.mag)
                        location.href='../html/zhuce.html'
                    }
                })
                $.cookie("phone",phone,{ expires: 7, path: '/' })
            }else{
                alert("验证码输入错误")
            }
        }else{
            $.post("../api/denglu.php",{phone,pas},function(res){
                var res=JSON.parse(res)
                if(res.code!=400){
                    if(res.cod==200){
                        if(pth){
                            alert("登录成功即将跳转页面")
                            location.href=pth
                        }else{
                            alert(res.mage)
                            location.href="../html/index1.html"
                        }
                        $.cookie("phone",phone,{ expires: 7, path: '/' })
                    }else{
                        alert(res.mage)
                        location.replace("../html/denglu.html")
                    }
                    
                }else{
                    alert(res.mag)
                    location.href='../html/zhuce.html'
                }
            })
        }
    })
}
get()