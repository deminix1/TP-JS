class Article {
    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#newsVue');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.addClass('title');
        newArticle.attr('id', this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if ($(h3s[i]).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new Error('Erreur article deja existant');
            }
        }
    }

    checkValue() {
        if (this.title === '') {
            throw new Error('Title vide');
        }

        if (this.description === '') {
            throw new Error('Description vide');
        }
    }

    addArticle() {
        clearErrors();

        try {
            this.checkValue();
            this.checkArticleUnicity()
        } catch (error) {
            addError(error.message, $('#addNewsForm'));
            return false;
        }

        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback) {
        button.click(callback);
    }

    static getNextId() {
        let article = $('article:last');

        if (article.length == 0)
            return 1;

        return article.attr('id') + 1;
    }
}
const ROUGE = '#FF0000'; //écrire en MAJ par convention
const BLEU = '#0000FF';
const VERT = '#008000';

const ALLNEWSJSON = `[
						{"id": "1", "title": "News 1", "description": "Ma super news 1"},
						{"id": "2", "title": "News 2", "description": "Ma super news 2"},
						{"id": "3", "title": "News 3", "description": "Ma super news 3"}
					]`;
function bindButton(button) {
    button.click(function(event) {
        event.preventDefault();
        let title = $('input[name="titleToAdd"]');
        let description = $('textarea[name="descriptionToAdd"]');
        let article = new Article(Article.getNextId(), title.val(), description.val());

        if (article.addArticle()) {
            title.val('');
            description.val('');
        }

        return false;
    });
}

function clearErrors() {
    $('.error').remove();
}

function addError(message, parent) {
    let error = $('<p></p>');
    error.html(message);
    error.css('color', ROUGE);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = $(this).parent().find('p');

    logMessageWithDate(p.html());
}

function switchTab() {
    $('.onglet').hide(); //on cache tous les éléments

    $($(this).data('target')).show(); //on affiche uniquement le tab que l'on veut
}
function logMessageWithDate(message){
	let today = new Date();
	console.log(today.toLocaleString() + ' : ' + message );
}
iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let titles = $('.title');
titles.each(function() {
    logMessageWithDate($(this).html())
});

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');
buttons.each(function() {
    $(this).click(viewdetailClick);
});

let tabs = $('.tab');
tabs.each(function() {
    $(this).click(switchTab);
});
/*
let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element) { //on parcours un élément JSON ici donc pas besoin de conversir en JQuery
    console.log(element);

    let a = new Article(element.id, element.title, element.description);
    a.addArticle();
});
*/
$.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=fr&apiKey=9b4e42c6404c48cab0f04cb200654d6c",
        method: "GET",
        dataType: 'jsonp',
        cors: true,
        contentType: 'application/json',
        secure: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(""));
        },
        success: function(data) {
            console.log(data);
        }
    })
    .done(function(data, textStatus, xhr) {
        if (xhr.status >= 300 && xhr.status < 400)
            console.log('Attention redirection');

        console.log(data);

        data.articles.forEach(article => function() {
            let a = new Article(Article.getNextId(), article.title, article.description);
            a.addArticle();
        });
    })
    .fail(function(xhr, textStatus, error) {
        console.log(xhr.status);
    });
function iterate(){
	for (let i = 0; i < 5; i++) {
		logMessageWithDate(i);
		
		if (i === 0) 
			logMessageWithDate(VERT); 
		else if (i % 2 === 0) 
			logMessageWithDate(ROUGE); 
		else 
			logMessageWithDate(BLEU); 
	}
}
const newsTemplate = `<article>
			              <h3  class="title" :style="isClicked ? { 'color': 'green'} : {'color': 'red'}">{{ article.title }}</h3>
                          <p>{{ article.description }}</p>
			              <button @click="changerTitre(article.description)">View detail</button>
		              </article>`;

const newsComponent = {
    props: ['article'],
    data: function() {
        return {
            isClicked: false,
        }

    },
    template: newsTemplate,
    methods: {
        changerTitre: function(bite) {
            this.isClicked = !this.isClicked
            console.log(bite)
        }
    }
};
const Counter = {
    data() {
        let articles = JSON.parse(ALLNEWSJSON);
        let counter = articles.length;
        let title = 'article';

        if (counter > 1)
            title = 'articles';

        return {
            counter: counter,
            title: title,
            articles: articles,
        };

    }
};

Vue.createApp(Counter).component('news-item', newsComponent).mount('#newsVue');