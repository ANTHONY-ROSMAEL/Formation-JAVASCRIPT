// déclarer un tableau indexé c'est-à-dire avec des indices.
var monTableau = [];
var myArray = new Array;//autre notation, mais identique.
monTableau[0]="Hugo";
monTableau[1]="Rosmael";
monTableau[2]="Aurélie";
monTableau[3]="Elodie";

console.log(monTableau);
console.log(monTableau[2]);//Aurélie
console.log(monTableau[3]);//Elodie

var nosPremons = [
    "Nia",
    "Catherine",
    "Gaelle",
    "Cindy",
    "Astrid",
    "Léna"

];
console.log(nosPremons);

//--créer un objet en js 
var coordonee={
    //propriété : // valeur    ,
    prenom      :    "rosmael" ,
    nom         :    "anthony" ,
    age         :     21    ,
    tel         :  "0690916729", 

};
console.clear();
console.log(coordonee);
console.log( coordonee["prenom"] );
console.log(coordonee.prenom);//écriture à privilégier



//ici j'ai un tableau dans un tableau 
//ou encore un tableau à deux dimensions.

var annuaire = [
    ["nia", "vitalis"],
    ["angelique", "jean-noel"]
];

console.log(annuaire[0][0]);
console.log(annuaire[1][0]);
console.log(annuaire);

annuaire=[
    {
        prenom : "anhony",
        nom:"labutihe"
    },
    {
        prenom:"lucina",
        nom:"kataryna"

    }
];

console.clear();
console.log(annuaire);
console.log(annuaire[1]["prenom"]);
console.log(annuaire[0].prenom) //le point a la place des crochets []

var contacts = [
    {
        prenom: 'Hugo',
        nom: 'LIEGEARD',
        coordonnees: {
            adresse: {
                rue: 'Euvremont Gène',
                cp: '97110',
                ville: 'Pointe-à-Pitre',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'wf3@hl-media.fr',
            tel: {
                fixe: '0596 108 328',
                fax: '0596 108 632',
                port: '0783 97 15 15'
            }
        }
    },
    {
        prenom: 'Nia',
        nom: 'VITALIS',
        coordonnees: {
            adresse: {
                rue: 'Les Plaines',
                cp: '97139',
                ville: 'Les Abymes',
                departement: 'Guadeloupe',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'nia971@gmail.com',
            tel: {
                fixe: '',
                fax: '',
                port: '0690 12 20 07'
            }
        }
    }
];

console.clear();
console.log( contacts );

console.log( contacts[0].coordonnees.adresse.pays.nom );
console.log( contacts[1].coordonnees.adresse.pays.nom );

// Cette structure de données s'appelle le format : JSON !
// C'est le format le plus utilisé pour échanger des données.
// Il est facile à reconnaitre, ce sont des objets dans un tableau...


/* -----------------------------------
            ~ ~ CONSIGNE ~ ~
    
        Réaliser une structure JSON
        permettant de stocker des
        recettes de cuisine.
----------------------------------- */

var recettes = [
    {
        nom: 'Tiramisu',
        categorie: 'Desserts',
        sousCategorie: 'Gateaux',
        difficulte: 'Facile',
        cout: 'Abordable',
        nbPersonnes: 8,
        specialite: 'Italien',
        cuisson: {
            preparation: 30,
            preparationUnite: 'minutes',
            duree: '',
            temperature: '',
            repos: 120,
            reposUnite: 'minutes',
            total: 150,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Sucre',
                quantite: 80,
                unite: 'g'
            },
            {
                nom: 'Mascarpone',
                quantite: 250,
                unite: 'g'
            },
            {
                nom: 'Café Expresso',
                quantite: 15,
                unite: 'cl'
            },
        ],
        ustensiles: [
            '1 Plat Rectangulaire',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
           {
               description: 'Séparer les blancs des jaunes...',
               photoUrl: 'https://recettes.fr/monetape.jpg'
           },
           {
                description: 'Mélanger les jaunes avec le sucre roux...',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
            {
                description: 'Ajouter le mascarpone au Fouet',
                photoUrl: 'https://recettes.fr/monetape.jpg'
            },
        ]
    },
    {
        nom: 'Blaf',
        categorie: 'Plats',
        sousCategorie: 'Poissons',
        difficulte: 'Moyen',
        cout: 'Abordable',
        nbPersonnes: 4,
        specialite: 'Antillaise',
        cuisson: {
            preparation: 45,
            preparationUnite: 'minutes',
            duree: '30min',
            temperature: '',
            repos: 0,
            reposUnite: 'minutes',
            total: 75,
            totalUnite: 'minutes'
        },
        ingredients: [
            {
                nom: 'Poisson',
                quantite: 4,
                unite: ''
            },
            {
                nom: 'Figue',
                quantite: 12,
                unite: ''
            },
        ],
        ustensiles: [
            '1 Canarie',
            '1 Spatule',
            '1 Saladier'
        ],
        instructions: [
        ]
    }
];

    /*
    un objet respecte toujours le format
    propriété : valeur
    ou, la valeur peut-être de plusieurs types :

    unboolen : true,
    unNombre : 18,
    unString : "je suis en string",

    un objet : {
    propriété : valeur
    },

    un tableau :[
    "matthieu",
    "marc",
    "luc",
    "hugo",
    "jean"
    ]
    */


    /*--------------------------------------/
        AJOUT D'ELEMENT DANS LE TABLEAU
    ---------------------------------------*/

    console.clear();

    var couleur=["rouge","jaune","vert"];
    console.log(couleur);

    couleur.push('bleu'); //ajoute à la fin du tableau 
    console.log(couleur);

    couleur.unshift('orange');//ajoute au début du tableau 
    console.log(couleur);

    couleur.pop('bleu');
    console.log(couleur);

    /*--------------------------------------/
        SORTIR UN ELEMENT D'UN TABLEAUX
    ---------------------------------------*/

    /* la fonction pop() supprime le dernier element d'un tableau et retourne cet élément.*/
    
    var monDernierElement = couleur.pop();
    console.log(couleur);
    console.log(monDernierElement);

    /**la meme chose est possible avec le premier element en utilisant :shift();
     * la fonction splice()vous permet de faire sortir un ou plusieurs éléments.
     */

    
    
    





        
        
        


   


