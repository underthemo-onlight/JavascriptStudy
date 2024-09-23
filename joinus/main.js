"use strict"

let resultNode = document.getElementById('result')
let msg = ''

function printResult(msg) {
    resultNode.innerHTML = msg
    console.log(msg)
}

function join(){
    let nameNode = document.getElementsByName('username')

    msg = `이름: ${nameNode[0].value} <br>`
    hobbies()
    gender()
    printResult(msg)
}

function hobbies() {
    let hobbyNode = document.getElementsByName('hobby')

    msg += '취미: '
    for(let i = 0; i < hobbyNode.length; i++){
        msg += `${hobbyNode[i].value} `
    }

    msg += `<br>`
}

function gender() {
    let genderNode = document.getElementsByName('gender')

    msg += `성별: ${genderNode[0].value}`
}