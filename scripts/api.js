'use strict';

const API = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/CecilleWill';
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    //callback('api module works!');
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback,
    })

  };

  const updateItem = function(id, updateData, callback) {
    console.log('Log', id);
    $.ajax({
      'url': `${BASE_URL}/items/${id}`,
      'method': 'PATCH',
      'contentType': 'application/json',
      'data': JSON.stringify(updateData),
      'success': callback,

    });
  };
  

  return {
    BASE_URL,
    getItems,
    createItem,
    updateItem,
  };
}());

// API.getItems(function(data) {
//   console.log(data);
// });
//
// console.log(API.BASE_URL);
