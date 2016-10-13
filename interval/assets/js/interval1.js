/*js file*/
$(function(){

  var countTxt = $(".count-up");
  var count = 0;
  var time = 1000;

  function countUP(){
    countTxt.text(count++);
  }

  setInterval(countUP, time);






})//end function
