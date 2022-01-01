// IIFE (Immediately Invoked Function Expression) 
// (Expression de fonction invoquée immédiatement) 
// est une fonction JavaScript qui est exécutée dès qu'elle est définie.
// l'objectif est d'éviter que les variables soit atteintes ou exécuter de l'exterieur 
// On rajoute une une parenthèse au début et la fin de notre function


(function iife () {
    var aName = "Barry";
})();
// Le nom de la variable n'est pas accessible depuis le périmètre externe
//aName // lancement "Exception ReferenceError: aName n'est pas défini"
console.log(aName)
