let validate = function(a,b,c){
  if (a && b && c){
    alert ("Hello"+" "+ a + ", we have received your message. Thank you for reaching out to us.");
  }
  else if (a && b) {
      alert ("Hello"+" "+ a + ", please type in a message.");
  }
  else {
    alert("Please enter your name and email");
  }
}

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
    $(this).children(".demo").fadeToggle(2000);
  });
});

/*Validate form*/
$(document).ready(function(){
  $("form#mc-embedded-subscribe-form").submit(function(event){
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("textarea#comment").val();
    validate(name, email, message);
  });

});
