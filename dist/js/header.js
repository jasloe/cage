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

var hr1 = new Headroom(header, {
  tolerance: {
    down: 0,
    up: 20
  },
  offset: 100
});
hr1.init();

const nowReading = document.querySelector(".now-reading")

var hr2 = new Headroom(nowReading, {
  tolerance: {
    down: 0,
    up: 100
  },
  offset: 100
});
hr2.init();



// mobile overlay logic
(function ($) {

  var $window = $(window)
  var $regionHeader = $("header");
  var $hamburger = $(".hamburger");
  var $body = $("body");
  // var $headerOverlay = $("header");
  var $nav = $(".main");

  function resize() {

    if ($window.width() < 740) {
      $hamburger.show()
      $nav.hide()
        return $regionHeader.addClass('mobile')

      } else {

      $hamburger.hide()
      $nav.show()
        return $regionHeader.removeClass('mobile')
    }
  }

  $hamburger.on('click', function () {
    // disable scrolling
    $body.toggleClass('no-scroll');

    // change hamburger state
    $hamburger.toggleClass('is-active');

    // toggle overlay
    $headerOverlay.toggleClass('is-active');
    $overlay.toggleClass('open');
  });


  function checkMobile() {
    var $isOpen = $('.overlay.open')
    if ($isOpen.length) {
      $nav.hide();
      $hamburger.show()
    }
  }

  $window
    .resize(resize)
    .trigger('resize');

$window.resize(checkMobile);


})(jQuery);

//# sourceMappingURL=maps/header.js.map
