/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x==y){
      z = true;
   }
   else {
      z = false;
   }
   return z;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
let sstr1 = str1;
let sst2 = str2;   
     if( sstr1.length == sstr2.length ){
      z = true;
   }
   else {
      z = false;
   }
   return z;
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
     if( num < 90 ){
      z = true;
   }
   else {
      z = false;
   }
   return z;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
     if(num > 50){
      z = true;
   }
   else {
      z = false;
   }
   return z;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
     if((x % 2) == 0){
      z = true;
   }
   else {
      z = false;
   }
   return z;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
  if((x%y) != 0 ){
      z = true;
   }
   else {
      z = false;
   }
   return z;
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
