'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api.js');
const ui = require('./ui.js');



const onShowSoftware = function showSoftware() {
  event.preventDefault();
  // console.log('click software button');
  document.getElementById('software-template').style.display = "block";
};

const onShowEquipment = function showEquipment() {
  event.preventDefault();
  // console.log('click equipment button');
  document.getElementById('equipment-template').style.display = "block";
};

const onShowPeripheral = function showEquipment() {
  event.preventDefault();
  // console.log('click peripheral button');
  document.getElementById('peripheral-template').style.display = "block";
};

const onClose = function closeDiv() {
  event.preventDefault();
  // console.log('close button');
  document.getElementById('software-template').style.display = "none";
  document.getElementById('equipment-template').style.display = "none";
  document.getElementById('peripheral-template').style.display = "none";
};

const onAddItem = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  // console.log('click!', data);
    api.addItem(data)
    .then(ui.addItemSuccess)
    .catch(ui.addItemFail);
  };


  const updateId =  function (event){
event.preventDefault();
let id = $(event.target).attr("data-id");
$(".comment").attr("data-id", id);
};

const onUpdateItem = function (event) {
event.preventDefault();
let id = $(".comment").attr("data-id");
let data = getFormFields(event.target);
api.updateItem(data, id)
  .done( function(){
    ui.updateItemSuccess();
    onGetList(event);
  })
  .fail(ui.failure);
};

  const onDeleteItem = function(){
    let id = event.target.getAttribute('data-id');
    // console.log('DELETED', id);
    api.deleteItem(id)
      .then(ui.deleteItemSuccess)
      .then(function(){
        onGetList();
      })
      .catch(ui.deleteItemFailure);
  };

  const onGetList = function (event) {
    //event.preventDefault();
    // console.log('click get list button');
    api.getList()
      .then(ui.getListSuccess)
      .then(function(){
        $('.delete-list-item').on('click', onDeleteItem);
      })
      .then(function() {
        $('.update').on('click', onUpdateItem);
      })
      .catch(ui.failure);
  };


const addHandlers = () => {
  $('.view-software').on('click', onShowSoftware);
  $('.view-equipment').on('click', onShowEquipment);
  $('.view-peripheral').on('click', onShowPeripheral);
  $('.get-list').on('click', onGetList);
  $('#software-template').on('submit', '.addItemButton', onAddItem);
  $('#software-template').on('click', '#closeButton', onClose);
  $('#equipment-template').on('submit', '.addItemButton', onAddItem);
  $('#equipment-template').on('click', '#closeButton', onClose);
  $('#peripheral-template').on('submit', '.addItemButton', onAddItem);
  $('#peripheral-template').on('click', '#closeButton', onClose);
  $('.comment').on('click',updateId);
  $('#addCommentModal').on('submit', onUpdateItem);
};


module.exports = {
  addHandlers,
};
