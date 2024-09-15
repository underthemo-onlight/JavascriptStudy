let resultNode = document.getElementById('result')
let formNode = document.getElementById('form')

let id = ''
let pw = ''

let idValid = false
let pwValid = false

function printResult(target, msg) {
    target.innerHTML = msg
}

function idValidCheck() {
    let idNode = document.getElementById('id')
    id = idNode.value
    let idErrorNode = document.getElementById('idErrorMsg')

    if(id == null || id.trim().length == 0) { //내용이 없거나 공백 제거
        idValid = false
        printResult(idErrorNode, 'ID를 입력해주세요.')
    } else { 
        idValid = true
        printResult(idErrorNode, '')
    }
    return
}

function pwValidCheck() {
    let pwNode = document.getElementById('pw')
    pw = pwNode.value

    let pwErrorNode =  document.getElementById('pwErrorMsg')
    let regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/

    if(pw == null || pw.trim().length == 0) {
        pwValid = false
        printResult(pwErrorNode, '패스워드를 입력해주세요.')
    } else if(!regExpPassword.test(pw)){
        pwValid = false
        pwErrorNode.innerHTML = '패스워드는 영문자, 숫자 조합에 6자 이상입니다.'
    } else { 
        pwValid = true
        printResult(pwErrorNode, '')
    }
    return
}

function login() {
    idValidCheck()
    pwValidCheck()
    if(idValid && pwValid) {
        printResult(resultNode, '로그인됐습니다.')
    } else {
        printResult(resultNode, '로그인에 실패했습니다.')
    }
}