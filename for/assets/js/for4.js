/*js file*/
$(function(){

  var $container;
  var items;
  var xLine;
  var yLine;
  var scale;
  var spd;
  var onMouse;
  var offMouse;

  function init(){
    $("body").append("<div class='container'></div>");
    $container = $(".container");
    scale = 100;
    xLine = Math.round($(window).width()/scale);
    yLine = Math.round($(window).height()/scale);
    items = xLine * yLine;

    viewSpd = 10;
    createElements();
  }

  function createElements(){
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
       $box.hide();
       $box.delay(n*i*scale/viewSpd).fadeIn();
       btnStart($box);
     }
   }
 }

function btnStart(target){
  target.mouseover(onMouse);
  target.mouseout(offMouse);
  target.click(onClick);
}

 function onMouse(){
   $(this).stop(true,true).fadeTo(300,0.7);
 }

 function offMouse(){
   $(this).stop(true,true).fadeTo(600,1);
 }

 function onClick(){
  $(this).stop(true,true).fadeTo(800,0);
 }



init();

})//end function
