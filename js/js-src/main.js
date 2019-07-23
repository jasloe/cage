(function ($) {

  var breadcrumb = document.getElementById('block-tenney-breadcrumbs')

  function initVars() {
    $footer = $('footer')
    $header = $('header')
    $main = $('main')
    $window = $(window)
  }

  function centerMain() {
    var taken = $header.outerHeight(true) + $footer.outerHeight(true)
    var availableHeight = $window.height() - $main.outerHeight() - taken
    $main.css('top', availableHeight > 0 ? availableHeight / 2 : 0)
  }

  function showHideBreadcrumbs(color) {
    // var breadcrumb = $('#block-tenney-breadcrumbs')
    // breadcrumb.addClass('active').css(color)
  }

  function stickyBreadcrumbs() {
    var sticky = new Waypoint.Sticky({
      element: $(breadcrumb)[0]
    })
  }

  $(function () {
    initVars()
    centerMain()
    stickyBreadcrumbs()
  })

  $(window).on('resize load', function () {
    centerMain()
  }).on('load', function() {
    showHideBreadcrumbs('red')
  })

})(jQuery);
