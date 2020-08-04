var tale=location.search.slice(1,location.search.length).split("=")[1]
var tp1=tale.split(".")[0]
var tp2=tale.split(".")[1]
var id=""
var obj=null
if(tp2.indexOf("&")!=-1){
    var tp4=tp2.split("&")[0]
    id=tp2.split("&")[1]
}else{
    var tps=tale.split(".")[2]
    var tp3=tps.split("&")[0]
    id=tps.split("&")[1]
}
// 内容加载
if(!tale){
    alert("请先选择商品")
    location.replace("../html/index.html")
}else{// 内容加载
function addDom(){
    if(tp3){
        $.ajax({
        url:`../json/${tp1}.json`,
        success(res){
            var str=``
            var str1=``
            var num=0
            $(".t_tl3").before("")
            $(".sec_con .sec_conl").html("")
            for(var key1 in res){
                if(key1==tp2){
                    var res2=res[key1]
                    for(var key2 in res2){
                        if(key2==tp3){
                            var arr=res2[key2].list
                            arr.forEach(item=>{
                                if(item.id==id){
                                    shop(item)
                                    str+=`
                                    <div class="box">
                                        <img src="${item.img[0]}" alt="">
                                        <span></span>
                                    </div>
                                    <div class="bigBox">
                                        <img src="${item.img[0]}" alt="">
                                    </div>
                                    <div class="min_shop">
                                        <img src="../img/b2b/pro-ditem-pre_03.jpg" alt="">
                                        <div class="mins">
                                        <div class="move1">
                                        `
                                        item.img.forEach(ims=>{
                                            num++
                                            str+=`<div class="min"><img src="${ims}" alt="">
                                            </div>`
                                        })
                                    str+=`
                                    </div> 
                                    </div>
                                    <img src="../img/b2b/pro-ditem-next_03.jpg" alt="">
                                    </div>
                                    `
                                    str1=`
                                    <li class="clearfix t_tl1">
                                    <h2>${item.name}${item.title}</h2>
                                    <a href="javascript:;">加入对比</a>
                                    </li>
                                    <li class="t_tl2">￥<span>${item.price}</span> </li>
                                    `
                                }
                            })
                        }
                    }
                }
            }
            $(".sec_con .sec_conl").html(str)
            $(".t_tl3").before(str1)
            $(".sec_con .min_shop .min").eq(0).addClass("acm")
            mouse()
            mousem()
            mousel()
            mouseImg()
            next(num)
        }
        })
    }else{
        $.ajax({
            url:`../json/${tp1}.json`,
            success(res){
                var str=``
                var str1=``
                var num=0
                var arshop=[]
                $(".t_tl3").before("")
                $(".sec_con .sec_conl").html("")
                for(var key1 in res){
                    if(key1==tp4){
                        var res2=res[key1]
                        for(var key2 in res2){
                            var ars=res2[key2].list
                            ars.forEach(tem=>{
                                arshop.push(tem)
                            })
                            }
                        }
                    }
                    arshop.forEach(item=>{
                        if(item.id==id){
                            shop(item)
                            str+=`
                            <div class="box">
                                <img src="${item.img[0]}" alt="">
                                <span></span>
                            </div>
                            <div class="bigBox">
                                <img src="${item.img[0]}" alt="">
                            </div>
                            <div class="min_shop">
                                <img src="../img/b2b/pro-ditem-pre_03.jpg" alt="">
                                <div class="mins">
                                <div class="move1">
                                `
                                item.img.forEach(ims=>{
                                    num++
                                    str+=`<div class="min"><img src="${ims}" alt="">
                                    </div>`
                                })
                            str+=`
                            </div> 
                            </div>
                            <img src="../img/b2b/pro-ditem-next_03.jpg" alt="">
                            </div>
                            `
                            str1=`
                            <li class="clearfix t_tl1">
                            <h2>${item.name}${item.title}</h2>
                            <a href="javascript:;">加入对比</a>
                            </li>
                            <li class="t_tl2">￥<span>${item.price}</span> </li>
                            `
                        }
                    })
                $(".sec_con .sec_conl").html(str)
                $(".t_tl3").before(str1)
                $(".sec_con .min_shop .min").eq(0).addClass("acm")
                mouse()
                mousem()
                mousel()
                mouseImg()
                next(num)
            }
            })
    }
}
addDom()
}
//放大镜
// 移入事件
function mouse(){
    $(".sec_con .box").mouseenter(function(e){
    $(".sec_con .box span").add($(".sec_con .bigBox")).css("display","block")
    var x=$(".sec_con .box span").outerWidth()
    var y=$(".sec_con .box span").outerHeight()
    var x1=$(".sec_con .box").position().left
    var y1=$(".sec_con .box").position().top
    var x3=$(".sec_con .sec_conl").position().left
    var y3=$(".sec_con .sec_conl").position().top
    var left1=e.clientX-x/2-x1-x3
    var top1=e.clientY-y/2-y1-y3
    $(".sec_con .box span").css("left",left1+"px").css("top",top1+'px')
})
}
// 移动事件
function mousem(){
$(document).mousemove(function(e){
    var x=$(".sec_con .box span").outerWidth()
    var y=$(".sec_con .box span").outerHeight()
    var x1=$(".sec_con .box").position().left
    var y1=$(".sec_con .box").position().top
    var x2=$(".sec_con .box").outerWidth()
    var y2=$(".sec_con .box").outerHeight()
    var x3=$(".sec_con .sec_conl").position().left
    var y3=$(".sec_con .sec_conl").position().top
    var left1=e.clientX-x/2-x1-x3
    var top1=e.clientY-y+y1-y3
    if(left1<=0)left1=0
    if(left1>=x2-x)left1=x2-x
    if(top1<=y1)top1=y1
    if(top1>=y2-y+y1)top1=y2-y+y1
    $(".sec_con .box span").css("left",left1+"px").css("top",top1+'px')
    $(".sec_con .bigBox img").css("left",-2*left1+"px").css("top",-2*top1+'px')
})
}
// 移出事件
function mousel(){
    $(".sec_con .box").mouseleave(function(){
    $(".sec_con .box span").add($(".sec_con .bigBox")).css("display","none")
})
}
// 切换图片事件
function mouseImg(){
    $(".sec_con .min img").mouseenter(function(){
        $(".sec_con .min").removeClass("acm")
        $(this).parent().addClass("acm")
        $(".sec_con .box img").attr("src",$(this).attr("src"))
        $(".sec_con .bigBox img").attr("src",$(this).attr("src"))
    })
}
// 获取省份
window.onload=function (){
    // 获取省份
    function ajax1(){
        // 省份
        $.ajax({
            type:"get",
            url:"../json/map.json",
            dataType:"json",
            success(res){
                var str=""
                res.forEach(item=>{
                    str+=`<span  class="show">${item.name}</span>`
                    $(".sec_conr .map_x").html(str)
                    $(".sec_conr .map_x span").click(function(){
                    var ma=$(this).text()
                    $(".sec_conr .map_c h1").html(ma+"<i></i>")
                    $(".map_t .cs li").removeClass("acp").eq(1).addClass("acp")
                    // 城市
                        $.ajax({
                            type:"get",
                            url:"../json/map.json",
                            dataType:"json",
                            success(res){
                                var str1=''
                                res.forEach(item=>{
                                    if(ma==item.name){
                                    var arr= item.city
                                    arr.forEach(attr=>{
                                        str1+=`<span  class="show">${attr.name}</span>`
                                        $(".sec_conr .map_x").html(str1)
                                        $(".sec_conr .map_x span").click(function(){
                                        var ma1=$(this).text()
                                        $(".sec_conr .map_c h1").html(ma+ma1+"<i></i>")
                                        $(".map_t .cs li").removeClass("acp").eq(2).addClass("acp")
                                            // 区域
                                                $.ajax({
                                                    type:"get",
                                                    url:"../json/map.json",
                                                    dataType:"json",
                                                    success(res){
                                                        var str2=''
                                                        res.forEach(item=>{
                                                            if(ma==item.name){
                                                            var arr= item.city
                                                            arr.forEach(attr=>{
                                                                if(ma1==attr.name){
                                                                    var arr1=attr.area
                                                                    arr1.forEach(tes=>{
                                                                        str2+=`<span>${tes}</span>`
                                                                        $(".sec_conr .map_x").html(str2)
                                                                        $(".sec_conr .map_x span").click(function(){
                                                                            var ma2=$(this).text()
                                                                            $(".sec_conr .map_c h1").html(ma+ma1+ma2+"<i></i>")
                                                                            $(".map_t").css("display",'none')
                                                                        })
                                                                    })
                                                                }
                                                            })
                                                            }
                                                        })
                                                        }
                                                    })
                                                })
                                    })
                                    }else{
                                    $(".sec_conr .map_t .cs li").click(function(){
                                    $(".sec_conr .map_c h1").html("省/市/区"+"<i></i>")
                                    $(".sec_conr .map_t").css("display","none")
                                    })
                                    }
                            })}
                    })
                })
            })
        }
        
        })
    }
    // 省市区三级联动
    function lian(){
    $(".sec_conr .t_tl3 .map_c").click(function(){
        $(".sec_conr .map_t").css("display","block")
        $(".map_t .cs li").removeClass("acp").eq(0).addClass("acp")
        ajax1()
        $(".map_t .cs li").click(function(){
            if($(this).index()!=0){
                $(".map_t .map_x").html("") 
            }else{
                ajax1()
            }
            $(".map_t .cs li").removeClass("acp")
            $(this).addClass("acp")
        })
    })
    }lian()
    $(document).on("click",function(e){
        var teg=$(e.target)
        if(teg.hasClass("show")){
            $(".t_tl3 .map_t").css("display","block")
            
        }else{
        $(".t_tl3 .map_t").css("display","none")
        }
    })
    }
