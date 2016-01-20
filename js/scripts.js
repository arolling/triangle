var triangle = function(a,b,c) {

  if ( ((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a) ) {
    console.log(a,b,c)
    return false;
  } else if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

$(document).ready(function() {
  $('form#triSubmit').submit(function(event){
    event.preventDefault();
    $('#output').hide();
    var side1 = parseFloat($('input#value1').val());
    var side2 = parseFloat($('input#value2').val());
    var side3 = parseFloat($('input#value3').val());

    if (Math.sign(side1) != 1 || Math.sign(side2) != 1 || Math.sign(side3) != 1) {
      alert("One of your leg values is not a positive number");
    } else {

      var triType = triangle(side1, side2, side3);
      console.log(triType);
      $("#side1").html(side1);
      $("#side2").html(side2);
      $("#side3").html(side3);

      if (!triType) {
        $("#triWrite").html("not a triangle");
      } else {
        $("#triWrite").html(triType);
      }
      $('#output').fadeIn();
    }

  });

}); //end ready function
