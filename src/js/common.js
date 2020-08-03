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
// 顶头头部移入移出事件
(function enter1(){
    $(".list li:nth-child(6)").mouseenter(function(){
        $(".list .tal1").css("display","block")
    })
    $(".list li:nth-child(7)").mouseenter(function(){
        $(".list .gzh").css("display","block")
    })
    $(".list li:nth-child(8)").mouseenter(function(){
        $(".list .gw").css("display","block")
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
    // input搜索事件
    $(".sou input").focus(function(){
        $(".in input").val("")
        $(".in .lie").css("display","block")
        $(".lie p").mouseenter(function(){
            $(this).css("color","#f12020")
        })
        $(".lie p").mouseleave(function(){
            $(this).css("color","#000")
        })
    })
    $("input[type=text]").blur(function(){
        $(".in input").val("Q6k")
        $(".in .lie").css("display","none")
    })
})();
// 推荐模块移入事件
(function enter2(){
    $(".heat .lis").on("mouseenter","li",function(event){
            var $tag=$(event.target)
            var text1=$tag.text()
            if(text1=="电视"){
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
                        })
                    }
                    })
            }
            if(text1=="空调"){
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
                        })
                    }
                })
            }
            if(text1=="冰箱"){
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
                        })
                    }
                })
            }
            if(text1=="洗衣机"){
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
                        })
                    }
                })
            }
            if(text1=="生活家电"){
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
                        })
                    }
                })
            }
            if(text1=="服务"){
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
                        })
                    }
                })
            }
        })
    $(".heat").on("mouseleave","li",function(){
            $(".reCom").css("display","none")
            $(".reCom ul").html("")
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
