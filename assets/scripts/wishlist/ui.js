'use strict';
const store = require('../store');

// const clearInputField = () => {
//   $('.input').val('');
// };
//
// const success = (data) => {
// //  console.log(data);
// };
//
// const failure = (error) => {
// //  console.log(error);
// };
//
// const showShowsTemplate = require('../templates/show-listing.handlebars');
// //
// const getShowsSuccess = (shows) => {
//   $('.title-display').html(showShowsTemplate(shows));
//   $(".bigMessage").hide();
//   $('.title-display').show(500);
//   $("#addBox").hide();
//   //console.log(shows);
// };
//
//
const addItemSuccess = (data) => {
  console.log('did it work?', data);
  // clearInputField();
  // $("#addBox").hide();
  // $(".bigMessage").show(500);
};
//
const addItemFail = () => {
};
//
// const updateShowSuccess = () => {
//   clearInputField();
//   $('#updateShowModal').modal('hide');
//   $('#updateGenreModal').modal('hide');
//   $('#updateVaModal').modal('hide');
//   $('#updateSiteModal').modal('hide');
//   $('#updateRssModal').modal('hide');
//   $('#updateEpModal').modal('hide');
//   $('#updateDateModal').modal('hide');
//   $('#updateDescModal').modal('hide');
// };
//
// const deleteShowsSuccess = (shows) => {
// $('.title-display').hide(500);
//
// };

module.exports = {
  // success,
  // failure,
  // deleteShowsSuccess,
  // getShowsSuccess,
  addItemSuccess,
  addItemFail,
  // updateShowSuccess,
};
