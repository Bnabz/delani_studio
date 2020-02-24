/* show, hide what we do descriptions*/
$(document).ready(function(){
  $("#design_pic").click(function(){
    $("#design_pic").hide('2000');
    $(".design").show('2000');
  });
  $(".design").click(function(){
    $(".design").slideUp('2000');
    $("#design_pic").slideDown('2000');
  });
});
$(document).ready(function(){
 $("#product_pic").click(function(){
   $("#product_pic").hide('2000');
   $(".product").show('2000');
 });
 $(".product").click(function(){
   $(".product").slideUp('2000');
   $("#product_pic").slideDown('2000');
 });
});
$(document).ready(function(){
  $("#development_pic").click(function(){
    $("#development_pic").hide('2000');
    $(".development").show('2000');
  });
  $(".development").click(function(){
    $(".development").slideUp('2000');
    $("#development_pic").slideDown('2000');
  });
});

/*Portfolio fade toggle*/
$(document).ready(function(){
  $(".card").hover(function () {
    $(this).children(".demo").fadeToggle(1000, "linear");
  });
});
/*Portfolio fade toggle*/
