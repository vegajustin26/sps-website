$(function() {
    $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyCvucrP09Ll5JczHsqlmggxPLkAeneaMR0',
      aspectRatio: 2,
      themeSystem: 'bootstrap4',
      events: {
        googleCalendarId: 'spsnortheastern@gmail.com',
        className: 'gcal-event' // an option!
      }
    });
  });