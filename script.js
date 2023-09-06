"use strict";
/*console.log(document.querySelector('.guessing').textContent);
document.querySelector('.guessing').textContent = '🎉 correct number';
console.log(document.querySelector('.guessing').textContent);
document.querySelector('.showBox').textContent = 20;
document.querySelector('.score').textContent = 15;
document.querySelector('.input').value = '23';
console.log(document.querySelector('.input').value);*/

let secretNumber = Math.trunc(Math.random() * 50) + 1;
//const reSecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".input").value);
  console.log(input, typeof input);

  // when if input has no numver
  if (!input) {
    document.querySelector(".guessing").textContent = " 🚫 No Number ";
    // when player wins
  } else if (input === secretNumber) {
    document.querySelector(".showBox").textContent = secretNumber;
    document.querySelector(".guessing").textContent = "🎉 Right Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".showBox").style.width = "120px";
    document.querySelector(".showBox").style.backgroundColor = "gold";
    document.querySelector(".line1").style.width = "695px";
    document.querySelector(".line2").style.width = "695px";
    document.querySelector(".line2").style.backgroundColor = "gold";
    document.querySelector(".line1").style.backgroundColor = "gold";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highScore").textContent = highscore;
    }

    //when input is too high
  } else if (input > secretNumber) {
    if (score > 1) {
      //when score is > 1
      document.querySelector(".guessing").textContent = "Too high";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      //when score is < 1
      document.querySelector(".guessing").textContent = " 💥you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (input < secretNumber) {
    //when input is too low
    if (score > 1) {
      //when score is >1
      document.querySelector(".guessing").textContent = "Too low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      //when score is < 1
      document.querySelector(".guessing").textContent = " 💥You lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});
//console.log(secretNumber);

document.querySelector(".again").addEventListener("click", function () {
  //const input = Number(document.querySelector('.input').value);
  score = 20;
  document.querySelector("body").style.background = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guessing").textContent = "start guessing...";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".showBox").textContent = "?";

  document.querySelector(".showBox").style.width = "60px";
  document.querySelector(".showBox").style.backgroundColor = "white";
  document.querySelector(".line1").style.width = "723px";
  document.querySelector(".line2").style.width = "723px";
  document.querySelector(".line2").style.backgroundColor = "white";
  document.querySelector(".line1").style.backgroundColor = "white";
  document.querySelector(".input").value = "";

  //console.log(secretNumber);
});
