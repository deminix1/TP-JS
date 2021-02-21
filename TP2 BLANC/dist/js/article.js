function createArticleHtml(title) {
    id=getUniqueID();
    let art=new Article(id,title,"test "+id);
    let paragraph=document.createElement('p');
    paragraph.textContent=art.description;
    let newArticle = document.createElement('article');
    newArticle.id=art.id;
    let h3 = document.createElement('h3');
    let news = document.querySelector('#news');
    h3.innerHTML = art.titre;
    h3.classList.add('title');
    newArticle.append(h3);
    newArticle.append(paragraph);
    let btn=createButton(paragraph);
    newArticle.append(btn);
    news.append(newArticle);
}

function checkArticleUnicity(title) {
    let h3s = document.querySelectorAll('.title');

    for (let i = 0; i < h3s.length; i++) {
        if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
            let form = document.querySelector('#addNewsForm');
            addError('Erreur article deja existant', form);

            return false;
        }  
    }

    return true;
}

function addArticle(title) {
    clearErrors();

    if (!checkArticleUnicity(title)) {
        return false;
    }
    
    createArticleHtml(title);
    return true;
}

function createButton(description){
    var btn = document.createElement("BUTTON"); 
    var t = document.createTextNode("View detail");
    btn.appendChild(t);
    btn.addEventListener("click", function() {
        getDescription(description);
      });
    return btn;
}