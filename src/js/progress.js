(function ($) {

  var winHeight = $(window).height();
  var docHeight = $('.region__content').height();
  var progressBar = $('progress');
  var max;
  var value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);


    $(document).on('scroll', function () {
      value = $(window).scrollTop();
      progressBar.attr('value', value);
    });


})(jQuery);



