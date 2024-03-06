$(document).ready(function(){
    $(".button1").click(function(){
      let div1 = $(".box1");
      div1.animate({height:"400px",opacity:"0.5"},"slow");
      div1.animate({width:"400px",opacity:"0.8"},"fast");
      div1.animate({height:"100px",opacity:"0.5"},"fast");
      div1.animate({width:"100px"},"fast");



    });
    $(".button2").click(function() {
      $(".box2").toggle(300);
    });

    $(".button3").click(function(){
    $(".box3").fadeToggle(3000);
  });
  $(".slide").click(function (){
    
    $(".pannel").slideDown(5000);
   
 });
 $(".button4").click(function(){
  $(".pannel").stop();
 });
 $(".button5").click(function(){
  $(".box5").hide("slow", function(){
    alert("The box is now hidden");
  });
});
$.get("https://code.jquery.com/jquery-3.7.1.js",function(data,status){
  alert(status);
})
 
});
