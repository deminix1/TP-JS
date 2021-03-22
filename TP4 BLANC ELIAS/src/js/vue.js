const ArticleVue = {
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

Vue.createApp(ArticleVue).component('news-item', newsComponent).mount('#newsVue');