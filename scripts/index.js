/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

$.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
  console.log('api response:', response);
});

// API.createItem('pears', (newItem) => {
//   API.getItems((items) => {
//     console.log(items);
//   });
// });
console.log('foo')
API.getItems((items) => {
  const item = items[0];
  console.log('Hello world', items);

  API.updateItem(item.id, { name: 'foobar' }, (data) => {
    console.log('updated!', data);
  });
});
