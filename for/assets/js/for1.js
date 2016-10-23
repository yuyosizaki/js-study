/*js file*/
// 1.forの入れ子で縦幅のdivを生成する
// 2 divは非表示にして配置しておく
// 3 divのtopとレフトを配列に入れておく
// 4 配列をランダムに入れ替える
// 5 ランダムに入れ替えた配列を参照して表示てdivを配置し直す
// 6 表示させる

$(function(){

   $("body").append("<div class='container'></div>");
   var $container = $(".container");

   var xLine = 10;
   var yLine = 8;
   var scale = 70;

   for(var i=0; i<yLine; i++){
     for(var n=0; n<xLine; n++){

       $container.append("<div class='box box"+i+"_"+n+"'></div");
       var $box =$(".box"+i+"_"+n)
       $box.css({
         "width": scale,
         "height": scale,
         "top": i * scale,
         "left": n * scale,
         "background-color":"#ccc",
         "position": "absolute",
         "border": "solid 1px #fefefe",
         "text-align": "center",
         "font-size": "12px",
         "line-height": scale+"px"
        });

       $box.text((i+1)+"_"+(n+1));
       //  $box.hide();
       // top leftの値を多次元配列で入れていく。
       // ここにxline,ylineそれぞれを配列に入れる。
       // 多次元配列・連想配列
     }
   }





})//end function