// 滚动事件
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
    if(scrollTop<600){
        $("section .kf li:last").css("display","none")
    }else{
    $("section .kf li:last").css("display","block")
    $("section .kf").css("top",scrollTop+'px')
    $("section .kf li:last").click(function(){
        $("html,body").stop().animate({scrollTop:'0px'},1000);
    })
    }
}
// 左右点击切换图片
function next(num){
    // 下一页
    $(".sec_con .min_shop img:last").click(function(){
        var len=num
        var slen=$(".sec_con .min").length
        var sun=$(".sec_con .acm").index()
        sun>=len?$(".sec_con .min").removeClass("acm").eq(sun).addClass("acm"):$(".sec_con .min").removeClass("acm").eq(sun+1).addClass("acm")
        var osun=sun
        if(slen==len){
            $(".sec_con .min_shop .move1").css("left","12px")
        }else{
            if(sun!=len){
            ++sun 
            $(".sec_con .min_shop .move1").css("left",-90*(sun-osun)+"px")
            }else{
                $(".sec_con .min").removeClass("acm").eq(sun).addClass("acm")
            }
        }
    })
    // 上一页
    $(".sec_con .min_shop img:first").click(function(){
        var len=num
        var slen=$(".sec_con .min").length
        var sun=$(".sec_con .acm").index()
        sun>=len?$(".sec_con .min").removeClass("acm").eq(sun).addClass("acm"):$(".sec_con .min").removeClass("acm").eq(sun+1).addClass("acm")
        var osun=sun
        if(slen==len){
            $(".sec_con .min_shop .move1").css("left","0px")
        }else{
            if(sun!=len){
            --sun 
            $(".sec_con .min_shop .move1").css("left",-90*(sun-osun)+"px")
            }else{
                $(".sec_con .min").removeClass("acm").eq(sun).addClass("acm")
            }
        }
    })
}
// 商品详情的切换
function xq(){
    $(".sec_conx .chanpin li a").click(function(){
        $(".sec_conx .chanpin li a").removeClass("acta")
        $(this).addClass('acta')
        var index=$(this).parent().index()
        $(".scon div").removeClass("actDiv").eq(index).addClass("actDiv")
    })
}
xq()
// 添加localStorage
function shop(obj1){
    if(obj1){
    // 判断是否登录
    $(".sec_conr .t_tl4  .add").click(function(){
        queRen();
        var ls=localStorage.getItem('shop')
        // 判断localStorage是否存在
        if(ls){
        // 有localStorage
        var arr1=JSON.parse(ls)
        var a=0 
        arr1.forEach(item=>{
            if(item.id===obj1.id){
                var addNum=parseInt($(".sec_conr .num").val())
                var num=parseInt(obj1.num)
                num+=addNum
                item.num=num
                a++
                localStorage.setItem("shop",JSON.stringify(arr1))
            }
        })
        if(a==0){
            obj1.num=parseInt($(".sec_conr .num").val())
            obj1.ck=0
            arr1.push(obj1)
            localStorage.setItem("shop",JSON.stringify(arr1))
        }
        }else{
        // localStorage没有需要创建，并加入数据
        var arr=[]
        obj1.num=parseInt($(".sec_conr .num").val()) 
        obj1.ck=0
        arr.push(obj1)
        localStorage.setItem("shop",JSON.stringify(arr))
        }
    })
    }
}
// 数量操作
function sxnum(){
    // 点击数量的添加
$(".sec_conr .t_tl4  .jia").click(function(){
    var sev=parseInt($(".sec_conr .t_tl4  .jia").prev().val()) 
    sev++
    $(".sec_conr .t_tl4  .jia").prev().val(sev)
})
// 点击数量的添加
$(".sec_conr .t_tl4  .jian").click(function(){
    var sev=parseInt($(".sec_conr .t_tl4  .jian").next().val()) 
    sev<=1?sev=1:sev--
    $(".sec_conr .t_tl4  .jian").next().val(sev)
})
}
sxnum()
// 跳转购物车操作
function play(){
    $(".t_tl4 .gouM").click(function(){
        var ls=localStorage
        if(ls.length!=0){
            location.href="../html/shopCard.html"
        }else{
            alert("请先加入购物车")
            location.reload()
        }
    })
}
play()
// 头部点击事件
$(document).on("click",function(e){
    var tag=$(e.target)
    if(tag.hasClass("jumpL")&& tag.text()=="电视"){
        location.replace(`../html/list.html?teal=shopWatch.condWatch`)
    }
    if(tag.hasClass("jumpL")&& tag.text()=="空调"){
        location.replace(`../html/list.html?teal=shopWash.condAir`)
    }
    if(tag.hasClass("jumpL")&& tag.text()=="冰箱"){
        location.replace(`../html/list.html?teal=shopWash.condWash.geCond`)
    }
    if(tag.hasClass("jumpL")&& tag.text()=="洗衣机"){
        location.replace(`../html/list.html?teal=shopWash.condWash.xyjCond`)
    }
    if(tag.hasClass("jumpL")&& tag.text()=="生活家电"){
        location.replace(`../html/list.html?teal=shopWash.condJd`)
    }
    if(tag.hasClass("jumpL")){
        location.replace(`../html/list.html?teal=${tag.attr("date-title")}`)
    }
    if(tag.attr("class")=="lie" || tag.hasClass("ulList")){
        $(".heat .cdl .navLe").toggleClass("navAct")
    }else{
        $(".heat .cdl .navLe").removeClass("navAct")
    }
})