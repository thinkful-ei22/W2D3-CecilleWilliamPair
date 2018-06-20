'use strict';

const API = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/CecilleWill';
  const myGetItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback)
    callback('api module works!');
  };

  return {
    BASE_URL,
    getItems: myGetItems,
  };
}());

// API.getItems(function(data) {
//   console.log(data);
// });
//
// console.log(API.BASE_URL);
