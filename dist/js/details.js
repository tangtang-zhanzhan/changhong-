"use strict";var tp4,tps,tp3,addDom,tale=location.search.slice(1,location.search.length).split("=")[1],tp1=tale.split(".")[0],tp2=tale.split(".")[1],id="",obj=null;function mouse(){$(".sec_con .box").mouseenter(function(s){$(".sec_con .box span").add($(".sec_con .bigBox")).css("display","block");var c=$(".sec_con .box span").outerWidth(),n=$(".sec_con .box span").outerHeight(),t=$(".sec_con .box").position().left,o=$(".sec_con .box").position().top,a=$(".sec_con .sec_conl").position().left,e=$(".sec_con .sec_conl").position().top,i=s.clientX-c/2-t-a,l=s.clientY-n/2-o-e;$(".sec_con .box span").css("left",i+"px").css("top",l+"px")})}function mousem(){$(document).mousemove(function(s){var c=$(".sec_con .box span").outerWidth(),n=$(".sec_con .box span").outerHeight(),t=$(".sec_con .box").position().left,o=$(".sec_con .box").position().top,a=$(".sec_con .box").outerWidth(),e=$(".sec_con .box").outerHeight(),i=$(".sec_con .sec_conl").position().left,l=$(".sec_con .sec_conl").position().top,m=s.clientX-c/2-t-i,p=s.clientY-n+o-l;m<=0&&(m=0),a-c<=m&&(m=a-c),p<=o&&(p=o),e-n+o<=p&&(p=e-n+o),$(".sec_con .box span").css("left",m+"px").css("top",p+"px"),$(".sec_con .bigBox img").css("left",-2*m+"px").css("top",-2*p+"px")})}function mousel(){$(".sec_con .box").mouseleave(function(){$(".sec_con .box span").add($(".sec_con .bigBox")).css("display","none")})}function mouseImg(){$(".sec_con .min img").mouseenter(function(){$(".sec_con .min").removeClass("acm"),$(this).parent().addClass("acm"),$(".sec_con .box img").attr("src",$(this).attr("src")),$(".sec_con .bigBox img").attr("src",$(this).attr("src"))})}function next(o){$(".sec_con .min_shop img:last").click(function(){var s=o,c=$(".sec_con .min").length,n=$(".sec_con .acm").index();s<=n?$(".sec_con .min").removeClass("acm").eq(n).addClass("acm"):$(".sec_con .min").removeClass("acm").eq(n+1).addClass("acm");var t=n;c==s?$(".sec_con .min_shop .move1").css("left","12px"):n!=s?(++n,$(".sec_con .min_shop .move1").css("left",-90*(n-t)+"px")):$(".sec_con .min").removeClass("acm").eq(n).addClass("acm")}),$(".sec_con .min_shop img:first").click(function(){var s=o,c=$(".sec_con .min").length,n=$(".sec_con .acm").index();s<=n?$(".sec_con .min").removeClass("acm").eq(n).addClass("acm"):$(".sec_con .min").removeClass("acm").eq(n+1).addClass("acm");var t=n;c==s?$(".sec_con .min_shop .move1").css("left","0px"):n!=s?(--n,$(".sec_con .min_shop .move1").css("left",-90*(n-t)+"px")):$(".sec_con .min").removeClass("acm").eq(n).addClass("acm")})}function xq(){$(".sec_conx .chanpin li a").click(function(){$(".sec_conx .chanpin li a").removeClass("acta"),$(this).addClass("acta");var s=$(this).parent().index();$(".scon div").removeClass("actDiv").eq(s).addClass("actDiv")})}function shop(a){a&&$(".sec_conr .t_tl4  .add").click(function(){queRen();var t,o,s,c=localStorage.getItem("shop");c?(t=JSON.parse(c),o=0,t.forEach(function(s){var c,n;s.id===a.id&&(c=parseInt($(".sec_conr .num").val()),n=parseInt(a.num),n+=c,s.num=n,o++,localStorage.setItem("shop",JSON.stringify(t)))}),0==o&&(a.num=parseInt($(".sec_conr .num").val()),a.ck=0,t.push(a),localStorage.setItem("shop",JSON.stringify(t)))):(s=[],a.num=parseInt($(".sec_conr .num").val()),a.ck=0,s.push(a),localStorage.setItem("shop",JSON.stringify(s)))})}function sxnum(){$(".sec_conr .t_tl4  .jia").click(function(){var s=parseInt($(".sec_conr .t_tl4  .jia").prev().val());s++,$(".sec_conr .t_tl4  .jia").prev().val(s)}),$(".sec_conr .t_tl4  .jian").click(function(){var s=parseInt($(".sec_conr .t_tl4  .jian").next().val());s<=1?s=1:s--,$(".sec_conr .t_tl4  .jian").next().val(s)})}function play(){$(".t_tl4 .gouM").click(function(){0!=localStorage.length?location.href="../html/shopCard.html":(alert("请先加入购物车"),location.reload())})}id=-1!=tp2.indexOf("&")?(tp4=tp2.split("&")[0],tp2.split("&")[1]):(tps=tale.split(".")[2],tp3=tps.split("&")[0],tps.split("&")[1]),tale?(addDom=function(){tp3?$.ajax({url:"../json/"+tp1+".json",success:function(s){var c="",n="",t=0;for(var o in $(".t_tl3").before(""),$(".sec_con .sec_conl").html(""),s)if(o==tp2){var a=s[o];for(var e in a){e==tp3&&a[e].list.forEach(function(s){s.id==id&&(shop(s),c+='\n                                    <div class="box">\n                                        <img src="'+s.img[0]+'" alt="">\n                                        <span></span>\n                                    </div>\n                                    <div class="bigBox">\n                                        <img src="'+s.img[0]+'" alt="">\n                                    </div>\n                                    <div class="min_shop">\n                                        <img src="../img/b2b/pro-ditem-pre_03.jpg" alt="">\n                                        <div class="mins">\n                                        <div class="move1">\n                                        ',s.img.forEach(function(s){t++,c+='<div class="min"><img src="'+s+'" alt="">\n                                            </div>'}),c+='\n                                    </div> \n                                    </div>\n                                    <img src="../img/b2b/pro-ditem-next_03.jpg" alt="">\n                                    </div>\n                                    ',n='\n                                    <li class="clearfix t_tl1">\n                                    <h2>'+s.name+s.title+'</h2>\n                                    <a href="javascript:;">加入对比</a>\n                                    </li>\n                                    <li class="t_tl2">￥<span>'+s.price+"</span> </li>\n                                    ")})}}$(".sec_con .sec_conl").html(c),$(".t_tl3").before(n),$(".sec_con .min_shop .min").eq(0).addClass("acm"),mouse(),mousem(),mousel(),mouseImg(),next(t)}}):$.ajax({url:"../json/"+tp1+".json",success:function(s){var c="",n="",t=0,o=[];for(var a in $(".t_tl3").before(""),$(".sec_con .sec_conl").html(""),s)if(a==tp4){var e=s[a];for(var i in e){e[i].list.forEach(function(s){o.push(s)})}}o.forEach(function(s){s.id==id&&(shop(s),c+='\n                            <div class="box">\n                                <img src="'+s.img[0]+'" alt="">\n                                <span></span>\n                            </div>\n                            <div class="bigBox">\n                                <img src="'+s.img[0]+'" alt="">\n                            </div>\n                            <div class="min_shop">\n                                <img src="../img/b2b/pro-ditem-pre_03.jpg" alt="">\n                                <div class="mins">\n                                <div class="move1">\n                                ',s.img.forEach(function(s){t++,c+='<div class="min"><img src="'+s+'" alt="">\n                                    </div>'}),c+='\n                            </div> \n                            </div>\n                            <img src="../img/b2b/pro-ditem-next_03.jpg" alt="">\n                            </div>\n                            ',n='\n                            <li class="clearfix t_tl1">\n                            <h2>'+s.name+s.title+'</h2>\n                            <a href="javascript:;">加入对比</a>\n                            </li>\n                            <li class="t_tl2">￥<span>'+s.price+"</span> </li>\n                            ")}),$(".sec_con .sec_conl").html(c),$(".t_tl3").before(n),$(".sec_con .min_shop .min").eq(0).addClass("acm"),mouse(),mousem(),mousel(),mouseImg(),next(t)}})})():(alert("请先选择商品"),location.replace("../html/index.html")),window.onload=function(){function s(){$.ajax({type:"get",url:"../json/map.json",dataType:"json",success:function(s){var c="";s.forEach(function(s){c+='<span  class="show">'+s.name+"</span>",$(".sec_conr .map_x").html(c),$(".sec_conr .map_x span").click(function(){var t=$(this).text();$(".sec_conr .map_c h1").html(t+"<i></i>"),$(".map_t .cs li").removeClass("acp").eq(1).addClass("acp"),$.ajax({type:"get",url:"../json/map.json",dataType:"json",success:function(s){var c="";s.forEach(function(s){t==s.name?s.city.forEach(function(s){c+='<span  class="show">'+s.name+"</span>",$(".sec_conr .map_x").html(c),$(".sec_conr .map_x span").click(function(){var n=$(this).text();$(".sec_conr .map_c h1").html(t+n+"<i></i>"),$(".map_t .cs li").removeClass("acp").eq(2).addClass("acp"),$.ajax({type:"get",url:"../json/map.json",dataType:"json",success:function(s){var c="";s.forEach(function(s){t==s.name&&s.city.forEach(function(s){n==s.name&&s.area.forEach(function(s){c+="<span>"+s+"</span>",$(".sec_conr .map_x").html(c),$(".sec_conr .map_x span").click(function(){var s=$(this).text();$(".sec_conr .map_c h1").html(t+n+s+"<i></i>"),$(".map_t").css("display","none")})})})})}})})}):$(".sec_conr .map_t .cs li").click(function(){$(".sec_conr .map_c h1").html("省/市/区<i></i>"),$(".sec_conr .map_t").css("display","none")})})}})})})}})}$(".sec_conr .t_tl3 .map_c").click(function(){$(".sec_conr .map_t").css("display","block"),$(".map_t .cs li").removeClass("acp").eq(0).addClass("acp"),s(),$(".map_t .cs li").click(function(){0!=$(this).index()?$(".map_t .map_x").html(""):s(),$(".map_t .cs li").removeClass("acp"),$(this).addClass("acp")})}),$(document).on("click",function(s){$(s.target).hasClass("show")?$(".t_tl3 .map_t").css("display","block"):$(".t_tl3 .map_t").css("display","none")})},window.onscroll=function(){var s=document.documentElement.scrollTop||document.body.scrollTop;s<600?$("section .kf li:last").css("display","none"):($("section .kf li:last").css("display","block"),$("section .kf").css("top",s+"px"),$("section .kf li:last").click(function(){$("html,body").stop().animate({scrollTop:"0px"},1e3)}))},xq(),sxnum(),play(),$(document).on("click",function(s){var c=$(s.target);c.hasClass("jumpL")&&"电视"==c.text()&&location.replace("../html/list.html?teal=shopWatch.condWatch"),c.hasClass("jumpL")&&"空调"==c.text()&&location.replace("../html/list.html?teal=shopWash.condAir"),c.hasClass("jumpL")&&"冰箱"==c.text()&&location.replace("../html/list.html?teal=shopWash.condWash.geCond"),c.hasClass("jumpL")&&"洗衣机"==c.text()&&location.replace("../html/list.html?teal=shopWash.condWash.xyjCond"),c.hasClass("jumpL")&&"生活家电"==c.text()&&location.replace("../html/list.html?teal=shopWash.condJd"),c.hasClass("jumpL")&&location.replace("../html/list.html?teal="+c.attr("date-title")),"lie"==c.attr("class")||c.hasClass("ulList")?$(".heat .cdl .navLe").toggleClass("navAct"):$(".heat .cdl .navLe").removeClass("navAct")});