// DOM elements
const form = document.querySelector('.content__form').children[0];
const formInput = document.querySelector('.content__form__input');
const itemList = document.querySelector('.content__list').children[0];

// EventListeners

eventsListeners();

function eventsListeners() {
  form.addEventListener('submit', addItemToList);
  form.addEventListener('onkeyup', addItemToList);
  itemList.addEventListener('click', removeItemFromList);
  document.addEventListener('DOMContentLoaded', displayItemsFromLocalStorage);
}

// Functions

function addItemToList(e) {
  e.preventDefault();

  //Creating list item and delete button.
  let newItem = document.createElement('li');
  let newDeleteButton = document.createElement('button');

  newItem.className = 'content__list__item';

  if (formInput.value != "") {
    newItem.innerText = formInput.value;
    itemList.appendChild(newItem);
    addItemToLocalStorage(formInput.value);
  }

  newDeleteButton.className = 'content__list__delete';
  newDeleteButton.innerText = 'X';
  newItem.appendChild(newDeleteButton);

  // Reset input.
  formInput.value = "";
}

function removeItemFromList(e) {
  e.preventDefault();

  // Only if DELETE is clicked.
  if (e.target.className == 'content__list__delete') {
    let index = e.target.parentElement.id;
    let currentItems = getItemsFromLocalStorage();

    let confirm = window.confirm('Are you sure to delete this item from the list?');
    if (confirm == true) {
      e.target.parentElement.remove()

      // Find index of element.
      if (index > -1) {
        currentItems.splice(index, 1);
      }
      localStorage.setItem('list-items', JSON.stringify(currentItems));
    };
  }
}

function addItemToLocalStorage(item) {
  let currentItems = getItemsFromLocalStorage();
  currentItems.push(item);
  localStorage.setItem('list-items', JSON.stringify(currentItems));
}

function getItemsFromLocalStorage() {
  let itemsLocalStorage = localStorage.getItem("list-items");
  let itemsList = [];

  if (itemsLocalStorage != null) {
    itemsList = JSON.parse(itemsLocalStorage);
  };

  return itemsList;
}

function displayItemsFromLocalStorage() {
  let currentItems = getItemsFromLocalStorage();

  currentItems.forEach((item, index) => {

    //Creating list item and delete button.
    let newItem = document.createElement('li');
    let newDeleteButton = document.createElement('button');

    newItem.setAttribute('id', index);
    newItem.className = 'content__list__item';

    newItem.innerText = item;
    itemList.appendChild(newItem);

    newDeleteButton.className = 'content__list__delete';
    newDeleteButton.innerText = 'X';
    newItem.appendChild(newDeleteButton);
  })
}