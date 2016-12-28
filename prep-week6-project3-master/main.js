/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
$(".changeColor").click(function(){
  $("li:nth-child(3)").css("color", "#8A2BE2")
})

// Question #2
$("li:nth-child(4)").click(function(){
   $("li:nth-child(4)").append("<li>another 'li' below me</li>")
//   $("li:nth-child(4)").clone(true)
})

// Question #3

$("#removeLi").click(function(){  //uses ID not selector
  $("li:nth-child(2)").remove()
})

// Question #4


// Question #5


  // Question #6



// Question #7



  // Question #8




});
