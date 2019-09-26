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
