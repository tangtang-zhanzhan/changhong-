// 清空模块内容
function clear(ele){
    ele.css("display","none")
    ele.html("")
}
// banner侧边栏的移入移出事件
(function enter3(){
    $(".banner .navLe").on("mouseenter","li",function(event){
        var tag=$(event.target)
        if(tag.text()=="启客系列"){
            console.log(111)
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopCHiQ.json",
                success:function(res){
                    var arr1=res.CHiQ
                    var str1=''
                    for(var key in arr1){
                        var arr_s1=[]
                        var sel=`shopCHiQ.CHiQ.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>
                        <div class="ulList_x clearfix">
                            <ul>`
                            var arr_s=arr1[key].list
                            arr_s.forEach(item=>{
                                arr_s1.push(item.type)
                            })
                            var arr2=Array.from(new Set(arr_s1))
                            arr2.forEach(etm=>{
                                str1+=`<li>${etm}</li>`
                            })
                        str1+= `</ul>
                        </div>
                        `
                    }
                    $(".ulList").html(str1)
                }
           })
        }
        if(tag.text()=="平板电视"){
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopWatch.json",
                success:function(res){
                    var arr1=res.condWatch
                    var str1=''
                    for(var key in arr1){
                        var sel=`shopWatch.condWatch.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>`
                    }
                    $(".ulList").html(str1)
                }
            })
        }
        if(tag.text()=="空调产品"){
            $(".ulList").css("display","block")
            $.ajax({
                 type:"get",
                 url:"../json/shopWash.json",
                 success:function(res){
                     var arr1=res.condAir
                     var str1=''
                     for(var key in arr1){
                         var arr_s1=[]
                         var sel=`shopWash.condAir.${key}`
                         str1+=`
                         <div class="ulList_s clearfix jumpL" date-title="${sel}">
                             <img src="${arr1[key].idImg}" alt="">
                             ${arr1[key].name}
                         </div>
                         <div class="ulList_x clearfix">
                             <ul>`
                             var arr_s=arr1[key].list
                             arr_s.forEach(item=>{
                                 arr_s1.push(item.type)
                             })
                             var arr2=Array.from(new Set(arr_s1))
                             arr2.forEach(etm=>{
                                 str1+=`<li>${etm}</li>`
                             })
                         str1+= `</ul>
                         </div>
                         `
                     }
                     $(".ulList").html(str1)
                 }
            })
        }
        if(tag.text()=="冰洗产品"){
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopWash.json",
                success:function(res){
                var arr1=res.condWash
                    var str1=''
                    for(var key in arr1){
                        var arr_s1=[]
                        var sel=`shopWash.condWash.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>
                        <div class="ulList_x clearfix">
                            <ul>`
                            var arr_s=arr1[key].list
                            arr_s.forEach(item=>{
                                arr_s1.push(item.type)
                            })
                            var arr2=Array.from(new Set(arr_s1))
                            arr2.forEach(etm=>{
                                str1+=`<li>${etm}</li>`
                            })
                        str1+= `</ul>
                        </div>
                        `
                    }
                    $(".ulList").html(str1)
                }
            })
        }
        if(tag.text()=="生活家电"){
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopWash.json",
                success:function(res){
                var arr1=res.condJd
                    var str1=''
                    for(var key in arr1){
                        var arr_s1=[]
                        var sel=`shopWash.condJd.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>
                        <div class="ulList_x clearfix">
                            <ul>`
                            var arr_s=arr1[key].list
                            arr_s.forEach(item=>{
                                arr_s1.push(item.type)
                            })
                            var arr2=Array.from(new Set(arr_s1))
                            arr2.forEach(etm=>{
                                str1+=`<li>${etm}</li>`
                            })
                        str1+= `</ul>
                        </div>
                        `
                    }
                    $(".ulList").html(str1)
                }
            })
        }
        if(tag.text()=="数码影音"){
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopWash.json",
                success:function(res){
                var arr1=res.condQt.digital
                    var str1=''
                    for(var key in arr1){
                        var arr_s1=[]
                        var sel=`shopWash.condQt.digital.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>
                        <div class="ulList_x clearfix">
                            <ul>`
                            var arr_s=arr1[key].list
                            arr_s.forEach(item=>{
                                arr_s1.push(item.type)
                            })
                            var arr2=Array.from(new Set(arr_s1))
                            arr2.forEach(etm=>{
                                str1+=`<li>${etm}</li>`
                            })
                        str1+= `</ul>
                        </div>
                        `
                    }
                    $(".ulList").html(str1)
                }
            })
        }
        if(tag.text()=="智慧家庭"){
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopWash.json",
                success:function(res){
                var arr1=res.condQt.wisdom
                    var str1=''
                    for(var key in arr1){
                        var arr_s1=[]
                        var sel=`shopWash.condQt.wisdom.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>
                        <div class="ulList_x clearfix">
                            <ul>`
                            var arr_s=arr1[key].list
                            arr_s.forEach(item=>{
                                arr_s1.push(item.type)
                            })
                            var arr2=Array.from(new Set(arr_s1))
                            arr2.forEach(etm=>{
                                str1+=`<li>${etm}</li>`
                            })
                        str1+= `</ul>
                        </div>
                        `
                    }
                    $(".ulList").html(str1)
                }
            })
        }
        if(tag.text()=="功能箱包"){
            $(".ulList").css("display","block")
            $.ajax({
                type:"get",
                url:"../json/shopWash.json",
                success:function(res){
                var arr1=res.condQt.package
                    var str1=''
                    for(var key in arr1){
                        var arr_s1=[]
                        var sel=`shopWash.condQt.package.${key}`
                        str1+=`
                        <div class="ulList_s clearfix jumpL" date-title="${sel}">
                            <img src="${arr1[key].idImg}" alt="">
                            ${arr1[key].name}
                        </div>
                        <div class="ulList_x clearfix" date-title="${sel}+${arr1[key]}">
                            <ul>`
                            var arr_s=arr1[key].list
                            arr_s.forEach(item=>{
                                arr_s1.push(item.type)
                            })
                            var arr2=Array.from(new Set(arr_s1))
                            arr2.forEach(etm=>{
                                str1+=`<li>${etm}</li>`
                            })
                        str1+= `</ul>
                        </div>
                        `
                    }
                    $(".ulList").html(str1)
                }
            })
        }
    })
    $(".banner .navLe").mouseleave(function(){
        clear($(".banner .ulList"))
    })
})();
// 轮播图
(function ban(){
    // ol的点击事件
    var len=$(".banner .ben").length
    var index=0
    var lastIndex=0
    for(let i=0;i<len;i++){
        var $oli=$("<li></li>")
        $(".banner ol").append($oli)
        $(".banner ol li").eq(0).addClass("actLi")
        $oli.click(function(){
            $(".banner ol li").removeClass("actLi")
            $(this).addClass("actLi")
            lastIndex=index
            index=i
            $('.banner .ben').eq(lastIndex).fadeOut(1000,function(){
                $('.banner .ben').eq(lastIndex).css("display","none")
            })
            $('.banner .ben').eq(index).fadeIn(1000,function(){
                $('.banner .ben').eq(index).css("display","block")
            })
        })
    }
    // 定时器
    var timer=null
    function dTime(){
    timer=setInterval(()=>{
        var isMove=true
        if(isMove){
            lastIndex=index
            index<len-1?index++:index=0
            $(".banner ol li").eq(lastIndex).removeClass("actLi")
            $(".banner ol li").eq(index).addClass("actLi")
            $('.banner .ben').eq(lastIndex).fadeOut(1000,function(){
                $('.banner .ben').eq(lastIndex).css("display","none")
            })
            $('.banner .ben').eq(index).fadeIn(1000,function(){
                $('.banner .ben').eq(index).css("display","block")
            })
            isMove=false
        }
    },3000)  
    }
    dTime()
    $(".banner").mouseenter(function(){
        clearInterval(timer)
    })
    $(".banner").mouseleave(function(){
        dTime()
    })
})();
// 内容加载
(function writeZ(){
    var str2=''
    $.ajax({
        type:"get",
        url:"../json/shopWatch.json",
        success:function(res){
            var arr3=res.condWatch.k4Watch.list.slice(0,8)
            var sle="shopWatch.condWatch.k4Watch"
            arr3.forEach(item=>{
                str2+=`
                <div class="bos_i jumpD" date-title='${sle}&${item.id}'>
                    <img src="${item.img[0]}" alt="">
                    <div>${item.name}</div>
                    <span>${item.title}</span>
                    <p>￥<span>${item.price}</span></p>
                </div>
                `
            })
            $(".box2_s").append(str2)
        }
    })
    var str3=''
    $.ajax({
        type:"get",
        url:"../json/shopWash.json",
        success:function(res){
            var arr4=res.condAir.bgCond.list.slice(0,8)
            var sle="shopWash.condAir.bgCond"
            arr4.forEach(item=>{
                str3+=`
                <div class="bos_i jumpD" date-title='${sle}&${item.id}'>
                    <img src="${item.img[0]}" alt="">
                    <div>${item.name}</div>
                    <span>${item.title}</span>
                    <p>￥<span>${item.price}</span></p>
                </div>
                `
            })
            $(".box3_s").append(str3)
        }
    })
    var str4=''
    $.ajax({
        type:"get",
        url:"../json/shopWash.json",
        success:function(res){
            var arr5=res.condWash.geCond.list.slice(0,8)
            var sle="shopWash.condWash.geCond"
            arr5.forEach(item=>{
                str4+=`
                <div class="bos_i jumpD" date-title='${sle}&${item.id}'>
                    <img src="${item.img[0]}" alt="">
                    <div>${item.name}</div>
                    <span>${item.title}</span>
                    <p>￥<span>${item.price}</span></p>
                </div>
                `
            })
            $(".box4_s").append(str4)
        }
    })
    var str5=''
    $.ajax({
        type:"get",
        url:"../json/shopWash.json",
        success:function(res){
            var arr6=res.condJd.guiCond.list.slice(0,8)
            var sle="shopWash.condJd.guiCond"
            arr6.forEach(item=>{
                str5+=`
                <div class="bos_i jumpD" date-title='${sle}&${item.id}'>
                    <img src="${item.img[0]}" alt="">
                    <div>${item.name}</div>
                    <span>${item.title}</span>
                    <p>￥<span>${item.price}</span></p>
                </div>
                `
            })
            $(".box5_s").append(str5)
        }
    })
    var str6=''
    $.ajax({
        type:"get",
        url:"../json/shopWash.json",
        success:function(res){
            var arr6=res.condQt.digital.enter.list.slice(0,4)
            var sle="shopWash.condQt.digital"
            arr6.forEach(item=>{
                str6+=`
                <div class="bos_i jumpD" date-title='${sle}&${item.id}'>
                    <img src="${item.img[0]}" alt="">
                    <div>${item.name}</div>
                    <span>${item.title}</span>
                    <p>￥<span>${item.price}</span></p>
                </div>
                `
            })
            $(".box6_s").append(str6)
        }
    })
})();
// 右边滚轮事件
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
    if(scrollTop<300){
        $("section .kf").css("top",40+'px')
        $(".main .cb").css("display","none")
        $("section .kf li:last ").css("display","none")
    }
    if(scrollTop>=300){
        $(".main .cb").css("display","block")
        $("section .kf li:last ").css("display","block")
        if(!$(".main .cb li a").hasClass("actb"))
        {$(".main .cb li a").removeClass("actcb").eq(0).toggleClass("actcb")}
        
    }
    if(scrollTop>=470){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(1).toggleClass("actcb")
        }
        
    }
    if(scrollTop<470){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(0).toggleClass("actcb")
        }
        
    }
    if(scrollTop>=1200){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(2).toggleClass("actcb")}
        
    }
    if(scrollTop<1200 && scrollTop>=470){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(1).toggleClass("actcb")
        }
        
    }
    if(scrollTop>=1800){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(3).toggleClass("actcb")
        }
        
    }
    if(scrollTop<1800 && scrollTop>=1200){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(2).toggleClass("actcb")
        }
    }
    if(scrollTop>=2500){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(4).toggleClass("actcb") 
        }
        
    }
    if(scrollTop<2500 && scrollTop>=1800){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(3).toggleClass("actcb")
        }
        
    }
    if(scrollTop>=3100){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(5).toggleClass("actcb")
        }
    }
    if(scrollTop<3100 && scrollTop>=2500){
        if(!$(".main .cb li a").hasClass("actb")){
            $(".main .cb li a").removeClass("actcb").eq(4).toggleClass("actcb")
        }
    }
    if(scrollTop>3500){
        $(".main .cb").css('display',"none")
        $("section .kf").css("top",3500+'px')
    }
    $(".main .cb").css("top",scrollTop-280+'px')
    scrollTop <=100? scrollTop=40 : scrollTop= scrollTop-60
    $("section .kf").css("top",scrollTop+'px')
    $("section .kf li:last").click(function(){
        $("html,body").stop().animate({scrollTop:'0px'},1000);
    })
};
// 点击事件
$("section .cb").on("click","a",function(event){
    var tag=$(event.target)
    $("section .cb li a").removeClass("actcb")
    $(this).addClass("actb")
    if(tag.text()=="热门"){
        $('html,body').animate({scrollTop:"270px"},2000,function(){
            $("section .cb li a").removeClass("actb")
        })}
    if(tag.text()=="电视"){
        $('html,body').animate({scrollTop:"800px"},2000,function(){
            $("section .cb li a").removeClass("actb")
        })
    }
    if(tag.text()=="空调"){
        $('html,body').animate({scrollTop:"1400px"},2000,function(){
            $("section .cb li a").removeClass("actb")
        })
    }
    if(tag.text()=="冰洗"){
        $('html,body').animate({scrollTop:"2000px"},2000,function(){
            $("section .cb li a").removeClass("actb")
        })
    }
    if(tag.text()=="生活"){
        $('html,body').animate({scrollTop:"2800px"},2000,function(){
            $("section .cb li a").removeClass("actb")
        })
    }
    if(tag.text()=="周边"){
        $('html,body').animate({scrollTop:"3200px"},2000,function(){
            $("section .cb li a").removeClass("actb")
        })
    }
})
// 页面跳转
$(document).on("click",function(e){
    var tag=$(e.target)
    if(tag.hasClass("jumpL")){
        location.replace(`../html/list.html?teal=${tag.attr("date-title")}`)
    }
    console.log(tag.attr("class"))
    if(tag.hasClass("jumpD")){
        location.replace(`../html/details.html?teal=${tag.attr("date-title")}`)
    }
    if(tag.parent().hasClass("jumpD")){
        location.replace(`../html/details.html?teal=${tag.parent().attr("date-title")}`)
    }
})






