$(function(){
    $.ajax({
        type:"get",
        url:"../navajax.json",
        success:function(arr){
            for(var i=0; i< arr.length;i++){
                //创建节点
                var node = $(`
                <li><a href="${arr[i].href}" target="_blank" class="yMenua">${arr[i].msg}</a></li>
                `);
                node.appendTo(".yMenuIndex")
            }

        }
    })
})