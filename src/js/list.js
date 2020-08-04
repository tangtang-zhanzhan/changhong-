// 获取index页面携带参数
var teal=location.search
if(!teal){
    alert("请从首页选择商品种类")
    location.replace("../html/index.html")
}else{
        var tae=teal.slice(1,teal.length).split("=")[1]
        var tel=teal.slice(1,teal.length)
        var url1=tae.split(".")[0]
        var type1=tae.split(".")[1]
        var type2=tae.split(".")[2]
        var type3=tae.split(".")[3]
        var arrShop=[]
        if(type2 && !type3){
            $.ajax({
                url:`../json/${url1}.json`,
                success(res){
                    // 得到结果
                    for(var key in res){
                        // 取得与传入参数一致的结果
                        if(key==type1){
                            var obj2=res[key]
                            for(var key2 in obj2){
                                if(key2==type2){
                                    var obj=obj2[key2]
                                    $(".set_m .typ").html("<li>产品类型</li><li>全部</li>")
                                        var li=$(`<li></li>`)
                                        li.html(`${obj.name}`)
                                        $(".set_m .typ").append(li)
                                        // 获取所有数据
                                        var arr=obj.list
                                        arr.forEach(item=>{
                                            arrShop.push(item)
                                        })
                                            var obj1={
                                                pagenum:1,
                                                pagesize:8,
                                                total:arrShop.length,
                                                totalpage:Math.ceil(arrShop.length/8)
                                            }
                                            var pagin=$(".set_rf")[0]
                                            new Pagination(pagin,{
                                                pageInfo:obj1,
                                                textInfo:{
                                                    first:'首页',
                                                    prev:'◁',
                                                    next:'▷',
                                                    last:'尾页'
                                                },
                                                //回调函数
                                                change(num){
                                                    //根据返回过来的页码，去数组中查找相应的数据来显示
                                                    var data=arrShop.slice((num-1)*obj1.pagesize,num*obj1.pagesize)
                                                    var str=''//拼接当前页的所有行数据
                                                    //把截取出来的数据存放在页面中
                                                    //使用循环遍历截取数组的每个元素
                                                    $(".set_m2 .set_rc").html("")
                                                    data.forEach(item=>{
                                                        str=`
                                                        <div class="sel jumpD" date-type="${tel}&${item.id}">
                                                            <img src="${item.img[0]}" alt="">
                                                            <div>${item.name}</div>
                                                            <p>${item.title}</p>
                                                            <p class="jg ">￥ <span>${item.price}</span><span class="pj" >0人评价</span></p>
                                                            <ul>
                                                                <li><input type="checkbox"> 对比</li>
                                                                <li><img src="../img/b2b/pro-goods-starts-icon_11.jpg" alt="">收藏</li>
                                                                <li class="add_shop"><img src="../img/b2b/pro-goods-cars-icon_13.jpg" alt="">加入购物车</li>
                                                            </ul>
                                                        </div>
                                                        `
                                                        $(".set_m2 .set_rc").append(str)
                                                        })
                                                    
                                                }
                                            })
                                    var tarr=arr.slice(0,4)
                                    var strr=""
                                    tarr.forEach(titm=>{
                                    strr+=`
                                    <div class="sec jumpD"date-type='${tel}&${titm.id}' >
                                        <img src="${titm.img[0]}" alt="">
                                        <div>${titm.name}</div>
                                        <p>${titm.title}</p>
                                        <p class="jg ">￥ <span>${titm.price}</span><span class="pj" >0人评价</span></p>
                                    </div>
                                    `
                                    $(".set_rr .set_rtc").html(strr)
                                })
                                }
                            }
                        }
                    }
                }
            })
        }else if(!type2&&!type3) {
            $.ajax({
                url:`../json/${url1}.json`,
                success(res){
                    // 得到结果
                    for(var key in res){
                        // 取得与传入参数一致的结果
                        if(key==type1){
                            var obj=res[key]
                            // 遍历得到分类数据
                            for(var key1 in obj){
                                $(".set_m .typ").html("<li>产品类型</li><li>全部</li>")
                                var li=$(`<li></li>`)
                                li.html(`${obj[key1].name}`)
                                $(".set_m .typ").append(li)
                                // 获取所有数据
                                var arr=obj[key1].list
                                arr.forEach(item=>{
                                    arrShop.push(item)
                                })
                                
                            var obj1={
                                pagenum:1,
                                pagesize:8,
                                total:arrShop.length,
                                totalpage:Math.ceil(arrShop.length/8)
                            }
                            var pagin=$(".set_rf")[0]
                            new Pagination(pagin,{
                                pageInfo:obj1,
                                textInfo:{
                                    first:'首页',
                                    prev:'◁',
                                    next:'▷',
                                    last:'尾页'
                                },
                                //回调函数
                                change(num){
                                    //根据返回过来的页码，去数组中查找相应的数据来显示
                                    var data=arrShop.slice((num-1)*obj1.pagesize,num*obj1.pagesize)
                                    var str=''//拼接当前页的所有行数据
                                    //把截取出来的数据存放在页面中
                                    //使用循环遍历截取数组的每个元素
                                    $(".set_m2 .set_rc").html("")
                                    data.forEach(item=>{
                                        str=`
                                        <div class="sel jumpD" date-type='${tel}&${item.id}'>
                                            <img src="${item.img[0]}" alt="">
                                            <div>${item.name}</div>
                                            <p>${item.title}</p>
                                            <p class="jg ">￥ <span>${item.price}</span><span class="pj" >0人评价</span></p>
                                            <ul>
                                                <li><input type="checkbox"> 对比</li>
                                                <li><img src="../img/b2b/pro-goods-starts-icon_11.jpg" alt="">收藏</li>
                                                <li class="add_shop"><img src="../img/b2b/pro-goods-cars-icon_13.jpg" alt="">加入购物车</li>
                                            </ul>
                                        </div>
                                        `
                                        $(".set_m2 .set_rc").append(str)
                                        })
                                    
                                }
                            })
                                var tarr=arr.slice(0,4)
                                var strr=""
                                tarr.forEach(titm=>{
                                    strr+=`
                                    <div class="sec"date-type='${tel}${titm.id}' >
                                        <img src="${titm.img[0]}" alt="">
                                        <div>${titm.name}</div>
                                        <p>${titm.title}</p>
                                        <p class="jg ">￥ <span>${titm.price}</span><span class="pj" >0人评价</span></p>
                                    </div>
                                    `
                                    $(".set_rr .set_rtc").html(strr)
                                })
                            }
                        }
                    }
                }
            })
        }else if(type3){
            $.ajax({
                url:`../json/${url1}.json`,
                success(res){
                    // 得到结果
                    for(var key in res){
                        // 取得与传入参数一致的结果
                        if(key==type1){
                            var obj2=res[key]
                            for(var key2 in obj2){
                                if(key2==type2){
                                    var obj3=obj2[key2]
                                    for(var sel in obj3){
                                        if(sel==type3){
                                            var obj=obj3[sel]
                                            $(".set_m .typ").html("<li>产品类型</li><li>全部</li>")
                                            var li=$(`<li></li>`)
                                            li.html(`${obj.name}`)
                                            $(".set_m .typ").append(li)
                                            // 获取所有数据
                                            var arr=obj.list
                                            arr.forEach(item=>{
                                                arrShop.push(item)
                                            })
                                                var obj1={
                                                    pagenum:1,
                                                    pagesize:8,
                                                    total:arrShop.length,
                                                    totalpage:Math.ceil(arrShop.length/8)
                                                }
                                                var pagin=$(".set_rf")[0]
                                                new Pagination(pagin,{
                                                    pageInfo:obj1,
                                                    textInfo:{
                                                        first:'首页',
                                                        prev:'◁',
                                                        next:'▷',
                                                        last:'尾页'
                                                    },
                                                    //回调函数
                                                    change(num){
                                                        //根据返回过来的页码，去数组中查找相应的数据来显示
                                                        var data=arrShop.slice((num-1)*obj1.pagesize,num*obj1.pagesize)
                                                        var str=''//拼接当前页的所有行数据
                                                        //把截取出来的数据存放在页面中
                                                        //使用循环遍历截取数组的每个元素
                                                        $(".set_m2 .set_rc").html("")
                                                        data.forEach(item=>{
                                                            str=`
                                                            <div class="sel jumpD" date-type="${tel}&${item.id}">
                                                                <img src="${item.img[0]}" alt="">
                                                                <div>${item.name}</div>
                                                                <p>${item.title}</p>
                                                                <p class="jg ">￥ <span>${item.price}</span><span class="pj" >0人评价</span></p>
                                                                <ul>
                                                                    <li><input type="checkbox"> 对比</li>
                                                                    <li><img src="../img/b2b/pro-goods-starts-icon_11.jpg" alt="">收藏</li>
                                                                    <li class="add_shop"><img src="../img/b2b/pro-goods-cars-icon_13.jpg" alt="">加入购物车</li>
                                                                </ul>
                                                            </div>
                                                            `
                                                            $(".set_m2 .set_rc").append(str)
                                                            })
                                                        
                                                    }
                                                })
                                        var tarr=arr.slice(0,4)
                                        var strr=""
                                        tarr.forEach(titm=>{
                                        strr+=`
                                        <div class="sec jumpD"date-type='${tel}&${titm.id}' >
                                            <img src="${titm.img[0]}" alt="">
                                            <div>${titm.name}</div>
                                            <p>${titm.title}</p>
                                            <p class="jg ">￥ <span>${titm.price}</span><span class="pj" >0人评价</span></p>
                                        </div>
                                        `
                                        $(".set_rr .set_rtc").html(strr)
                                    })
                                        }
                                    }
                                   
                                }
                            }
                        }
                    }
                }
            })
        }
}
// 跳转事件
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
    if(tag.hasClass("jumpD")){
        location.replace(`../html/details.html?${tag.attr("date-type")}`)
    }
    if(tag.parent().hasClass("jumpD")){
        location.replace(`../html/details.html?${tag.parent().attr("date-type")}`)
    }
    if(tag.attr("class")=="lie" || tag.hasClass("ulList")){
        $(".heat .cdl .navLe").toggleClass("navAct")
    }else{
        $(".heat .cdl .navLe").removeClass("navAct")
    }
    if(tag.attr("class")=="add_shop"){
        var tale=tag.parent().parent().attr("date-type").split("=")[1]
        var tp1=tale.split(".")[0]
        var tp2=tale.split(".")[1]
    if(tp2.indexOf("&")!=-1){
        var tp4=tp2.split("&")[0]
        var id=tp2.split("&")[1]
    }else{
        var tps=tale.split(".")[2]
        var tp3=tps.split("&")[0]
        id=tps.split("&")[1]
    }
    if(tp3){
        $.ajax({
        url:`../json/${tp1}.json`,
        success(res){
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
                                }
                            })
                        }
                    }
                }
            }
        }
        })
    }else{
        $.ajax({
            url:`../json/${tp1}.json`,
            success(res){
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
                        }
                    })
            }
            })
    }
    function shop(obj1){
            // 加入购物车
            var ls=localStorage.getItem('shop')
            // 判断localStorage是否存在
            if(ls){
            // 有localStorage
            var arr1=JSON.parse(ls)
            var a=0 
            arr1.forEach(item=>{
                if(item.id===id){
                    item.num=1
                    a++
                    localStorage.setItem("shop",JSON.stringify(arr1))
                }
            })
            if(a==0){
                obj1.num=1
                obj1.ck=0
                arr1.push(obj1)
                localStorage.setItem("shop",JSON.stringify(arr1))
            }
            }else{
            // localStorage没有需要创建，并加入数据
            var arr=[]
            obj1.num=1
            obj1.ck=0
            arr.push(obj1)
            localStorage.setItem("shop",JSON.stringify(arr))
            }
    }
    location.replace("../html/shopCard.html")
    }

})