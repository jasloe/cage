// // var $body = $('body');
// // var $location = $(location).attr('href');
// // var $parseLocation = $location.split("/");
// // var $checkIfIssue = $parseLocation[3];

// // if ($checkIfIssue === 'issues') {
// //   var $issueShortName = $parseLocation[4];
// //   $body.addClass($issueShortName);
// //   console.log($issueShortName);
// // }

// // var $activeTitle = ($(this).attr('class').split(' ')[1] + '--active')

// (function ($) {

//   var $body = $('body');

// function a () {
//   var $activeTitle = ($(this).attr('class').split(' ')[1])
//   console.log($activeTitle)
//   return
// }

// function b (getTitle) {

// }

// function cleanUp () {

// }

//   $('.issue__title').mouseenter(setTitle);

//   // function getTitle () {
//   //   $($body).addClass($activeTitle)
//   //   return;
//   // };

//   // $('.issue__title').mouseenter(getTitle);

//   // function a() {
//   //   var hello = "world";
//   //   return hello;
//   // }

//   // $('.issue__title').mouseenter(
//   //   function fromex(arg) {
//   //     console.log(arg);
//   //   }
//   // )
// })(jQuery);
//   // function a() {
//   //   var hello = "world";
//   //   return hello;
//   // }

//   // function b(arg) {
//   //   console.log(arg);
//   // }

//   // $(".issue__title").mouseenter(


//   // );
//   // b(a());







// when mouse enters check to see if


// (function ($) {

//   var $body = $('body');
// $(".issue__title span").hover(
//   function () {
//     $($body).toggleClass('foo');
//   });

// $(".issue__link").mouseenter(
//   function () {
//     var $activeIssue = ($(this).attr('class').split(' ')[1] + '--active')
//     // $($body).addClass($activeIssue)
//     console.log($activeIssue)
//   });
// })(jQuery);


  // if ($($body).hasClass('active-issue')) {

        // $($body).removeClass('active-issue')
      // $($body).addClass($activeIssue).addClass('active-issue')
      // $($body).addClass($activeIssue)
      // .addClass('active-issue')
    // $(this).toggleClass( "active-issue").toggleClass('on');


  // $("li.fade").hover(function () {
  //   $(this).fadeOut(100);
  //   $(this).fadeIn(500);
  // });


//   $('.issue__hyla').hover(function () {
//     $('body').css('background-color', 'yellow');
//   },

//   function () {
//   // on mouseout, reset the background colour
//   $('#b').css('background-color', '');

// });



// let progressBar = document.getElementById('progress_bar')
// let body = document.body,
//     html = document.documentElement;

// let x = document.getElementsByClassName('region__content-wrapper')[0]

// let articleHeight = x.scrollHeight;

// // console.log(x.offsetHeight);

// // let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

// let height = x.offsetHeight;

// console.log(height);

// const setProgress = () => {
//   // let scrollFromTop = (document.documentElement.scrollTop || body.scrollTop) + html.clientHeight;
//   let width = html.clientHeight / height) / 10 + "%";

//   progressBar.style.width = width;
// }

// window.addEventListener('scroll', setProgress);

// setProgress();


// MicroModal.init();


//# sourceMappingURL=maps/main.js.map
