$(function(){
      var move = $("div")

      setInterval(function(){
         moveX = Math.random() *$(window).width();
         moveY = Math.random() *$(window).height();
         move.animate({
            "left": moveX,
            "top" : moveY,
          },1000);
      },1000);

      console.log(2);
})// endfunction
