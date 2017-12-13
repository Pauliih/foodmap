
$(function(){
  $('#main-foodmap').hide();
  
  setTimeout(function() {
    $('#splash').fadeOut(500);
    $('#main-foodmap').show();
  }, 2000);
  
  // Mouseover (REVISAR*)
  $('.chilena').mouseover(function () {
    $('.food-overlay1').show();
  }).mouseout(function () {
    $('.food-overlay1').hide();
  });

  //Modals
});

