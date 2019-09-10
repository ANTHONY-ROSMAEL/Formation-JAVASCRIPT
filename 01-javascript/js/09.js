/******************
 *  LES BOUCLES
 * ****************/
 
/** pour I=0; tant que I est strictement inférieur ou égale à 10; alors j'incrémente
 * I de 1.
 */

 for(let i = 0 ; i<=10; i++) {
     document.write("<p>Insctruction exécutée : <strong>" +i+ "</strong></p>");
 }


 document.write("<hr>");

 // 2 eme Boucle possibles.

 let j = 0;
 while( j<= 10 ) {
    document.write("<p>Insctruction exécutée : <strong>" +j+ "</strong></p>");
    j++;//l'incrementation se fait apres.
 }


document.write("<hr>");

/************
 * exercice
 ************/

const Prenoms=["Jean", "Marc","Matthieu","Paul","Luc","Hugo","jacques"];

/**CONSIGNE : grâce à une boucle FOR ou autre....affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

 let h=Prenoms;
 while(h<=6){
    document.write("<p> ," +h+"</p>");
    h++;
 }
console.log(h);

/**AUTRE MANIERE */

//MANUELLEMENT DANS LA CONSOLE

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);

//AUTOMATIQUEMENT
for (let index=0; index<=6; index++){
    console.log(Prenoms[index]);
}

//variante, calcul automatique de la dimension du tableau.
console.log('-------------');
for(let index=0; index< Prenoms.length; index++){
    console.log(Prenoms[index]);
}


//exercice 2

//creer un tableau qui contient les valeurs suivantes:1,2,3,4,5,6,7,8,9
//faire une boucles qui permet d'additionner toute ces valeurs.

//1 Prendre chaque élément séparément
//2 Additionner le 1 avec le 2 et ainsi de suite...

const nombre =[1,2,3,4,5,6,7,8,9];

//declarer une variable permettant de garder en memoire la somme
let resultat=0;

//creez une boucle pour Addition les nombres
for ( let A=0; A<nombre.length; A++ ){
    resultat=( nombre[A]+ resultat);
}
console.log(resultat);


/*
Exercice : Vos meilleurs choix

    Crée un tableau qui contient 3 nom d'acteurs
    Pour chaque acteur, affichez dans la console par exemple : "Le numero 1 est Stalone"

Bonus : transformez en : "Le premier est Stalone", Le deuxième est Cruiz", etc...
*/
const acteurs=["eddy","idriss","jachie"];
const quantieme=["premier","deuxieme","troisieme"];

console.clear();

for(let i =0; i<acteurs.length; i++){
    
    console.log(acteur[i]);
    console.log('le numero' +i+ 'est'+acteur[i]);
    console.log(  )

}

/*
    EXERCICE :
    Utilisez la méthode getMonth() de l'objet Date pour retourner 
    le numéro du mois en cours : 0 pour janvier, 1 pour février 
    et ainsi de suite jusqu'à 11 pour décembre : var mois = (new Date).getMonth().

    Ecrivez un petit script qui retourne le nom complet du mois dans une alerte. 
    Servez-vous d'un tableau pour stocker les noms des mois.
*/


var mois = new Date().getMonth();
console.log(mois);
const moi=["janvier","fevrier","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","decembre"];

console.log(moi [mois]);

