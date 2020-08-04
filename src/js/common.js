// 判断是否登录
function queRen(){
    var htp=location.href
    // 确认cookie是否存在
    var pho=$.cookie("phone")
    if(pho){
        $(".but").html(pho.slice(0,5))
        $(".tex").html("退出")
        $(".nh").html(pho.slice(0,5))
    }else{
        alert("请先登录")
        location.href=`../html/denglu.html?${htp}`
    }
}
queRen();
    var ls=JSON.parse(localStorage.getItem("shop"))
    if(ls){
        var lsnum=0
        ls.forEach(item=>{
            var itnum=parseInt(item.num)
            lsnum+=itnum
        })
        $(".list li:nth-child(8) span").html(lsnum)
    }
function ra(){
    var lsn=0
    var lsp=0
    var ls=JSON.parse(localStorage.getItem("shop"))
    $(".sp ul").html("")
        ls.forEach(item=>{
        var str=`
        <li class="${item.id}">
            <h3>${item.name}${item.title}</h3>
            <div class="pcs">
                单价<span>${item.price}</span>元   
                <p>x<span>${item.num}</span></p>
                <p class="a">删除</p>
            </div>
        </li>
        `
        $(".sp ul").append(str)
        var inm=parseInt(item.num)
        var pci=parseInt(item.price)*inm
        lsn+=inm
        lsp+=pci
    })
    $(".sp").css("display","block")
    $(".hj .xx").html(`<p>${lsn}件商品</p>
                    <p>总价: <b>￥</b><span>${lsp}</span></p>`)
    }
