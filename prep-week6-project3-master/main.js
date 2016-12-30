/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



    // Question #1
    $(".changeColor").click(function() {
        $("li:nth-child(3)").css("color", "#8A2BE2")
    })

    // Question #2
    $("li:nth-child(4)").click(function() {
        $("li:nth-child(4)").append("<li>another 'li' below me</li>")
            //   $("li:nth-child(4)").clone(true)
    })

    // Question #3

    $("#removeLi").click(function() { //uses ID not selector
        $("li:nth-child(2)").remove()
    })

    // Question #4
    $("li:last").click(function() {
        $("li:last").css("font-size", "40px")
    })

    // Question #5
    $(".cute").click(function() {
        $("div.clones").append($(".cute").clone());
        //    $("div.clones").append($(".cute").clone(true));
    })


    // Question #6
    $("body").dblclick(function() { //uses ID not selector
        $("#makeSquare").css("height", "300px");
    })


    // Question #7
    $(".black").click(function() {
        $("html").css("background-color", "#000");
        $("html").css("background-image", "none");
    })

    $(".wood").click(function() {
        $("html").css("background-color", "#000");
        $("html").css("background-image", "none");
        var background2 = $('.wood').css('background-image'); //captures the value of image
        console.log(background2); //url("http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg")
        $("p").css("color", "#ffffff"); //turns text white so you can read options
    })



    // <div class="chaos swatch"></div>  ----image url Does not work

    // <div class="restore swatch"></div>
    $(".restore").click(function() {
        $("html").css("background-color", "#ffffff");
        $("html").css("background-image", "none");
    })

    // Question #8
    $("#hover").hover(function() { //uses ID not selector
        $("#hover").css("background-color", "red");
    }, function() {
        $(this).css("background-color", "#39B7CD");
    })
    //Google search:  The .hover() method binds handlers for both mouseenter and mouseleave events.


    $("#hover").click(function() { //uses ID not selector
        $(this).toggleClass("green");
    })

});
