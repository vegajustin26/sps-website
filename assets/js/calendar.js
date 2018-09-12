$(function() {
    $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyCvucrP09Ll5JczHsqlmggxPLkAeneaMR0',
      events: {
        googleCalendarId: 'spsnortheastern@gmail.com',
        className: 'gcal-event' // an option!
      }
    });
  });