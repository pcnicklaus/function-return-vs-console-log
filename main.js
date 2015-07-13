function returnValue(number) {
  return number * 2;
}

function consoleValue(number) {
  console.log(number * 2);
}

returnValue(2)
consoleValue(4)

if(returnValue === undefined) {
  console.log("Function doesn't return a value")
} else {
  console.log("Function returns a value")
}

if(consoleValue === undefined) {
  console.log("Function doesn't return a value")
} else {
  console.log("function returns a value")
}





// var yourAnswer = Number(prompt("pick a number between 1 & 10"))
//
// function yourNumberReturn(yourAnswer) {
//      for (var i = 0; i < 10; i++) {
//        if(i === yourAnswer) {
//           return(yourAnswer);
//         } else {
//           console.log("Did you pick a number between 1 and 10?");
//        }
//   }
// }
//   console.log(yourNumberReturn());

// var answer = prompt ("How is your day?");
//
// function howAreYou(answer) {
//   if(answer === "good") {
//      return "Good to hear you are " + answer;
//    } else if (answer === "okay"){
//      return "Sounds great to hear you are " + answer;
//    } else if (answer === "ehhh") {
//      return "well the day could get better " + answer;
//    } else {
//      return "emotionless is okay";
//    }
// }
//
// function howAreYou();

// var howdy = prompt("What do you want to do?")
//
// function doSomething() {
//   return "This is so great but no one will know unless you let people know that you like to do " + howdy;
//   console.log("but i'm so lazy that i just can't make the effort. so little time, so much to do, so i'll do nothing!!!");
// }
// //nothing will be shown in console because this is being returned//
//
// function doSomethingElse () {
//   console.log("You're so good becasue you want to be active and " + howdy)
// }
// // this will be printed becasue of the console.log//
//
// console.log(doSomething());
// console.log(doSomethingElse());
