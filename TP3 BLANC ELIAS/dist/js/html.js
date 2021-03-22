
function bindButton(button) {
    button.onclick = function(event) {
        event.preventDefault();
        
        let title = $('input[name="titleToAdd"]');
        
        let description = $('textarea[name="descriptionToAdd"]');
        
        
        let article = new Article(0, title.val(), description.val());
        if (article.addArticle()) {
            title.value = '';
            description.value = '';
        }

        return false;
    };
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    $('.error').each(function() {
        if (errors) {
            while (errors.length > 0 && errors[0].parent() != null) {
                errors[0].parent().empty(errors[0]);
            }
        }
    });
}

function addError(message, parent) {

    let error = $("<p></p>").text("error").css('color', 'red');
    $(this).parent.prepend(error);
}

function viewdetailClick() {
    //let p = this.parentNode.querySelector('p');
    let p = $(this).parent($("p"));
    logMessageWithDate(p.html());
}
/*
function bindButton(button){
	button.onclick = function(event){
		
    	event.preventDefault();
    	let title = document.querySelector('input[name="titleToAdd"]');
        let description = document.querySelector('textarea[name="descriptionToAdd"]');
		
        let article = new Article(0, title.value, description.value);
		if(article.addArticle()){
			title.value = '';
            description.value = '';
        }
        
		return false;
	};
}

function clearErrors(){
	let errors = $('.error');

    if(errors){
        while(errors.length > 0 && errors[0].parentNode != null){
            errors[0].parentNode.removeChild(errors[0]);
        }        
    }
}

function addError(message, parent){
	let error = $('p');
    error.html(message);
    error.css("color", ROUGE);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick(){
    let p = this.parentNode.querySelector('p');
    logMessageWithDate(p.innerHTML);
}
*/