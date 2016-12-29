'use strict';

const app = require('../app.js');
const store = require('../store.js');


// const getShows = () => {
//   return $.ajax({
//     url: app.host + '/shows',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token,
//     }
//   });
// };
//
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
  // getShows,
  addItem,
  // deleteShow,
  // updateShow,
};
