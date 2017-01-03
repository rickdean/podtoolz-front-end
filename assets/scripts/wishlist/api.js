'use strict';

const app = require('../app.js');
const store = require('../store.js');


const addItem = (data) =>
  //let token = app.user.token;
  $.ajax({
    url: app.host + '/items',
    method: 'POST',
    data,
  headers: {
    Authorization: 'Token token=' + store.user.token,
    },
  });

  const getList = () => {
   return $.ajax({
    url: app.host + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

//
// const deleteShow = (id) => {
//   return $.ajax({
//     url: app.host + '/shows/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     }
//   });
// };
//
// const updateShow = (data, id) => {
//   return $.ajax({
//     url: app.host + '/shows/' + id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     },
//     data,
//   });
// };


module.exports = {
  addItem,
  getList,
  // deleteShow,
  // updateShow,
};
