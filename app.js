// DOM elements
const form = document.querySelector('.content__form').children[0];
const formInput = document.querySelector('.content__form__input');
const itemList = document.querySelector('.content__list').children[0];
const deleteAll = document.querySelector('.delete_all');

// EventListeners

eventsListeners();

function eventsListeners() {
  form.addEventListener('submit', (e) => addItemToList(e));
  form.addEventListener('onkeyup', (e) => addItemToList(e));
  itemList.addEventListener('click', (e) => removeItemFromList(e));
  document.addEventListener('DOMContentLoaded', (e) => displayItemsFromLocalStorage(e));
  deleteAll.addEventListener('click', (e) => deleteAllItems(e))
}

// Functions

function addItemToList(e) {
  e.preventDefault();

  //Creating list item and delete button.
  let newItem = document.createElement('li');
  let newDeleteButton = document.createElement('button');

  newItem.className = 'content__list__item';

  if (formInput.value != "") {
    let itemExist = false;
    let currentItems = getItemsFromLocalStorage();

    // Item already exist in LocalStorage?
    currentItems.forEach((item) => { 
      if (formInput.value === item) { 
        itemExist = true; 
      }
    });

    if (!itemExist) {
      addItemToLocalStorage(formInput.value);
      newItem.innerText = formInput.value;
      itemList.appendChild(newItem);

      newDeleteButton.className = 'content__list__delete';
      newDeleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
      newItem.appendChild(newDeleteButton);
      
      // Reset input.
      formInput.value = "";
    } else {
      formInput.classList.add('error');
      setTimeout(() => {
        formInput.classList.remove('error');
      }, 2000);

    }
  }
}

function removeItemFromList(e) {
  e.stopPropagation();
  e.preventDefault();

  if (e.target.className == 'content__list__delete') {

    let currentItems = getItemsFromLocalStorage();

    // Alert for confirm delete.
    let confirm = window.confirm('Are you sure to delete this item from the list?');
    if (confirm == true) {

      currentItems.forEach((item, index) => {
        if (e.target.parentElement.innerText === item) {
          currentItems.splice(index, 1);
        }
      });

      e.target.parentElement.remove();

      localStorage.setItem('list-items', JSON.stringify(currentItems));
    }

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
  }

  return itemsList;
}

function displayItemsFromLocalStorage() {
  let currentItems = getItemsFromLocalStorage();

  currentItems.forEach((item, index) => {

    //Creating list item and delete button.
    let newItem = document.createElement('li');
    let newDeleteButton = document.createElement('button');

    newItem.className = 'content__list__item';

    newItem.innerText = item;
    itemList.appendChild(newItem);

    newDeleteButton.className = 'content__list__delete';
    newDeleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    newItem.appendChild(newDeleteButton);
  })
}

function deleteAllItems() {
  let confirm = window.confirm('Are you sure you want to delete all items?')
  if (confirm == true) {
    localStorage.clear();
    itemList.innerHTML = '';
  }
}