$(function(){
    var move = $("div");
    setInterval(function(){
        moveleft = Math.random()* $(window).width()-50;
        movetop  = Math.random()* $(window).height()-50;
        move.animate({
            "left": moveleft,
            "top" : movetop,
        },2000)
    })
})
