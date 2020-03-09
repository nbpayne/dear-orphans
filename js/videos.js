'use strict';

// YouTube video feed
$(function () {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/playlistItems?' +
      'part=snippet&' +
      'playlistId=PLB-WL9H_OUnXAenzyJB-OuZe5KtvtBOlP&' +
      'key=AIzaSyDFtpWPz-SxNrkmjpUuWVJq-tTIwJru72M'
  })
  .done(function (data) {
    for (var item in data.items) {
      $('dl#videos').append('<dt>' + data.items[item].snippet.title + '</dt>' + 
        '<dd>' + 
        '  <img src="' + data.items[item].snippet.thumbnails.medium.url + '">' + 
        '  <div class="pre">' +
        data.items[item].snippet.description + 
        '  </div>' + 
        '</dd>');
    }
  });
});
