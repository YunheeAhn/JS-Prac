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
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button');
    const todoInput = document.querySelector('#todoInput')
    const todoList = document.querySelector('#todoList')

    newLi.appendChild(newBtn)
    newLi.appendChild(newSpan)
    todoList.appendChild(newLi)

    newSpan.textContent = todoInput.value; // 텍스트추가

    todoInput.value = '';

    newLi.addEventListener('dblclick', () => {
        newLi.remove()
    })

    newBtn.addEventListener('click', () => {
        newLi.classList.add('complete')
    })
}

function removeList() {
    const liList = document.querySelectorAll('#todoList li')
    console.log(liList)

    for (let i = 0; i < liList.length ; i++) {
        liList[i].remove()
    }
}