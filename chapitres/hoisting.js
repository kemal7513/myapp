//hoisting = hissage (fr) mettre en haut

//hoisting des fonctions

Addition(5,7);

function Addition (a,b) {
    console.log(a+b);
}
//On a obtenu le résultat exact 12 pcq javascript cherche les déclarations et il les fait monter en haut même si on les écrites en bas 

//hoisting de variables

console.log(x);
let x = 5;

//cet exxemple comme si javascript voit:

let =5;
console.log(y);
y =5;