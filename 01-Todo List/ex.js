function keyCodeCheck() {
    // console.log(window.event)

    if(window.event.keyCode === 13 && todoInput.value !== '') {
        createTodo()
    }
}
const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', () => {
    if(todoInput.value !== '') {
        createTodo()
    }
})

function createTodo() {
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    const todoList = document.querySelector('#todoList');
    const todoInput = document.querySelector('#todoInput')

    newSpan.textContent = todoInput.value;

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
        
    todoInput.value='';

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');
    })

    newLi.addEventListener('dblclick',() => {
        newLi.remove();
    })


    console.log(newLi)
    console.log(todoList)
}


function removeList() {
    const liList = document.querySelectorAll('#todoList li')
    
    for (let i = 0; i < liList.length; i++) {
        liList[i].remove();
    }
}