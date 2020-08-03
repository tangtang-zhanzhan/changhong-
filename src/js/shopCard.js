// 添加商品
function addList(){
    $("section .cart .tr").after("")
    var arr=JSON.parse(localStorage.getItem("shop"))
    if(arr){
        arr.forEach(item=>{
        var  str=`
        <div class="ttr clearfix" date-id="${item.id}">
        <div class="xz lf"><input class="dx" type="checkbox"></div>
        <div class="shop clearfix">
            <div class="sc lf">
                <img class="reml rt" class="rt" src="../img/b2b/car-icon07.png" alt="">
                <img class="rt" src="../img/b2b/car-icon06.png" alt="">
            </div>
            <div class="nr1 lf">
                <div class="tujie">
                    <img src="${item.img[0]}" alt="">
                <p>${item.name}</p>
                </div>
                <div class="jg">
                    单价<span>${item.price} </span>元
                </div>
                <div class="f_num">
                    <p> 数量</p>
                    <div class="js">
                        <button class="jian">-</button>
                        <input class="nmm" type="text" value="${item.num}">
                        <button class="jia">+</button>
                    </div>
                </div>
            </div>
            <div class="sx1 rt">有货</div>
        </div>
    </div>
        `
        $("section .cart").append(str)
        })
    }
}
addList()
$(document).ready(function(){
    // 初始化页面
    var nmm=0
    var price=0
    var arr=JSON.parse(localStorage.getItem("shop"))
    if(arr){
        var sun= arr.every(item=>{
            return item.ck==1
        })
        if(sun){
            $(".tr .qx").prop("checked",true)
        }else{
            $(".tr .qx").prop("checked",false)
        }
        arr.forEach((item,index)=>{
            if(item.ck==1){
                $(".ttr").eq(index).children().children().prop("checked",true)
            }
        })
        sl()
    }else{
        $(".tr .qx").prop("checked",false)
    }
    $(document).on("click",function(e){
        var arr=JSON.parse(localStorage.getItem("shop"))
        var tag=$(e.target)
        // 加数量
        if(tag.text()=="+"){
            var evl=tag.prev().val()
            evl++
            tag.prev().val(evl)
            var id=tag.parent().parent().parent().parent().parent().attr("date-id")
            arr.forEach(item=>{
                if(item.id==id){
                    item.num=evl
                }
            })
            localStorage.setItem("shop",JSON.stringify(arr))
            sl()
        }
        // 减数量
        if(tag.text()=="-"){
            var evl=tag.next().val()
            evl<=1?evl=1:evl--
            tag.next().val(evl)
            var id=tag.parent().parent().parent().parent().parent().attr("date-id")
            arr.forEach(item=>{
                if(item.id==id){
                    item.num=evl
                }
            })
            localStorage.setItem("shop",JSON.stringify(arr))
            sl()
        }
        // 全选
        if(tag.hasClass("qx")){
            if(tag.is(":checked")){
                $(".ttr .dx").prop("checked",true)
                arr.forEach(item=>{
                    item.ck=1
                })
            }else{
                $(".ttr .dx").prop("checked",false)
                arr.forEach(item=>{
                    item.ck=0
                })
            }
            addList()
            sl()
        }
        // 单选
        if(tag.hasClass("dx")){
            var id=tag.parent().parent().attr("date-id")
            arr.forEach(item=>{
                if(item.id==id){
                    if(item.ck==0){
                        item.ck=1
                        $(this).prop("checked",true)
                    }else{
                        item.ck=0
                        $(this).prop("checked",false)
                    }
                }
            })
            localStorage.setItem("shop",JSON.stringify(arr))
            var sun= arr.every(item=>{
                return item.ck==1
            })
            if(sun){
                $(".tr .qx").prop("checked",true)
            }else{
                $(".tr .qx").prop("checked",false)
            }
            location.reload()
            sl()
        }
        // 删除
        if(tag.hasClass("reml")){
            if(confirm("你确定要删除吗？")){
                var id=tag.parent().parent().parent().attr("date-id")
                arr.forEach((item,index)=>{
                    if(item.id==id){
                        arr.splice(index,1)
                    }
                })
                localStorage.setItem("shop",JSON.stringify(arr))
                location.reload(true)
            }
            sl()
        }
        // 结算
        if(tag.attr("class")=="bnt"){
            if($(".dx").is(":checked")){
                if(confirm("确认购买吗？")){
                var ji=$(".play .pla .s_j").text()
                var pi=$(".play .pla .s_l").text()
                alert(`你一共购买了${ji}件商品，需要支付￥${pi}元`)
                arr.forEach((item,index)=>{
                    if(item.ck==1){
                        arr.splice(index,1)
                    }
                })
                localStorage.setItem("shop",JSON.stringify(arr))
                location.reload(true)
                }
            }else{
                alert("请先选择商品")
            }
            sl()
        }
    })
    // input输入事件
    $(".cart .nmm")[0].oninput=function(){
        var ncm=parseInt($(this).val())
        var id=$(this).parent().parent().parent().parent().parent().attr("date-id")
            arr.forEach(item=>{
                if(item.id==id){
                    item.num=ncm
                }
            })
            localStorage.setItem("shop",JSON.stringify(arr))
            sl()
    }
    // 总计
    function sl(){
        var arr=JSON.parse(localStorage.getItem("shop"))
        nmm=0
        price=0
        // 数量
        arr.forEach(item=>{
            if(item.ck==1){
                price+=(item.num-0)*(item.price-0)
                nmm+= item.num-0
                $(".play .pla .s_j").add($(".cart .nr span")).html(nmm)
                $(".play .pla .s_l").html(price)
            }
        })
    }
})