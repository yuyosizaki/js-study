$(function(){

    /* ランダムにdivを動かす練習
    var box = $("div");
    setInterval(function(){
        var left = Math.random()*$(window).width();
        var top  = Math.random()*$(window).height();
        box.animate({
            "left": left,
            "top" : top
        })
    })
    */

    // /* カウントの練習
    var count       = 0;
    var $number     = $(".number");
    var $stop       = $(".stop");
    var $reset      = $(".reset");

    function countUp(){
        $number.text(count++);
    }

    function countstop(){
        clearInterval(ID);
    }

    ID = setInterval(countUp,1000);

    // カウントをスタートさせる。
    $stop.click(function(){
        clearInterval(ID);
    })

    // カウントをリセットする。
    $reset.click(function(){
        count = 0;
        countUp();
    })


    //


}) // endfunction
