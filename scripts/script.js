

// hade kunnat anväda simplare namn på variables möjligtvis och kommenterat ut
// men det går nog så som det är

// CASE NUMBER 1

const triangleOneWidth = 10;
const triangleOneHeight = 13;
const result = triangleOneWidth * triangleOneHeight / 2;
console.log(result);

const triangleTwoWidth = 16.5;
const triangleTwoHeight = 20.3;
const resultTwo = triangleTwoWidth * triangleTwoHeight / 2;
console.log(resultTwo);

if (result > resultTwo) {
  console.log("Triangle One is greater than Two");
} else {
  console.log("Triangle Two is greater than One")
}

// CASE NUMBER 2

const triangleThreeWidth = 16.5;
const triangleThreeHeight = 20.3;
const resultThree = triangleThreeWidth * triangleThreeHeight / 2;
console.log(resultThree);

const triangleFourWidth = 20.3;
const triangleFourHeight = 16.5;
const resultFour = triangleFourWidth * triangleFourHeight / 2;
console.log(resultFour);

// you can also write >= instead of == 
if (resultThree == resultFour) {
  console.log("They are the same value")
} else {
  console.log("They are not the same value")
}


// CASE NUMBER 3

const triangleFiveWidth = 7.8;
const triangleFiveHeight = 5.6;
const resultFive = triangleFiveWidth * triangleFiveHeight / 2;
console.log(resultFive);

const triangleSixWidth = 9.3;
const triangleSixHeight = 5.6;
const resultSix = triangleSixWidth * triangleSixHeight / 2;
console.log(resultSix);

if (resultFive > resultSix) {
  console.log("Triangle Five is greater than Six")
} else {
  console.log("Triangle Six is greater than Five")
}