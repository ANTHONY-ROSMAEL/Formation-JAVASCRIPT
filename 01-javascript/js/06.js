/*----------------------------
        LES FONCTIONS
----------------------------*/

//function bonjour() {   // les instructuins se place entre les accolades
    alert("bonjour ! ");
}

// j'exécute ma fonction et je déclenche ces instructions.
//bonjour();

// ici la fonction défini deux arguments.
//au moment de l'exécuter nous affecterons une valeur 
//à chaque arguments. Ainsi, prenom sera égal à rosmael et nom égal à ANTHONY.

function ditBonjour(prenom , nom){
    
    console.log(prenom +" "+ nom);
    document.write(
        bonjour
        +prenom
        +""
        +nom

    );
}

ditBonjour( "rosmael", "anthony");
ditBonjour("nia", "vitalis");

/*******************************************
 EXERCICE:
 créez une fonction permettant 
 d'éffectuer l'addition de deux nombres 
 (nb1 et nb2)
 ------------------------------------------*/

function nombre (nb1, nb2) {
console.log(nb1+nb2);
    
 }

nombre(2 , 4);

//creez une fonction permettant d'éffecter le calcul de la TVA d'un montant HT.
//sachant que le montant de la TVA peut varier:
//retourner le montant TTC.

function calculTva (montantHt, tauxTva=8.5){
    return montantHt + (montantHt* (tauxTva / 100) );


}
var montantTtc1 =calculTva(10);
var montantTtc2 =calculTva(10,5.5); //5.5 la TVA

console.log(montantTtc1);
console.log(montantTtc2);

//----------------------------------------------
//creer une fonction permettant d'effectuer la 
//conversion d'un montant de EURO en DOLLARS US
//---------------------------------------------

function euroToUs (montantEuro, tauxConversion=1.1035) {
    return montantEuro*tauxConversion;
}
    var montantEur=20;
    var montantUS= euroToUs (montantEur);
    console.log(
        montantEur 
        +"€ en dollars donne : "
        +montantUS 
        +"$"
    );
    
   
    

    



