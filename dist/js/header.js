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

// add modal link element


(function ($) {
  var $window = $(window)
  var $elemHeader = $('.region-header')
  var $elemNav = $('.region-header nav')

  $elemHeader.append("<ul class='search'><li><a>Search</a></li></ul>")
  $elemHeader.append("<button class='hamburger' type='button'><span class='hamburger-box'><span class='hamburger-inner'></span></span></button>")


  var $elemModal = $('.hamburger')

  function resize() {
    if ($window.width() < 740) {
      $elemModal.show();
      $elemNav.hide();
      $elemHeader.removeClass('desktop');
      return $elemHeader.addClass('mobile');
    }
    $elemModal.hide();
    $elemNav.show();
    $elemHeader.removeClass('mobile');
    $elemHeader.addClass('desktop');
  }

  $window
    .resize(resize)
    .trigger('resize');
})(jQuery);

//# sourceMappingURL=maps/header.js.map
