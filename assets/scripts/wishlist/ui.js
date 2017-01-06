'use strict';
// const store = require('../store');
const wishListTemplate = require('../templates/list.handlebars');

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

const getListSuccess = (items) => {
  console.log('did it work?', items);
  $('.list-display').html(wishListTemplate(items));
  // $(".bigMessage").hide();'
  // $('.list-handlebars').show(500);
  // $("#addBox").hide();
  //console.log(shows);
};

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

const updateItemSuccess = function(data) {
  console.log('Item  updated successfully.', data);
};

const updateItemFailure = function(error) {
  console.log('No update', error);
};

const deleteItemSuccess = function(data) {
  console.log('deleted', data);
};

const deleteItemFailure = function(error) {
  console.log('FAIL!, this is the delete error', error);
};
//
// };

module.exports = {
  getListSuccess,
  addItemSuccess,
  addItemFail,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure
};
