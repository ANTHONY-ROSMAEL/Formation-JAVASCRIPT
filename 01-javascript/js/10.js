
  /**************************
  //          LE DOM 
  //**************************/

  //**LE DOM est une interface de devellopement JS pour HTML.
  //Grace au DOM,je vais être en mesure de modifier/ accéder
  //mon code HTML */

  //*L'Objet "document": c'est le point d'entrée vers mon contenu 
  //*HTML. Chaque page charger dans mon navigateur à un objet"document".

    /**
     * comment faire pour récuperer les différents contenu de ma page HTML?
     */

     /**********************************************************************|
  
    
      
                       document.getElementById()
      
      c'est une fonction qui va permettre de récuperer un Element HTML
      à partir de son Identifiant unique: ID.

      ***********************************************************************/

     const bonjour = document.getElementById("bonjour");
     console.log(bonjour);

     
    /**********************************************************************
     * 
     *                 document.getElementByClassName()
     * 
     * c'est une fonction qui va permettre de récuperer un ou plusieurs
     * element (une liste) HTML à partir de leur classe.     
     * 
     **********************************************************************/

      const contenu = document.getElementsByClassName("contenu");
      console.log(contenu);

      // ME RENVOI UN TABLEAU JS AVEC MES ELEMENTS HTML//.

      /*******************************************************************
       * 
       *                document.getElementByTagName
       * 
       *  c'est une fonction qui va permettre de récuperer un ou plusieur 
       * element
       * (une liste) HTML à partir de leur balise.
       ***************************************************************** */

       const p =document.getElementsByTagName("p");
       console.log(p);


       // NOTA BENE : queryselector document.queryselector():

       //https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
    
       console.log (document.querySelector("#bonjour"));
       console.log (document.querySelectorAll("contenu"));
       console.log(document.querySelectorAll("p"));