const apiKey = 'b1ef19eef47940cd91f1de8e75122890';

function getNews() {
    fetch(`https://newsapi.org/v2/top-headlines?country=ru&apiKey=${apiKey}`)
    .then(response => response.json()).then(data => {
        const articles = document.querySelectorAll('article'); data.articles.slice(0, 8).forEach((news, index) => {
            articles[index].querySelector('h3').textContent = news.title; articles[index].querySelector('p').textContent = news.description;
            articles[index].querySelector('img').src = news.urlToImage; articles[index].querySelector('img').alt = news.title;
        });
    })
    .catch(error => {
        console.error('Произошла ошибка при получении новостей:', error);
    });
}

getNews();
setInterval(getNews, 300000);