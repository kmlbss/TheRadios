 
$(function(){
    $('.burger').on("click", function(){
 $(".navbar-links").toggleClass("navbar-active")
 $(".burger").toggleClass("toggle") 
//  $("#sil").removeClass("dropdown");
 
}) 
}) 
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 40, 
      loop: true,
      dots: true,  
      autoplay:true,
      autoplayTimeout:4000,
      count:3,
      responsive: {
        0: {
          items: 1, 
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3, 
        },
      },
    });
  });  
     function openNav() { 
    $("#footer-iframe").fadeIn(1000);
 } 
  function closeNav() { 
    $("#footer-iframe").fadeOut(1000);
 }  
 
 $(function(){
     $(".inner-open i").css({
     "margin-left": "10px",
     "font-size":"12px", 
    });
 $(".open i").css({
     "margin-left": "8px",
     "font-size":"12px",
  });
 }) 
// }
// document.getElementsByClassName("burger")[0].addEventListener("click",function(){
//     document.getElementsByClassName('sil').classList.remove("open")
// });