// 侧边栏的移入移出事件
function enter3(){
    $(".cdl .navLe").on("mouseenter","li",function(event){
        var tag=$(event.target)
        if(tag.text()=="启客系列"){
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
    $(".heat .navLe").mouseleave(function(){
        $(".ulList").css("display","none")
    })
}
enter3();
