'use strict';

const authEvents = require('./auth/events.js');
const itemEvents = require('./wishlist/events.js');
//const softwareTemplate = require('./templates/software.handlebars');

require('./example');

$(()=>{
  authEvents.addHandlers();
  $(".reset, .close").click(function() {
      $("input").val("");
  });
  itemEvents.addHandlers();
//  itemEvents.addHandlers();
});
