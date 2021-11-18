// var1 = "Hello world";
// H e l l o   w o r l d
// 0 1 2 3 4 5 6 7 8 9 10

// var2 = var1.slice(0, 5);

// console.log(var2);

// text = "Please  visit Microsoft!";

// newText = text.replace("Microsoft", "Javascript");
// console.log(text);
// console.log(newText);

// text = "Dobar DAn sVima";

// var1 = text.toLowerCase();

// var2 = text.toUpperCase();
// console.log(var1);

// console.log(var2);

// text = "Hello";
// console.log(text);

// var1 = text.concat(" ", "world");
// console.log(var1);

// text = "Hello world";

// text2 = text + " " + "Daris";

// console.log(text2);

// var1 = 52;
// console.log(typeof var1.toString());

// var1 = "" && true;

// console.log("Daris");

// var1 = ["apple", "banana", "kiwi"];

// var2 = var1;

// var1[0] = "nestp";

// console.log("Ovo je prvi niz: ", var1);
// console.log("Ovo je drugi niz: ", var2);

// a = 5;
//
// b = a;
//
// a = 7;
//
// console.log(a);
// console.log(b);

// var1 = ["Daris", 297, "Umejr", true];

// var1[2] = "Omer";

// console.log(var1);

// var1 = ["Banana", "Orange", "Apple"];

// console.log(var1);

// var1.push(45);

// console.log(var1);

// var1 = "Hello";

// var1 = var1.concat(" ", "World", "4556");

// console.log(var1);

// console.log(5 !== "5");

// var1 = ["Banana", "Orange", "Apple"];

// var2 = var1.join("JS");

// console.log(var1);

// console.log(var2);

// var1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(var1);
// vracenaVrednost = var1.pop();

// console.log(var1);

// console.log(vracenaVrednost);

// var1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(var1);
//
// vracenaVrednost = var1.pop();
// console.log(var1);
//
// console.log(vracenaVrednost);
//

// var1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(var1);

// vracenaVrednost = var1.unshift("Kiwi");
// console.log(var1);

// console.log(vracenaVrednost);

// var1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(var1);

// delete var1[1];

// console.log(var1);

// var1 = ["Banana", "Orange", "Apple", "Mango"];

// console.log("Stari array: ", var1);

// var1.splice(1, 2, "prva");

// console.log("Novi array: ", var1);

// var1 = ["Banana", "Orange", "Apple", "Mango"];

// var2 = var1.slice(0, 2);

// console.log(var2);

// unetiBroj = parseInt(prompt("Unesi broj"));

// console.log(unetiBroj);

// console.log(typeof unetiBroj);

// a = parseInt(unetiBroj);
// console.log(a);

// console.log(typeof a);

// console.log(`lasdjlsd`);

// lista = ["hleb", "mleko"];

// odabir = parseInt(prompt("unesite 1 ,unesite 2"));

// if(odabir === 1) {
//     el = prompt("Unesite namirnicu");

//     if(el.length < 8){
//     lista.push(el);
//     } else {
//         console.log("Dugacka rec");
//     }
    
// } 

// if(odabir === 2){
//     lista.pop();
//     console.log(lista);
// }

// unos = parseInt(prompt("unesi broj"));
// if(unos % 2 === 0){
//     alert("Broj je paran")

// }

// if(unos % 2 === 1){
//     alert("Broj je neparan")

//


// var myPrompt = parseInt(prompt("What number would you like?"),   0);

// for (var i = 0; i<=myPrompt; i++) {

//     if (i%3 === 0) {
//         console.log("Fizz")

//     } else if (i%5 === 0) {
//         console.log("Buzz")

//     } else (i%3 != 0 && i%5 != 0)
//     console.log("FizzBuzz")

//     }
 

// var hour = 20;

// if(hour >= 6 && hour < 12){
//     console.log("Good mornning!")
// }
// else if(hour >= 12 && hour < 18){
//     console.log("Good afternoon!")
// }
// else 
//     console.log("Good evening");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// var day;
// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }
// console.log(day)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// var Animal = "Mouse";

