// DOM elements
const form = document.querySelector('.content__form').children[0];
const formInput = document.querySelector('.content__form__input');
const itemList = document.querySelector('.content__list').children[0];

// EventListeners
form.addEventListener('submit', addItemToList);
form.addEventListener('onkeyup', addItemToList);
itemList.addEventListener('click', removeItemFromList);

// Functions

function addItemToList(e) {
  e.preventDefault();

  //Creating list item and delete button.
  let newItem = document.createElement('li');
  let newDeleteButton = document.createElement('button');

  newItem.className = 'content__list__item';
  
  if (formInput.value != ""){
    newItem.innerText = formInput.value;
    itemList.appendChild(newItem);
  }

  newDeleteButton.className = 'content__list__delete';
  newDeleteButton.innerText = 'X';
  newItem.appendChild(newDeleteButton);

  // Reset input.
  formInput.value = "";
}

function removeItemFromList(e) {
  e.preventDefault();

  if(e.target.className == 'content__list__delete'){
    let confirm = window.confirm('Are you sure to delete this item from the list?');
    if( confirm == true) { e.target.parentElement.remove() };
  }  
}