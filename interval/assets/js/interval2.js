/*js file*/
$(function(){

  var count = 0;
  var time = 300;

  var ID = setInterval(countUP, time);

  stopBtn.click(function(){
    clearInterval(ID);
  })

  playBtn.click(function(){
    ID = setInterval(countUP, time);
  })

  resetBtn.click(function(){
      count = 0;
      countTxt.text(count);
  })

  stopBtn.mouseover(function(){
    $(this).fadeTo(300,0.5);
  })

  stopBtn.mouseout(function(){
    $(this).fadeTo(300,1);
  })



})//end function
