
// mobile: 480px,
// modal: 600px,
// tablet: 740px,
// desktop: 980px,
// wide: 1300px,
// desktopAd: 810px,
// mobileLandscape: 480px

// headroom.js implementation

const header = document.querySelector("header");

const nowReading = document.querySelector(".breadcrumbs");

const hr1 = new Headroom(header, {
  tolerance: {
    down: 0,
    up: 20
  },
  offset: 100
});

const hr2 = new Headroom(nowReading, {
  tolerance: {
    down: 0,
    up: 20
  },
  offset: 100
});

hr1.init();
hr2.init();

// const el = document.querySelector("body");
// const nowReading = document.querySelector(".now-reading");
// const hr2 = new Headroom(nowReading, {
//     tolerance: {
//       down: 0,
//       up: 20
//     },
//     offset: 100
//   });

// function checkClass() {
//   if (el.classList.contains("page-node-type-article")) {
//     hr2.init();
//   }
//   return;
// }

// document.querySelector("body").addEventListener("load", checkClass());

// // mobile overlay logic
// (function ($) {

//   var $window = $(window)
//   var $regionHeader = $("header");
//   var $hamburger = $(".hamburger");
//   var $body = $("body");
//   var $headerOverlay = $("header");
//   var $nav = $(".main");
//   var $overlay = $(".overlay")
//   var $overlayClose = $("button.overlay-close");

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

//   $overlayClose.on('click', function () {
//     $body.toggleClass("no-scroll");
//        $overlay.toggleClass("open");
//           $hamburger.toggleClass("is-active");
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






//# sourceMappingURL=maps/header.js.map
