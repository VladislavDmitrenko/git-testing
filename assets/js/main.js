
$(document).ready(function () {
  $('.header-button_humburger').click(function(){
    $(this).toggleClass('active');
    $('.header-button_list').toggleClass('active');
  });
});