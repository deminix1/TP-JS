const newsTemplate = `<article>
			              <h3  class="title" :style="cliquer ? { 'color': 'green'} : {'color': 'red'}">{{ article.title }}</h3>
                          <p>{{ article.description }}</p>
			              <button @click="changerTitre(article.description)">View detail</button>
		              </article>`;

const newsComponent = {
    props: ['article'],
    data: function() {
        return {
            cliquer: false,
        }

    },
    template: newsTemplate,
    methods: {
        changerTitre: function(desc) {
            this.cliquer = !this.cliquer
            console.log(desc)
        }
    }
};