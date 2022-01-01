// Les fonctions sont des objets de premières classes
// Peuvent passer comme argument, returner une autre fonction comme valeur
// la function peut avoir des arguments, des variables
// On peut déclarer une variable avec comme valeur une function

function AAA() {
  return function (multiply) {
    return multiply * 3;
  };
}
console.log(AAA);
console.log(AAA());
console.log(AAA()(10));
