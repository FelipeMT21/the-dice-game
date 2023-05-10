var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageRandom1 = "images/dice" + randomNumber1 + ".png";
var imageRandom2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageRandom1);
document.querySelectorAll("img")[1].setAttribute("src", imageRandom2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Jogador 1 Ganhou";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Jogador 2 Ganhou 🚩";
} else {
    document.querySelector("h1").textContent = "Empate!"
}