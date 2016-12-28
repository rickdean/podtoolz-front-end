'use strict';

const authEvents = require('./auth/events.js');
//const itemEvents = require('./wishlist/events.js');
//const audioDramaTemplate = require('./templates/audio-drama.handlebars');

require('./example');

$(()=>{
  authEvents.addHandlers();
  $(".reset, .close").click(function() {
      $("input").val("");
  });
//  itemEvents.addHandlers();
});
