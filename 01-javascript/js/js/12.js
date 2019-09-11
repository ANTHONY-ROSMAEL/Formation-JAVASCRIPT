 // Les evenements//
 
 
 //les evenements vont me permettre de déclencher une fonction , c'est à dire, une série
 // de f'insctruction suite à une action de mon utilisateur.

 //OBJECTIF: être en mesure de capturer ces évènements afin d'exécuter une fonction.

 // les évenements : MOUSSE(souris)
 // CLICK : au clic sur un élement;
 //DBLCLICK : au double clic;
 // MOUSEENTER : la souris passe au dessus de l'élément;
 // MOUSELEAVE : la souris sort de l'élement;
 // MOUSSEOVER  : au passage de la souris;

 // Les évènements : KEYBOARD (clavier)

 //keydown : une touche du clavier est enfoncée;
 //keyup: une touche du clavier à été relachée;


 //**les evenements windows
 //scroll: défilement de la fenetre;
 //resize : redimentionnement de la fenêtre;
 
 //evenement :from (formulaire)
 
 //change : pour les element <input>, <select> et <textarea>;
 //submit : à l'envoi (soumission) du formulaire ;
 //input : pour capter la saisie d'un utilisateur sur le champ <input>*/


                    // LES ECOUTEURS D'EVENEMENTS//


//Pour attacher un évènement à un élément, ou autrement dit, pour d'éclarer un écouteur d'évenement qui 
//se chargera de déclencher une fonction, je vais utiliser la syntaxe suivante:

const p=document.getElementById("monParagraphe");

function changerLaCouleurEnRouge(){
    p.style.color="red";
}

function changerLaCouleurEnRouge(){
    p.style.color="red";
}

//p.addEventListener('mouseover', changerLaCouleurEnRouge);
p.addEventListener('click', changerLaCouleurEnRouge);
p.addEventListener('mouseleave', changerLaCouleurEnRouge);


