//alert("mon fichier fonctionne ! ");
// deux slach pour faire un commentaire inline
/* <- ici je peux faire un commentaire sur plusieur ligne
raccourci:
-CTRL + :
-SHIFT + alt + A
*/
//--1 : déclarer une variable( c'est comme une boite )en js est VAR il ne doit pas y avoir d'accent.
var prenom;

//--2: affecter une valeur a la variables "prénom"
prenom="rosmael";

//--3: afficher la valeur de ma variable dans la console (inspecter)
console.log(prenom);


/*----------LES VARIABLES-----------*/



//--les types de variables 
console.log(typeof prenom);//ma variables prénom contient une chaine de caractère
//--(string) le typeof me permet de connaitre le type de la valeur de la variable.

//--déclaration et affectation d'un nombre.
var age = 21; 
//--connaitre son type
console.log(typeof age)

//--Les variables de types float
var UneDecimale = -2.984;
console.log(UneDecimale);
console.log(typeof UneDecimale);


//--les boléens(vrai/faux)
var unBooleen=false;//true
console.log(unBooleen)
console.log(typeof unBooleen);

//--les constantes

/*sa valeur ne pourra pas être modifier par des réaffectations ultérieures.
/*la déclaration const me permet de créer une constante accessible uniquement en lecture.*/
const host="localhost"
const user="root"
const password="mysql"
// je ne peux pas faire cela :
//user="hugo"
//Uncaught TypeError: Assignement to constant variable.

//petite subtilité , unNombre est ici de type"string" à cause des quotes au moment de l'affectation.
var unNombre="24";
console.log(unNombre);
console.log(typeof unNombre);

//*permet de convertir un nombre entier(integer ou int) en nombre par rapport au quote qu'il poccède.l'exemple est pris avec unNombre.
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//*pour convertir un nombre à virgule (float)
unNombre="12.55";
unNombre = parsefloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//  pour convertir un nombre, entier ou float en string
unNombre=10;
var unString = unNombre.toString();
console.log(unString);
console.log(typeof unString);


/*-------------LA PORTER DES VARIABLES----------------*/
//les variables déclarer directement à la racine du fichier JS, sont appelées: variable GLOBALES.

//Elles sont disponibles dans l'ensemble du document, y compris dans les fonctions.

// les variables déclarées à l'intérieur d'une focntion sont appelées variables LOCALES. 
// Elles sont disponibles uniquement dans  le scope de la fonction.




