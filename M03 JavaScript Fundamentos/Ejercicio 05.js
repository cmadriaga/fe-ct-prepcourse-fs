/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num < 0){
      return " el numero es negativo";
   } if (num > 0){
      return "el numero es positivo";
   } else{
      return false;
   }
   
   
}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let text= str + "!";
   return text;
}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
let text = nombre + " " + apellido;
   return text;
   
}

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let text1= "Hola ";
   let text2= "!";
   let text3 = text1.concat(nombre).concat(text2);
   return text3;
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let perimetro = lado * 4;
   return perimetro;
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let triang = (base * altura) / 2;
   return triang;
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let x = euro * 1.2;
   return x;
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:

   if (letra.length >1){
      return " Dato incorrecto";
   }else {
      switch (letra){
         case "a";
           let text= "es vocal";
            break;
         case "e";
               let text= "es vocal";
              break;

         case "i";
           let text= "es vocal";
              break;

         case "o";
           let text= "es vocal";
              break;

         case "u";
           let text= "es vocal";
              break;

            
         case "A";
           let text= "es vocal";
              break;

         case "E";
               let text= "es vocal";
              break;

         case "I";
           let text= "es vocal";
              break;

         case "O";
           let text= "es vocal";
              break;

            case "U";
           let text= "es vocal";
            break;
         default:
            let text = " dato incorrecto  ";
            
      }
      return text;
   }
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
