'use strict';

const authEvents = require('./auth/events.js');
const itemEvents = require('./wishlist/events.js');
const softwareTemplate = require('./templates/software.handlebars');
const equipmentTemplate = require('./templates/equipment.handlebars');
const peripheralTemplate = require('./templates/peripheral.handlebars');


$(()=>{
  authEvents.addHandlers();
  $(".reset, .close").click(function() {
      $(".form-control").val("");
  });
  itemEvents.addHandlers();
$('#software-template').html(softwareTemplate());
$('#equipment-template').html(equipmentTemplate());
$('#peripheral-template').html(peripheralTemplate());
});
