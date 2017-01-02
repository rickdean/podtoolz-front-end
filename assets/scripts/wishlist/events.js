'use strict';

// const showSoftwareTemplate = require('../templates/software.handlebars');
const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');



const onShowSoftware = function showSoftware() {
  event.preventDefault();
  console.log('click software button');
// $('#software2').html(showSoftwareTemplate());
  document.getElementById('software').style.display = "block";
};

// const onGetShows = function (data) {
//   event.preventDefault();
//   api.getShows(data)
//     .done(ui.getShowsSuccess)
//     .fail(ui.failure);
// };
//
//
const onAddItem = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  console.log('click!', data);
    api.addItem(data)
    .then(ui.addItemSuccess)
    .catch(ui.addItemFail);
//
//       //api.indexShows()
//         //.done(ui.indexShowSuccess)
//         //.fail(ui.failure);
  };


//
//   const deleteId =  function (event){
//     event.preventDefault();
//     let id = $(event.target).attr("data-show-id");
//     $(".delete-show-button").attr("data-show-id", id);
//
//   };
//
//   const onDeleteShow = function (event) {
//     event.preventDefault();
//     let id = $(this).attr("data-show-id");
//     api.deleteShow(id)
//       .done(ui.deleteShowsSuccess)
//       .fail(ui.failure);
//     // api.getShows()
//     //   .done(ui.getShowsSuccess)
//     //   .fail(ui.failure);
//   };
//
//   const updateId =  function (event){
//   event.preventDefault();
//   let id = $(event.target).attr("data-show-id");
//   $(".update-show-button").attr("data-show-id", id);
// };
//
// const onUpdateShow = function (event) {
//   event.preventDefault();
//   let id = $(".update-show-button").attr("data-show-id");
//   let data = getFormFields(event.target);
//   api.updateShow(data, id)
//     .done( function(){
//       ui.updateShowSuccess();
//       onGetShows(event);
//     })
//     .fail(ui.failure);
// };


const addHandlers = () => {
  $('.view-software').on('click', onShowSoftware);
  // $('#get-shows').on('click', onGetShows);
  $('.addItemButton').on('submit', onAddItem);

  // $('.title-display').on('click','.delete-show',deleteId);
  // $('#delete-show-button').on('click', onDeleteShow);
  // $('.title-display').on('click','.update-show',updateId);
  // $('#updateShowModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-genre',updateId);
  // $('#updateGenreModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-va',updateId);
  // $('#updateVaModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-site',updateId);
  // $('#updateSiteModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-rss',updateId);
  // $('#updateRssModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-ep',updateId);
  // $('#updateEpModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-date',updateId);
  // $('#updateDateModal').on('submit', onUpdateShow);
  // $('.title-display').on('click','.update-desc',updateId);
  // $('#updateDescModal').on('submit', onUpdateShow);
};


module.exports = {
  addHandlers,
};
