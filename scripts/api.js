'use strict';

const API = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/CecilleWill';
  const myGetItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    callback('api module works!');
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({
      name,
    });
    
  };
  
  
  return {
    BASE_URL,
    getItems: myGetItems,
    createItem,
  };
}());

const settings = {
  'url': `${API.BASE_URL}/items`, 
  'method': 'POST',
  'contentType': 'application/json',
  'data': JSON.stringify({name: API.createItem()}),
  'success': API.callback,
};
// API.getItems(function(data) {
//   console.log(data);
// });
//
// console.log(API.BASE_URL);
$.ajax(settings);