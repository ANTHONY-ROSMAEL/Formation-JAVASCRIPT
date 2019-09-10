
/**************************************************
 
 *              LES CONDITIONS 
 *
 
 * ************************************************
 */






var majoriteLegaleFr=18;
if( 19 >=majoriteLegaleFr){
    /**comme 19 est bien supérieur à 18(majoriteLegalFr);
     * alors les instructions de ma condition sont exécutées.
     * Ce qu'il y a entre les accolades.
     */
   alert("bienvenue ! ");
}

else if (18==majoriteLegalFr){
    alert("c'est un peu juste non?!");
    //*comme 18 est égale à la majoriteLegaleFr la condition s'exécute.

}

//*le else n'est pas obligatoire 
// si aucune des conditions si dessus n'ont été validés;
//alors je rentre dans le else.
else{
   alert("va voir chez google...");

}
//* creer une fonction permettant de vérifier l'age d'un visiteur
// avec prompt.
//Si il a la majorité légale, alors je lui souhaite 
//la bienvenue, sinon, je fais une redirection sur google après 
//lui avoir signaler le soucis.

function visiteur(){
   var old=parseInt
(prompt("quel âge as tu?"));
console.log( old,"votre âge");

var majorite=18;
if(old>=majorite){
    alert("bienvenue");
}
}

//correction: creer une fonction permettant de verifier 
// la majorité d'un utilisateur.

const majoriteLegal=18;
function utilisateurEstMajeur(age){
  if(age>=18){
       return true;
    } 
    else{
        return false;
    }
}

//correction : demander l'age à l'utilisateur.

const age=parseInt(prompt("bonjour,quel age avez vous?"));

//correction: vérification de son age.
 if(utilisateurEstMajeur(age)){
   alert("bienvenue sur mon site réservé aux majeurs !");
 }
 else {                                                      //redirection en cas d'échec.
  alert("vous devez être majeur pour accéder à ce site.");
 }

/*********************************************************
 * 
 *               LES OPERATEURS DE COMPARAISON 
 * 
 * // l'operateur de comparaison "=="signifie : égal à .
// il permet de verifier que 2 variables sont identiques.

//l'operateur de comparaison "===" signifie : strictement 
 égal à. il va comparer la valeur, mais aussi le type !

 // exemple:
// if( 14=="14" ){} = true 

// if( 14==="14" ){} = false

// if( 14===14 ){} = true





 //l'operateur "!=" : Different de .
 //l'operateur "!==" : strictement Different de.

 // exemple:
// if( 14=="14" ){} = true 

// if( 14==="14" ){} = false

// if( 14===14 ){} = true

 * 
 *********************************************************/

/* ----------------------------------------------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen d'un email et d'un mot de passe.
Je dois saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une "alert" m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
----------------------------------------------------------------------- */

// // -- BASE DE DONNEES
const email = "wf3@hl-media.fr";
const mdp = "wf3";



var identification=prompt("saisissez votre identifiant","votre mail");


if (identification===email){
   
var motDePasse=prompt("saissisez votre mot de passe","votre mot de passe");

if(motDePasse===mdp){
alert("Bienvenue sur votre espace !")
}


else{
    alert("votre mot de passe est incorrect");
}

} 
else{
    alert("votre identifant est inccorect");

    
}

/* -------------------------------------------|   |------------- *\
        /                                              |   |                \
       /           ~         LES OPERATEURS LOGIQUES          ~              \
      /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
        |                                                                   |
        |   # L'Opérateur ET : &&. Si la combinaison email et emailUser     |
        |   correspond, ET la combinaison mdp et mdpUser correspond.        |
        |                                                                   |
        |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT         |
        |   correspondre pour être validée.                                 |   
        |   Ex. if(emailUser === email && mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur OU : ||. Si la combinaison email et emailUser     |
        |   correspond, ET / OU la combinaison mdp et mdpUser correspond.   |
        |                                                                   |
        |   --> Dans cette condition, au moins l'une des deux doit          |
        |   correspondre pour être validée.                                 |
        |   Ex. if(emailUser === email || mdpUser === mdp) { ... }          |
        |                                                                   |
        |   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -   |
        |                                                                   |
        |   # L'Opérateur " ! " ou encore NOT.                              |
        |   Il signifie le CONTRAIRE DE, DIFFERENT DE                       |
        |                                                                   |
        |   var monUtilisateurEstApprouve = true;                           |
        |   if ( !monUtilisateurEstApprouve ) { ... }                       |
        |   Si mon utilisateur n'est pas approuvé                           |
        |                                                                   |
        |  Revient à écrire                                                 |
        |  if ( monUtilisateurEstApprouve === false ) { ... }               |
        |                                                                   |
        \*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _*/

        





