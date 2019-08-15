// (function ($) {
// })(jQuery);

// mobile: 480px,
// modal: 600px,
// tablet: 740px,
// desktop: 980px,
// wide: 1300px,
// desktopAd: 810px,
// mobileLandscape: 480px

// headroom.js implementation
if (window.location.hash) {
  header.classList.add("headroom--unpinned");
}

var headroom = new Headroom(header, {
  tolerance: {
    down: 0,
    up: 20
  },
  offset: 100
});
headroom.init();

(function ($) {
  var $window = $(window)
  var $elemHeader = $('header')
  var $elemRegionHeader = $('.region-header')
  var $elemNav = $('.region-header nav')
  var $elemModal = $('.hamburger')

  // attach html to .region-header element
  $elemRegionHeader.append("<ul class='search'><li><a>Search</a></li></ul>")
  $elemRegionHeader.append("<button class='hamburger hamburger--minus' type='button'><span class='hamburger-box'><span class='hamburger-inner'></span></span></button>")

  function resize() {
    if ($window.width() < 740) {

      $elemModal.show();
      $elemNav.hide();
      return $elemRegionHeader.addClass('mobile')

  }
    $elemModal.hide();
    $elemNav.show();

  }

  $window
    .resize(resize)
    .trigger('resize');

})(jQuery);

var hamburger = document.querySelector(".hamburger");
var body = document.querySelector("body");
var headerOverlay = document.querySelector("header");
var modalWrapper = document.querySelector(".dialog-off-canvas-main-canvas .overlay");


hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  body.classList.toggle("no-scroll");
  headerOverlay.classList.toggle("is-active");
  modalWrapper.classList.toggle("open");
});
