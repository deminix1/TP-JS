class Article{
    id;
    titre; 
    description;

    constructor(id, titre, description){
        this.id=id;
        this.titre=titre;
        this.description=description;
    }


    createArticle(article){
        let paragraph=document.createElement('p');
        paragraph.textContent=article.description;
        let newArticle = document.createElement('article');
        newArticle.id=article.id;
        let h3 = document.createElement('h3');
        let news = document.querySelector('#news');
        h3.innerHTML = article.titre;
        h3.classList.add('title');
        newArticle.append(h3);
        newArticle.append(paragraph);
        let btn=createButton(paragraph);
        newArticle.append(btn);
        news.append(newArticle);
    }
}