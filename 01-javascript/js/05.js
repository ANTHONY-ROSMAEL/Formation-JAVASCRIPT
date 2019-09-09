/*-------------------------------------
    INCREMENTATION ET DECREMENTATION
--------------------------------------*/

//## ~~ INCREMENTATION ~~##//

var nb1= 1;
nb1=nb1+1;

// ecriture simplifié
// toujours par part de 1
nb1++;

//ecriture simplifier pour rajouter +2;

nb1=1;
nb1=nb1+2;

//ecriture simplifier

nb1+=2; //rajouter +2 à nb1 identique a nb1= nb1+ 2;
nb1+=5; // rajouter +5 à nb1 identique a nb1= nb1+ 5;

//## ~~ DECREMENTATION ~~##//

var nb1= 1;
nb1=nb1-1;

// ecriture simplifié
// toujours par part de 1
nb1--;
//ecriture simplifier

nb1-=2; 
nb1-=5; 

// SUBTILITE //
nb1=0;
nb1++; //nb1=nb1+1;
console.log(nb1);//affiche 1

nb1=0;
console.log(nb1++);// 0, ici js affiche d'abord nb1 avant de faire l'incrementation.
console.log(nb1);//1

nb1=0;
console.log(++nb1);// 1, ici js affiche fait l'incrementation avant d'afficher nb1.








