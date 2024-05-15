// Usando Math para Calcular el Área de un Círculo

let pi = Math.PI;
let squareRootOfNine = Math.sqrt(9);
console.log(pi);
console.log(squareRootOfNine);


//ejercicio de codificacion
//calcular con math Calcular la Hipotenusa
var a = 5;
var b = 20;
function calcular(a, b) {
    return Math.sqrt(Math.pow(a, b) + Math.pow(b, b))
}
console.log(calcular(3,4));



//Date
let todays = new Date();
console.log(todays);

let specificDate = new Date('2024-05-14');
console.log(specificDate);


//String
let text = "Hello, World!";
console.log(text.length); // 13
console.log(text.toUpperCase()); // "HELLO, WORLD!"


// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]



// Object
let person = {
    name: "John",
    age: 30
  };
  console.log(person.name); // "John"
  person.name = "Jane";
  console.log(person.name); // "Jane"

  

//   Usando Date para Formatear una Fecha
let today = new Date();
console.log(`Hoy es ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`); // Formato: Hoy es 14/5/2024


//Usando Array para Manipular una Lista de Nombres
let names = ["Alice", "Bob", "Charlie"];
names.push("Dave");
console.log(names); // ["Alice", "Bob", "Charlie", "Dave"]
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie", "Dave"]


// Formatear Fechas
function formatearFecha(fechaStr) {
    let fecha = new Date(fechaStr);
    return `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
  }
  
  console.log(formatearFecha('2024-05-14')); // 14/5/2024

  

//   Manipulación de Arrays
function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  console.log(ordenarDescendente([3, 1, 4, 1, 5, 9])); // [9, 5, 4, 3, 1, 1]

  

