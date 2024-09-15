"use strict"

let resultNode = document.getElementById('result')
let wordlist = new Array()

function printResult(array) {
    let result = `<ul>`
    array.forEach((value) => {
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
    let resultArray = wordlist.map((value) => {
        return value.toUpperCase()
    })
    printResult(resultArray)
    return
}

//단어 길이 비교 
function wordFilter() {
    let resultArray = wordlist.filter((value) => {
        if(value.length >= 5){
            return value
        }
    })
    printResult(resultArray)
    return
}

//순서대로 정렬
function wordSort() {
    let duplicateArray = [...wordlist]
    duplicateArray.sort()
    printResult(duplicateArray)
    return
}