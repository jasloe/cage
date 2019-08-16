// (function ($) {

// })(jQuery);

// var $box = $('h1.title');

// var tween = TweenLite.to($box, .1, {
//   y: -50,
//   ease: Power1.easeInOut,
//   delay: 0,
//   // onComplete: myFunction,
//   // onCompleteParams: [element, 'param2']
// });

//add class to body tag based on window.location

(function ($) {

  var $body = $('body');
  var $location = $(location).attr('href');
  var $parseLocation = $location.split("/");
  var $checkIfIssue = $parseLocation[3];

  if ($checkIfIssue === 'issues') {
    var $issueShortName = $parseLocation[4];
    $body.addClass($issueShortName);
    console.log($issueShortName);
  }

})(jQuery);

//# sourceMappingURL=maps/main.js.map
