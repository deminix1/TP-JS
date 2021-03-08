let ajou = $("#ajout");
let rec = $('#recherche');
let recAR = $('#recAR');
let addAR = $('#addAR');

recAR.css("display", "none");
ajou.css("display", "none");

function rech() {
    
    //ajou.style.display= "none";
    ajou.css("display", "none");
    //rec.style.display= "block";
    rec.css("display", "block");
    recAR.css("display", "none");
    addAR.css("display", "block");
}
function ajout() {

    //ajou.style.display= "block";
    ajou.css("display", "block");
    //rec.style.display= "none";
    rec.css("display", "none");
    recAR.css("display", "block");
    addAR.css("display", "none");
    
}