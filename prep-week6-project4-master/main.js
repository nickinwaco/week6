
$(document).ready(function () {

  // Question #1
  $('#submitBtn').click(function() {
      var input1 = $("#textInput").val();
    $("<h3>" + input1 + "</h3>").insertAfter("#submitBtn");
  });

  // Question #2
  $('#checkbox').click(function() {
    $("#hidden").toggleClass();
  });

  // Question #3
  $('.table-striped').append("<tr> <td> olive </td> </tr>");


//Question #4
  $("table").click(function() {
      $(".table-striped tbody").children().each(function() {
          var tableData = $(this).children("td:nth-child(3)");
          console.log(tableData.text());
          // 
          //
          //   if (tableData.text() === 'Content')
          //     {
          //   console.log(tableData.text());
          // }  else {
          //
          //   console.log("nope");
          // }


          });


    });

// console.log(tableData);

});  //end of query function
