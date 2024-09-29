"use strict"

function Product(name, price) {
    this.name = name
    this.price = price
}

let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000),
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000)
]

let productsNode = document.getElementById('productSelect')
let selectedNode = document.querySelector('.selected')

let selectedArray = new Array() 

function setting() {
    let defaultOption = document.createElement('option')
    defaultOption.text = '상품을 선택하세요'
    productsNode.appendChild(defaultOption)

    products.forEach((product, index) => {
        let productOption = document.createElement('option')
        let productText = document.createTextNode(`${product.name} - ${product.price}`)
        productOption.value = index
        
        productOption.appendChild(productText)
        productsNode.appendChild(productOption)
    })
}

function selectOption() {
    let selectedOption = document.getElementById("productSelect");
    let selectedIndex = selectedOption.value
    let product = products[selectedIndex]

    let existingIndex = selectedArray.findIndex(item => item.name === product.name)

    if(existingIndex !== -1) {
        selectedArray.splice(existingIndex, 1)
    } else {
        selectedArray.push(products[selectedOption.value])
    }
    
    updateList()
}

function updateList() {
    if(selectedArray) {
        selectedNode.innerHTML = '<h3>선택한 상품</h3>'
        let totalPrice = 0

        selectedArray.forEach((item) => {
            let itemLi = document.createElement('li')
            itemLi.innerHTML = `
                ${item.name} - ${item.price}`
            selectedNode.appendChild(itemLi)
            totalPrice += item.price
        })
        
        selectedNode.innerHTML += '<br/>'
        let totalResult = document.createElement('div')
        totalResult.innerHTML = `<strong>총액: ${totalPrice}</strong>`
        selectedNode.appendChild(totalResult)
        selectedNode.innerHTML += '<br/>'
    }
}

function payment(){
    if(selectedArray.length == 0) {
        alert('결제할 상품을 선택해야 합니다.')
    } else {
        
    }
}

setting()