// 顶头头部移入移出事件
(function enter1(){
    $(".list li:nth-child(6)").mouseenter(function(){
        $(".list .tal1").css("display","block")
    })
    $(".list li:nth-child(7)").mouseenter(function(){
        $(".list .gzh").css("display","block")
    })
    $(".list li:nth-child(8)").mouseenter(function(){
        if(!ls){
            $(".list .gw").css("display","block")
        }else{
            ra()
        }
    })
    $(".list li:nth-child(6)").mouseleave(function(){
        $(".list .tal1").css("display","none")
    })
    $(".list li:nth-child(7)").mouseleave(function(){
        $(".list .gzh").css("display","none")
    })
    $(".list li:nth-child(8)").mouseleave(function(){
            $(".list .gw").css("display","none")
    })
    $(".list li:nth-child(8) .sho").mouseenter(function(){
        $(".list li:nth-child(8) .sp").css("display","block")
    })
    $(".list li:nth-child(8) .sp").mouseleave(function(){
        $(".list li:nth-child(8) .sp").css("display","none")
    })
    // input搜索事件
    $(".sou input").focus(function(){
        $(".in input").val("")
        $(".in .lie").css("display","block")
        $(".lie p").hover(function(){
            $(this).css("color","#f12020")
        },function(){
            $(this).css("color","#000")
        })
        $(".lie p").click(function(){
            console.log($(this).attr("date-title"))
        })
    })
})();
// 推荐模块移入事件
(function enter2(){
    var isEnter=true
    $(".heat .lis").on("mouseenter","a",function(event){
            var $tag=$(event.target)
            var text1=$tag.text()
            if(isEnter){ 
            if(text1=="电视"){
                isEnter=false
                $(".reCom").css("display","block")
                $(".reCom ul").html("")
                var $li1=("<li>热门推荐</li>")
                $(".reCom ul").append($li1)
                $.ajax({
                    type:'get',
                    url:"../json/shopCHiQ.json",
                    success:function(res){
                        var arr=res.CHiQ.watch.list.slice(0,4)
                        var sle="shopCHiQ.CHiQ.watch"
                        arr.forEach(item=>{
                        var str=""
                        var $li=$(`<li date-id='${item.id}' title="${sle}"></li>`)
                        str+=`
                        <a href="javascript:;">
                        <img src="${item.img[0]}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <p>￥<span>${item.price}</span></p>
                        `
                        $li.html(str) 
                        $(".reCom ul").append($li)
                        $(".reCom").stop().animate({height:"200px"},1000)
                        })
                        isEnter=true
                    }
                    })
            }else  if(text1=="空调"){
                isEnter=false
                $(".reCom").css("display","block")
                $(".reCom ul").html("")
                var $li1=("<li>热门推荐</li>")
                $(".reCom ul").append($li1)
                $.ajax({
                    type:'get',
                    url:"../json/shopCHiQ.json",
                    success:function(res){
                        var arr=res.CHiQ.air.list.slice(0,4)
                        var sle="shopCHiQ.CHiQ.air"
                        arr.forEach(item=>{
                        var str=""
                        var $li=$(`<li date-id='${item.id}' title="${sle}"></li>`)
                        str+=`
                        <a href="javascript:;">
                        <img src="${item.img[0]}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <p>￥<span>${item.price}</span></p>
                        `
                        $li.html(str) 
                        $(".reCom ul").append($li)
                        $(".reCom").stop().animate({height:"200px"},1000)
                        })
                        isEnter=true
                    }
                })
            }else if(text1=="冰箱"){
                isEnter=false
                $(".reCom").css("display","block")
                $(".reCom ul").html("")
                var $li1=("<li>热门推荐</li>")
                $(".reCom ul").append($li1)
                $.ajax({
                    type:'get',
                    url:"../json/shopWash.json",
                    success:function(res){
                        var arr=res.condWash.geCond.list.slice(0,4)
                        var sle="shopWash.condWash.geCond"
                        arr.forEach(item=>{
                        var str=""
                        var $li=$(`<li date-id='${item.id}' title="${sle}"></li>`)
                        str+=`
                        <a href="javascript:;">
                        <img src="${item.img[0]}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <p>￥<span>${item.price}</span></p>
                        `
                        $li.html(str) 
                        $(".reCom ul").append($li)
                        $(".reCom").stop().animate({height:"200px"},1000)
                        })
                        isEnter=true
                    }
                })
            }else if(text1=="洗衣机"){
                isEnter=false
                $(".reCom").css("display","block")
                $(".reCom ul").html("")
                var $li1=("<li>热门推荐</li>")
                $(".reCom ul").append($li1)
                $.ajax({
                    type:'get',
                    url:"../json/shopWash.json",
                    success:function(res){
                        var arr=res.condWash.xyjCond.list.slice(0,4)
                        var sle="shopWash.condWash.xyjCond"
                        arr.forEach(item=>{
                        var str=""
                        var $li=$(`<li date-id='${item.id}' title="${sle}"></li>`)
                        str+=`
                        <a href="javascript:;">
                        <img src="${item.img[0]}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <p>￥<span>${item.price}</span></p>
                        `
                        $li.html(str) 
                        $(".reCom ul").append($li)
                        $(".reCom").stop().animate({height:"200px"},1000)
                        })
                        isEnter=true
                    }
                })
            }else if(text1=="生活家电"){
                isEnter=false
                $(".reCom").css("display","block")
                $(".reCom ul").html("")
                var $li1=("<li>热门推荐</li>")
                $(".reCom ul").append($li1)
                $.ajax({
                    type:'get',
                    url:"../json/shopWash.json",
                    success:function(res){
                        var arr=res.condJd.guiCond.list.slice(0,4)
                        var sle="shopWash.condJd.guiCond"
                        arr.forEach(item=>{
                        var str=""
                        var $li=$(`<li date-id='${item.id}' title="${sle}"></li>`)
                        str+=`
                        <a href="javascript:;">
                        <img src="${item.img[0]}" alt="">
                        </a>
                        <div class="title">${item.name}</div>
                        <p>￥<span>${item.price}</span></p>
                        `
                        $li.html(str) 
                        $(".reCom ul").append($li)
                        $(".reCom").stop().animate({height:"200px"},1000)
                        })
                        isEnter=true
                    }
                })
            }else if(text1=="服务"){
                isEnter=false
                $(".reCom").css("display","block")
                $(".reCom ul").html("")
                var $li1=("<li>服务支持</li>")
                $(".reCom ul").append($li1)
                $.ajax({
                    type:'get',
                    url:"../json/shopWash.json",
                    success:function(res){
                        var arr=res.fwcond.img
                        arr.forEach(item=>{
                        var str=""
                        var $li=$("<li></li>")
                        str+=`
                        <a href="javascript:;">
                        <img src="${item}" alt="">
                        </a>
                        `
                        $li.html(str) 
                        $(".reCom ul").append($li)
                        $(".reCom").stop().animate({height:"200px"},1000)
                        })
                        isEnter=true
                    }
                })
            }
            }
        })
    $(".heat").on("mouseleave","a",function(){
            $(".reCom").stop().animate({height:0},1000,()=>{
                $(".reCom ul").html("")
                isEnter=true
            })
            
    })
})();
// 登录
if($(".but").text()=="登录"){
    $(".but").click(function(){
    location.href="./denglu.html"
})
}
// 注册
if($(".tex").text()=="注册"){
    $(".tex").click(function(){
    location.href="./zhuce.html"
    })
}else{
    $(".tex").click(function(){
        $.cookie('phone',"" ,{expires: 7, path: '/' })
        $(".but").html("登录")
        $(".tex").html("注册")
        $(".nh").html("你好请登录")
    })
}
// 购物车删除
$(document).on("click",function(e){
    var tag=$(e.target)
    if(tag.hasClass("a")){
        var id=tag.parent().parent().attr("class")
        var ls=JSON.parse(localStorage.getItem("shop"))
        ls.forEach((item,index)=>{
            if(item.id==id){
                ls.splice(index,1)
            }
        })
        localStorage.setItem("shop",JSON.stringify(ls))
        ra()
    }
})
