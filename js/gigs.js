/* global moment */
'use strict';

// Google calendar feed
$(function () {
  $.ajax({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + 
      'dearorphans.com_3b0g1nnoopdajd14cag057qdk8%40group.calendar.google.com' +
      '/events?' +
      'orderBy=startTime&' +
      'singleEvents=true&' +
      'timeMin=' + encodeURIComponent(moment().format()) + '&' +
      'fields=items(description%2Cend%2Clocation%2Cstart%2Csummary)&' + 
      'key=AIzaSyDFtpWPz-SxNrkmjpUuWVJq-tTIwJru72M'
  })
  .done(function (data) {
    for (var item in data.items) {
      var dt = document.createElement('dt');
      if (data.items[item].start.dateTime) {
        dt.innerHTML = moment(data.items[item].start.dateTime).format('LLL') + ' &ndash; ' + 
          moment(data.items[item].end.dateTime).format('LT');
      } else {
        dt.innerHTML = moment(data.items[item].start.date).format('LL') + ' &ndash; ' + 
          moment(data.items[item].end.date).subtract(1, 'days').format('LL');
      };
      
      var dd = document.createElement('dd');
      $(dd).append('<h3>' + data.items[item].summary + '</h3>');

      var location = data.items[item].location;
      if (location) {
        $(dd).append('<p><a href="http://maps.google.com.au/maps?hl=en&q=' + 
          encodeURI(location) + 
          '" target="_blank">' + location + '</a></p>'
        );
        $(dd).append('<div class="flex-video"><iframe ' +
          'width="637" ' +
          'height="358" ' +
          'frameborder="0" style="border:0" ' +
          'src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDFtpWPz-SxNrkmjpUuWVJq-tTIwJru72M&q=' + 
          location + '">' +
        '</iframe></div>');
      }
      
      var description = data.items[item].description;
      if (description) {
        $(dd).append('<div class="pre">' + description + '</div>');
      }

      $('dl#gigs').append(dt);
      $('dl#gigs').append(dd);
    }
  });
});
