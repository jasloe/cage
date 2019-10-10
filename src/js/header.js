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
// if (window.location.hash) {
//   header.classList.add("headroom--unpinned");
// }

var hr1 = new Headroom(header, {
  tolerance: {
    down: 0,
    up: 20
  },
  offset: 100
});
hr1.init();

const breadcrumb = document.querySelector(".breadcrumb")

var hr2 = new Headroom(breadcrumb, {
  tolerance: {
    down: 0,
    up: 100
  },
  offset: 100
});
hr2.init();


// const beep = document.querySelector(".breadcrumb");

// var headroom2 = new Headroom(beep, {
//   tolerance: {
//     down: 0,
//     up: 20
//   },
//   offset: 200
// });
// headroom2.init();



// // mobile overlay logic
// (function ($) {
//   // add markup to region-header
//   var $window = $(window)
//   var $regionHeader = $('.region-header')
//   var $nav = $('.region-header nav')

//   var $hamburger = $(".hamburger");
//   var $body = $("body");
//   var $headerOverlay = $("header");
//   var $overlay = $("#overlay");

//   var $hamburger = $('.hamburger')

//   function resize() {

//     if ($window.width() < 740) {
//       $hamburger.show()
//       $nav.hide()
//         return $regionHeader.addClass('mobile')

//       } else {

//       $hamburger.hide()
//       $nav.show()
//         return $regionHeader.removeClass('mobile')

//     }
//   }

//   $hamburger.on('click', function () {
//     // disable scrolling
//     $body.toggleClass('no-scroll');

//     // change hamburger state
//     $hamburger.toggleClass('is-active');

//     // toggle overlay
//     $headerOverlay.toggleClass('is-active');
//     $overlay.toggleClass('open');
//   });


//   function checkMobile() {
//     var $isOpen = $('.overlay.open')
//     if ($isOpen.length) {
//       $nav.hide();
//       $hamburger.show()
//     }
//   }

//   $window
//     .resize(resize)
//     .trigger('resize');

// $window.resize(checkMobile);


// })(jQuery);