// switch (Animal) {
//     case "Cow":
//     case "Giraffe":
//     case "Dog":
//     case "Pig":
//       console.log("This animal will go on Noah's ARk");
//       break;
//     case "Spoon":
//       console.log("A spoon is not animal!");
//       break;
//     case "Dinosour":
//     default:
//       console.log("This animal will not br on the ARK"); 
      
    
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// a = ["Banana", "Jabuka", "Ananas", "Grozdje"];

// for (i = 0; i < a.length; i++) {
//     switch (a[i]) {
//         case "Banana":
//             console.log("Voce je zuto")
//             break;
//         case "Jabuka":
//             console.log("Voce je crveno")    
//             break;
//         case "Grozdje":
//             console.log("Voce je belo")
//             break;
//             default:
//                 console.log("Nepoznato")    
//     }

// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// duzinaNiza = parseInt(prompt("Unesi duzimu niza"));

// array = []

// for (let j = 0; j < duzinaNiza;j++) {
//     el = prompt(`unesi element ${j + 1}.`);

//     if (el.length > 4) {
//         array.push(el);
        
//     }
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (i = 0; i < array.length; i++) {
//         switch (array[i]) {
//             case "Banana":
//                 console.log("Voce je zuto")
//                 break;
//             case "Jabuka":
//                 console.log("Voce je crveno")    
//                 break;
//             case "Grozdje":
//                 console.log("Voce je belo")
//                 break;
//                 default:
//                     console.log("Nepoznato")    
//         }
    
//     }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// duzina = parseInt(prompt("Unesi duzinu niza"));

// brojevi = [];

// for (i = 0; i < duzina; i++){
//     broj = parseInt(prompt("Unesi broj"));
//     brojevi.push(broj);

// }

// maxNume = brojevi[0];

// for (broj of brojevi){
//     if(broj > maxNum){
//         maxNum = broj;   
//      }
// }
// console.log(maxNum);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// pocetnaV = parseInt(prompt("Unesi pocetak"));
// krajnjaV = parseInt(prompt("Unesi kraj"));

// brojevi = [];


// for (i = pocetnaV; i <= krajnjaV; i++) {
//     if (i % 2 === 0) {
//         brojevi.push("Broje je paran");
        
//             } else {
//               brojevi.push("Broj je neparan");
//             }if(i === 0){
//                 brojevi.push("0");


//             }
   
    
// }
// console.log(brojevi);
// -----------------------------------------------------------------------------------------------------------------------------------------------


// var1 = {
//     firstname: "Zeid",
//     lastname: "Eminovic",
//     age: 17
// }
// console.log(var1);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// ime = prompt("Unesite ime");
// ime2 = ime.trim()
// prezime = prompt("Unesite prezime");
// prezime2 = prezime.trim()


// var1 = {
//     firstname: ime2,
//     lastname: prezime2,
//     age: 17
// }
// console.log(var1);

// delete var1.lastname;

// console.log(var1);
// -----------------------------------------------------------------------------------------------------------------------------------------------
// vrednost = parseInt(prompt("Unesi vrednost"));
// console.log(vrednost * -1);

// unos = "Zeid";
// 0123
// var1 = "";

// for(i = unos.length - 1; i >= 0; i--){
//     var1 += unos[i];
// }

// if(var1 === unos){
//     console.log("Palidrom jeee");
// }else {
//     console.log("Nije");
// }
// -----------------------------------------------------------------------------------------------------------------------------------------------

// function mojaF(name) {
//   console.log("Ja sam", name);
// }

// mojaF("Zeid");
// mojaF("Hamza");
// mojaF("Omer");

// -----------------------------------------------------------------------------------------------------------------------------------------------

// broj1 = parseInt(prompt("Unesi broj 1"));
// broj2 = parseInt(prompt("Unesi broj 2"));

// function sum(a, b) {
//   console.log("Zbir je: ", a + b);
// }

// sum(broj1, broj2);
// -----------------------------------------------------------------------------------------------------------------------------------------------
// function mojaF() {
//   console.log("nesto radi");
//   console.log("jos nesto radi");

//   return 5;
// }

// a = mojaF();

// console.log(a);
// -----------------------------------------------------------------------------------------------------------------------------------------------

prompt("Unesite nesto");

function mojaF(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
console.log(mojaF);
