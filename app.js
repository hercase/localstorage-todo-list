import { addItemToList, removeItemFromList, displayItemsFromLocalStorage, deleteAllItems } from "./list";

// DOM elements
const form = document.querySelector('.content__form').children[0]
const itemList = document.querySelector('.content__list').children[0]
const deleteAll = document.querySelector('.delete_all')

// EventListeners

eventsListeners()

function eventsListeners() {
  form.addEventListener('submit', (e) => addItemToList(e))
  form.addEventListener('onkeyup', (e) => addItemToList(e))
  itemList.addEventListener('click', (e) => removeItemFromList(e))
  document.addEventListener('DOMContentLoaded', (e) => displayItemsFromLocalStorage(e))
  deleteAll.addEventListener('click', (e) => deleteAllItems(e))
};