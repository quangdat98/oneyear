import $ from "jquery";
import './slicebox.js';

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

// 111111111111111111111111111111111111111

$(function () {
  var Page = (function () {
    var $navArrows = $("#nav-arrows").hide(),
      $shadow = $("#shadow").hide(),
      slicebox = $("#sb-slider").slicebox({
        onReady: function () {
          $navArrows.show();
          $shadow.show();
        },
        orientation: "r",
        cuboidsRandom: true,
        disperseFactor: 30,
      }),
      init = function () {
        initEvents();
      },
      initEvents = function () {
        // add navigation events
        $navArrows.children(":first").on("click", function () {
          slicebox.next();
          return false;
        });
        $navArrows.children(":last").on("click", function () {
          slicebox.previous();
          return false;
        });
      };
    return { init: init };
  })();
  Page.init();
});
