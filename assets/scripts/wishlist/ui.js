'use strict';
// const store = require('../store');
const wishListTemplate = require('../templates/list.handlebars');

const getListSuccess = (items) => {
  console.log('did it work?', items);
  $('.list-display').html(wishListTemplate(items));
};

const addItemSuccess = (data) => {
  console.log('did it work?', data);
};

const addItemFail = () => {
  // console.log('SIGN IN BOZO.');
  // $('#error-modal').modal('show');
};

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


module.exports = {
  getListSuccess,
  addItemSuccess,
  addItemFail,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure
};
