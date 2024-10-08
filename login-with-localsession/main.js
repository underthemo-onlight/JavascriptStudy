"use strict"

function saveLocalStorage(status, id) {
    localStorage.setItem('statusLogin', status)
    localStorage.setItem('id', id)
}

function login() {
    //값 비교
    let id = document.getElementById('id').value
    let pw = document.getElementById('pw').value

    if(id === pw) {
        saveLocalStorage(true, id)
        changePage()
    } else {
        saveLocalStorage(false)
    }
}

function logout() {
    saveLocalStorage(false)
    changePage()
}

function changePage(){
    let changePage = document.getElementById('login')

    if(localStorage.getItem('statusLogin') === 'true') {
        changePage.innerHTML = `
        ${localStorage.getItem('id')}로 로그인되었습니다.
        <button onclick="logout()">logout</button>
        `
    } else {
        changePage.innerHTML = `
        ID: <input type="text" id="id"/><br/>
        PW: <input type="text" id="pw"/><br/>
        <button onclick="login()">login</button>
        `
    }
    
}

changePage()

