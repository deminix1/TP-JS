function insererNews(articles){
    console.log(articles['id'])

    for (let i = 0; i < articles.length; i++) {
        let art=new Article(articles[i]['id'],articles[i]['titre'],articles[i]['description']);
        art.createArticle(art);
    }
    
}