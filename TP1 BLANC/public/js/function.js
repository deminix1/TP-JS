

function boucle05(){
    for (let pas = 0; pas < 5; pas++) {
        if (pas==0){
            console.log(vert);
        }
        if (pas%2==0){
            console.log(rouge);
        }else{
            console.log(bleu);
        }
    }
}

function getContH1(){
    let h1 = document.querySelector('h1');
    console.log(h1);
}

function getContH2(){
    let h2 = document.querySelectorAll('#titleNews');
    console.log(h2);
}

function getContH3(){
    let h3 = document.querySelectorAll('.title');
    console.log(h3);
    return h3;
}


let btnSubmit = document.querySelector('#click');
btnSubmit.addEventListener("click", function(e) {
    e.preventDefault()
    let newArticle=document.createElement('article');
    let h3=document.createElement('h3');
    h3.className="title";
    let news=document.querySelector('#news');
    let text = document.getElementById("text").value;
    if(verifUnicite(text)){
        h3.innerHTML=text;
        h3.id='title';
        newArticle.append(h3);
        news.append(newArticle);
    }
});

    
function verifUnicite(text){
    h3=getContH3();
    h3.forEach(t => {
        if (t.innerHTML.localeCompare(text)==0){
            erreur=document.getElementById('errorname');  
            erreur.style.color=rouge;
            erreur=document.getElementById('errorname').innerHTML="L'article existe deja";  
        }
    }); 
}

function messageDate(mess){
    let date=new Date();
    console.log(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+" => "+mess);
}







