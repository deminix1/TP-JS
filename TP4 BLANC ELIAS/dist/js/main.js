iterate();


let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

$(".title").each(function() {
    logMessageWithDate($(this).html())
});

let button = document.querySelector('input[name="addNewsBtn"]');

bindButton(button);









$("article button").each(function() {
    $(this).attr('onclick', viewdetailClick)
});

let articles = JSON.parse(ALLNEWSJSON);
$.each(articles, function(i, article) {
    console.log(article)
    let a = new Article(article.id, article.title, article.description);
    a.addArticle();
});

/*
let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element){
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});

*/