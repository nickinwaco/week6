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
$("li:last").click(function(){  //uses ID not selector
  $("li:last").css("font-size", "40px")
})

// Question #5
$(".cute").click(function(){  //uses ID not selector
  $("div.clones").append($(".cute").clone());
//    $("div.clones").append($(".cute").clone(true));
})


  // Question #6
  $("body").dblclick(function(){  //uses ID not selector
    //$("#makeSquare").css("height", "300px");
        $("#makeSquare").css("height", "300px");
  })


// Question #7



  // Question #8




});
