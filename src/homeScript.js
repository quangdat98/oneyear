import $ from "jquery";

var $animation_elements = $(".animation-element");
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;
  console.log($animation_elements);
  $(".animation-element").each(function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}
$(window).on("scroll resize", check_if_in_view);
$(window).trigger("scroll");




//-------------
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function(){
  setInterval(function(){
    var screenHeight = $(document).height();
    var screenWidth = $(document).width();

    var startLeft = getRandomArbitrary(0,screenWidth);

    var timeRun = getRandomArbitrary(70000,90000);
    var opacityR = Math.random() * (1 - 0.2) + 0.2;
    var sizeR = getRandomArbitrary(50,20);

    var endLeft = getRandomArbitrary(startLeft-10,startLeft+10);

    var snow = document.createElement('span');

    $(snow).addClass('snow-item fa fa-heart').css({
      'position'  : 'absolute',
      'z-index'   : 'auto',
      'color'     : '#ff0000',
      'display'   : 'block',
      'top'       : 0,
      'left'      : startLeft,
      'opacity'   : opacityR,
      'font-size' : sizeR+'px'
    })
      .appendTo('body')
      .animate({
      'top'       : screenHeight-sizeR,
      'left'      : endLeft
    },{
      duration : timeRun,
      easing : 'linear',
      complete:function(){
        $(this).fadeOut('fast',function(){
          $(this).remove();
        });
      }
    });

  },500);
});