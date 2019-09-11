/***********************************
 * LA MANIPULATION DES CONTENUS
 **********************************/

 //3 façon de créer une fonction:
 //1 création d'une fonction qui s'appelle"l"

 function l (e){
     console.log(e);
 }

 //2 identique, sauf que la fonction est stocké dans une variable "l"
 l=function (e){
     console.log(e);
 }

 //3 Identique, mais avec des fonctions fléchés ECMA 6.
 l = e => console.log(e);

 /**je souhaite récupérer mon lien google */

 const google=document.getElementById("google");
 l (google);

 //---Maintenant je veux recuperer le lien uniquement

 //A---- le lien vers lequel pointe la balise 

 l(google.href);

 //B---: connaitre l'ID de la balise 
 l(google.id);

 //C---: connaitre la class
 l(google.className);
  //D----le texte de la balise 
  l(google.textcontent);

  //---comment faire pour modifier ce texte?
  google.textContent="mon lien google";
  l(google.textContent);

  
  //je crée un élement span que je stock dans ma constante.
  const span = document.createElement("span");
   
  
  // je veux donner un ID
   span.textContent= 'mon jolie texte en js';

   
   
   //j'ai placer à l'interieur de la balise google mon span.
   google.appendChild(span);



/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/


const input=document.createElement("input");

input.id="mon boutton";

l(input);
//ajouter un champ input dans le body du document.
document.body.appendChild(input);

//trouvez la solution pour recuperer la saisie de l'utilisateur.

// permet d'affchez la valeur du champ'input'
function afficherLaSaisie(){
    console.log(input.value);
}
//permet de déclarer un écouteur d'évenements sur le champ input.
input.addEventListener("change", afficherLaSaisie);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */


const h1=document.createElement("h1");//creation d'un element h1
const a=document.createElement("a");//creation d'un lien 

a.textContent='les aprenantessontcrévés';
a.href="#";
h1.appendChild(a);//on place la balise "a" dans la balise h1
document.body.appendChild(h1);//puis la balise h1 dans la balise body 

a.style.color="red";
a.style.textDecoration="none";
