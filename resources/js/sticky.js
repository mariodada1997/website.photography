function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var item_top = $('#nav-anchor').offset().top;
  if (window_top > item_top) {
    $('#nav').css({
      'position': 'fixed',
      'top': 0
    }).addClass('fxd');
  } else {Z
    $('#nav').css({
      position: absolute,
      top: 737 px,
      width: 100 %
    }).removeClass('fxd');
  }
}

$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});