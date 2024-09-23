"use strict"

let resultNode = document.getElementById('result')

function addList() {
    let todo = document.getElementById('todo')
    let newLiText = document.createTextNode(`${todo.value}`)

    let listTodo = document.createElement('li')
    listTodo.appendChild(newLiText)
    resultNode.appendChild(listTodo)

    listTodo.addEventListener('click', function() {
        console.log('remove')
        resultNode.removeChild(this)
    })

    todo.value = ''
}

