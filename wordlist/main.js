"use strict"

let resultNode = document.getElementById('result')
let wordlist = new Array()

function printResult(array) {
    let result = `<ul>`
    array.forEach((value, index) => {
        result += `<li>${value}</li>`
    });
    result += `</ul>`
    resultNode.innerHTML = result
}

//배열에 단어 추가
function addArray() {
    let wordNode = document.getElementById('word')
    word = wordNode.value
    wordlist.push(word)
    printResult(wordlist)
    return
}

//대문자로 변환
function wordMap() {
    resultNode.innerHTML = `<ul>`
    for (let i = 0; i < wordlist.length; i++){
        resultNode.innerHTML += `<li> ${wordlist[i].toUpperCase()}`
    }
    resultNode.innerHTML += `</ul>`
    return
}

//단어 길이 비교 
function wordFilter() {
    resultNode.innerHTML = `<ul>`
    for (let i = 0; i < wordlist.length; i++){
        if(wordlist[i].length >= 5){
            resultNode.innerHTML += `<li> ${wordlist[i]}`
        }
    }
    resultNode.innerHTML += `</ul>`
    return
}

//순서대로 정렬
function wordSort() {
    let sortedWords = wordlist.sort()
    
    resultNode.innerHTML = `<ul>`
    for (let i = 0; i < sortedWords.length; i++){
        resultNode.innerHTML += `<li> ${sortedWords[i]}`
    }
    resultNode.innerHTML += `</ul>`
    return
}