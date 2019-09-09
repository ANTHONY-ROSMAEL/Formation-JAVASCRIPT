
//EXERCICE

//*creation d'une fonction
//demander à l'utilisateur son prénom via un prompt
//je lui demande son age 
//calculer l'annee de naissance de l'utilisateur
//afficher le récapitulatif

function presentation() {


var prenom = prompt("Quel est votre prenom?", "votre prenom");
console.log(prenom);

var age =prompt("bonjour"+prenom+",quel age as-tu ?");
console.log(age);
console.log(typeof age);

var objetDate=new Date();
var dateDeNaissance=objetDate.getFullYear()-age;
alert("Tu es donc née en "+dateDeNaissance);

document.write(" bonjour "+prenom+" tu as " + age+ "!");









}
