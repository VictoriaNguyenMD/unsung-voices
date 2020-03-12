$(document).ready(function() {
  $("p.quotes").each(function (i, quote) {
    $(quote).css({
      left: Math.floor(Math.random() * 1000 % ($(parent).outerWidth() - $(this).outerWidth())),
      top: Math.floor(Math.random() * 1000 % ($(parent).outerHeight() - $(this).outerHeight())),
    });
  });
});


$(document).ready(function() {

  var quotes = $("p.quotes");
  var quoteIndex = -1;
  
  function showNextQuote() {
      ++quoteIndex;
      quotes.eq(quoteIndex % quotes.length)
          .fadeIn(1000)
          .delay(2000)
          .fadeOut(1000);
  }
  showNextQuote();
});