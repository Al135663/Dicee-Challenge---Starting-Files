var randNum1 = Math.floor(Math.random()*6)+1;
var randNum2 = Math.floor(Math.random()*6)+1;

var randPic1 = "images/dice" + randNum1 + ".png";
var randPic2 = "images/dice" + randNum2 + ".png";

var firstDice = document.querySelectorAll("img")[0].setAttribute("src", randPic1);
var secondDice = document.querySelectorAll("img")[1].setAttribute("src", randPic2);




var header = document.querySelector("h1");

if (randNum1 > randNum2){
    header.textContent = "Player one Wins! ";
}else if (randNum1 < randNum2){
    header.textContent = "Player two Wins! ";
}else{
    header.textContent = "It's Draw! ";
}