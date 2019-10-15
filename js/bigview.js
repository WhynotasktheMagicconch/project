define(["jquery"],function($){
    function bigview(){

        $(".bodyview").on("mouseenter","#spec-n1",function(){
            $("#mark,#big").show();
        })
        .on("mouseleave","#spec-n1",function(){
            $("#mark,#big").hide();
        })
        .on("mousemove","#spec-n1",function(ev){
            var l = ev.clientX - $("#spec-n1").offset().left -50;
                var t = ev.clientY -$("#spec-n1").offset().top -50;
                if(l<0){
                    l=0;
                }
                if(l>250){
                    l=250;
                }
                if(t<0){
                    t=0;
                }
                if(t>250){
                    t = 250;
                }
                //滑块
                $("#mark").css({
                    left:l,
                    top:t
                })
                
                //大图反向移动两倍
                $("#big img").css({
                    left:l*-2,
                    top:t*-2
                })
        })
       /*  $("#spec-n1").on({
            mouseenter:function(){
                $("#mark,#big").show();
            },
            mouseleave:function(){
                $("#mark,#big").hide();
            },
            mousemove:function(ev){
                var l = ev.clientX - $("#spec-n1").offset().left -50;
                var t = ev.clientY -$("#spec-n1").offset().top -50;
                if(l<0){
                    l=0;
                }
                if(l>250){
                    l=250;
                }
                if(t<0){
                    t=0;
                }
                if(t>250){
                    t = 250;
                }
                //滑块
                $("#mark").css({
                    left:l,
                    top:t
                })
                
                //大图反向移动两倍
                $("#big img").css({
                    left:l*-2,
                    top:t*-2
                })

            }
        }) */
    }
    return {
        bigview:bigview
    }
})