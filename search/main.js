//api key 35a7479d9f614aa7831f9244dcba89a9
"use strict"

let searchInput = document.getElementById('searchInput')
let searchButton = document.getElementById('search')
let searchResult = document.getElementById('searchResult')

searchButton.addEventListener('click', function(){
    let searchTerm = searchInput.value
    console.log(`searching for ${searchTerm}`)

    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&language=ko&sortBy=publishedAt&apiKey=35a7479d9f614aa7831f9244dcba89a9`, true);
    xhr.onload = function(){
        if (xhr.status === 200) {
            //결과 데이터 획득.. 
            let result = xhr.responseText
            //받은 문자열을 object literal 객체로 변환.. 
            //만약 xml 형식의 데이터였다면.. xml 파싱.. 
            let resultObj = JSON.parse(result)
            //필요한 데이터를 추출한다..
            let articles = resultObj['articles']
            let resultTxt = ''

            for(let i = 0; i < articles.length; i++){
                let title = articles[i]['title']
                let author = articles[i]['author']
                let publishedAt = articles[i]['publishedAt']
                let url = articles[i]['url']
                let content = articles[i]['content']
                let urlToImage = articles[i]['urlToImage']
        
                resultTxt += `
                <div class="article">
                <div class="article-main">
                    <h2 class="article-title">${title}</h2>
                    <p class="article-info">
                        <span class="author">${author}</span>
                        <span class="publishedAt">${publishedAt}</span>
                        <a href=${url}>more</a>
                    </p>
                    <p class="article-content">${content}</p>
                </div>
                <img class="article-image" src=${urlToImage}/>
                </div>
                <hr/>
                `
            }
            searchResult.innerHTML = resultTxt
        } else {
            console.error('Error fetching news:', xhr.status);
            searchResult.innerHTML = '<p>Error fetching news. Please try again later.</p>';
        }
    }
    xhr.send()
  })