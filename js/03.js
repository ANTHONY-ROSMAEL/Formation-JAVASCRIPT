/*-----------------------------------------------
                la concatenation
-----------------------------------------------*/
 var debutDePhrase = "aujourd'hui" ;
 var DateDuJour = new Date();
 var suiteDephrase = ", sont presentes:" ;
 var nbApprenantes = 14;
 var finDePhrase = "apprenantes.<br>";

 /* Nous souhaitons maintenant, grâce à la concatenation afficher le tout en une phrase sur notre page!*/
 
 document.write(
     debutDePhrase + DateDuJour.getDate()
                    +"/"
                    +( DateDuJour.getMonth() + 1 )
                    +"/"
                    +DateDuJour.getFullYear()
                    +suiteDephrase
                    +nbApprenantes
                    +finDePhrase

 );

 /**
  * ici,notre variable dateDuJour nous donne accès 
  * aux fonctions de l'objet date.
  * grâce au point '.' je peux utiliser ces fonctions.
  */
 
