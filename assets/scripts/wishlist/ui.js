'use strict';

const clear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide');
  }, 800);
  $(modal).on('hidden.bs.modal', function() {
    $(this).find("input,textarea,select").val('').end();
    $('.modal-success').text('');
  });
};

const wishListTemplate = require('../templates/list.handlebars');

const getListSuccess = (items) => {
  // console.log('did it work?', items);
  $('.list-display').html(wishListTemplate(items));
};

const addItemSuccess = (data) => {
  // console.log('did it work?', data);
  $('.add-success').show();
  // $('.add-success').hide(2000);
};

const addItemFail = () => {
  // console.log('SIGN IN BOZO.');
};

const updateItemSuccess = function(data) {
  // console.log('Item  updated successfully.', data);
  clear('#addCommentModal');
};

const updateItemFailure = function(error) {
  // console.log('No update', error);
};

const deleteItemSuccess = function() {
  // console.log('deleted', data);
  clear('#confirmDeleteModal');
};

const deleteItemFailure = function(error) {
  // console.log('FAIL!, this is the delete error', error);
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
