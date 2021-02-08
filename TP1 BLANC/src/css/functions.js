//Au clic sur le bouton du formulaire, il faut récupérer le contenu du champ (vous pouvez rajouter un attribut ID 
//ou utiliser un sélecteur prenant en compte le name) et ajouter un article dans la section ayant pour ID news 
//(le contenu HTML de l’article provient du champ input)

let boutonSubmit = document.querySelector('#click');
boutonSubmit.addEventListener("click", function(e) {
    e.preventDefault()
    let contenue = document.getElementById("champ").value;
    let art = document.createElement('article');
    art.innerHTML = contenue;
    let section = document.querySelector('#news');
    section.appendChild(art);
});

function ajouterArticle(){
    let contenue = document.getElementById("champ").value;
    let art = document.createElement('article');
    art.innerHTML = contenue;
    let section = document.querySelector('#news');
    section.appendChild(art);
}


//Au clic sur le bouton du formulaire il faut vérifier l'unicité de l’article. 
//Si article non unique, alors on affiche un message d’erreur au début du formulaire. Le message doit être de couleur rouge.