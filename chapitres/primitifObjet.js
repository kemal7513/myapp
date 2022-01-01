const n = {name:"hello"};

let y = n; 

//y.name = "codeur";

y = {name:"yes"}; // Ici on a créé un nouvel objet (nouvelle assignation)

console.log(n);

console.log(y);


//les types primitifs: Boolean, Nnumber, string, null, symbole, BigInit

// Les objets marchent par référence et non par valeur c à d notre paramètre pointe vers l'objet et prendre de sa valeur dans la mémoire
// si un élément change de valeur tous les autres qui pointent vers le même objet vont changer de valeur en prennant la nouvelle
// C'est la différence entre la copie par valeur et par référence.