
$(function(){
  $('header').hide();
  $('#search').hide();
  setTimeout(function() {
    $('#splash').fadeOut(500);
    $('header').show();
    $('#search').show();
  }, 3000);
});
