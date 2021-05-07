/*
UPPGIFT 1

- deklarera en variabel
- ge variebln ett värde
- räkna ut något tex summan och returnera ett resultat som vi kan spara i en variabel
- kunna jämföra två olika resultat för att se vilket som är störst
*/

const y = 10;
// const använder vi när vi vet att värdet inte ska förändras
// let använder vi när vi vet att värdet kommet att förändras i framtiden
const x = 20;

if (y > x) {
  console.log("Japp det stämmer!");
} else {
  console.log("Nej det stämmer inte");
}
// om xx är sant => gör så här

// kollar upp operatorer || = eller && = och < > = större än och mindre än
// === strikt lika med ==
// data typer, variabler och värden
// if statements, att ta beslut

// 1. Räkna ut trianglarnas area och använda de värden som kommer test datan
const result = x + y;
console.log(result);

// 2. Jämför de olika trianglarna för att se vilken som är störst
const a = 20;
const b = 5;
const resultTwo = a + b;
console.log(resultTwo);

if (result > resultTwo) {
  console.log("Första resultatet är störst");
} else {
  console.log("Andra resultatet är störst");
}

// fundera kring hur du ska hantera om dom är exakt likadana

// FIRST ASSIGNMENT
// In this assignment you should calculate the area of two triangles and then
// compare the values of the result to see which one is biggest area.
// Code one case for each test data that you are provided.
// That means one case (code example) for the first test data, one for the second and so on.

// You can calculate the area of a triangle using the formula:
// area = (base * height) / 2
// OBS! In this case you actually have to use the parentheses.
// Answer the question why JavaScript needs the parentheses in this case?
// You can put your answer as plain text when you hand in the assigment.

// TEST DATA
// Case 1:
// triangleOne: baseValue = 10cm, heightValue = 13cm
// triangleTwo: baseValue = 16,5cm, heightValue = 20,3cm
// Case 2:
// triangleOne: baseValue = 16,5cm, heightValue = 20,3cm
// triangleTwo: baseValue = 20,3cm, heightValue = 16,5cm
// Case 3:
// trinagleOne: baseValue = 7,8cm, heightValue = 5,6cm
// trinagleTwo: baseValue = 9,3cm, heightValue = 12,4cm

// Print the total area for each triangle together with the result of which one
// that has the biggest are.

// Example:
// Triangle one has an area of xx cm2 and triangle two has an area of xx cm2. The triangle with the
// biggest area is triangle xx.
