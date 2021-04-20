
// Change theme

let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme__button');

themeButton.onclick = function () {
    page.classList.toggle('light__theme');
    page.classList.toggle('dark__theme');
};


let form = document.querySelector('.todo__form');
let input = document.querySelector('.todo__input');
let list = document.querySelector('.todo__list');
let item = document.querySelector('.todo__item');
let items = document.querySelectorAll('.todo__item');
let button = document.querySelector('button');
let buttons = document.querySelectorAll('button');
button.setAttribute('button', 'button');


// добавление новой задачи
form.onsubmit = function(evt) {
    evt.preventDefault();
    let newItem = document.createElement('li')
    let checkButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    checkButton.setAttribute('type', 'button');
    checkButton.classList.add('button');
    checkButton.classList.add('check__button');
    deleteButton.classList.add('delete__button');
    
    newItem.textContent = input.value;
    input.value = '';
    newItem.classList.add('todo__item');
    
    newItem.append(checkButton, deleteButton);
    
    list.append(newItem);
};

let checkButton = document.querySelector('.check__button');
let checkButtons = document.querySelectorAll('.check__button');

let clearCompletedButton = document.querySelector('.button__clear');

// отметить выполнение задачи

for (let button of buttons) {
    if (button.classList.contains('check__button'))
    button.onclick = function () {    
        button.parentNode.classList.add('completed');}
}

// удаление задачи из списка 
for (let button of buttons) {
    if (button.classList.contains('delete__button'))
    button.onclick = function () {
        button.parentNode.classList.add('delete');}
    }


let completedItem = document.querySelector('.completed');
let completedItems = document.querySelectorAll('.completed');


    clearCompletedButton.onclick = function () {
        let completedItem = item.classList.contains('completed');
    for (let completedItem of completedItems)
        item.classList.add('delete'); 
        console.log(completedItems);}