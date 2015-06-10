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
        '  <div class="flex-video">' +
        '    <iframe width="637" height="358" src="https://www.youtube.com/embed/' + 
        data.items[item].snippet.resourceId.videoId + 
        '" frameborder="0" allowfullscreen></iframe>' +
        '  </div>' +
        '  <div class="pre">' +
        data.items[item].snippet.description + 
        '  </div>' + 
        '</dd>');
    }
  });
});