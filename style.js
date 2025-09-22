function randomizer() {
    randomNumber = Math.floor((Math.random()) * 6 + 1);
    return randomNumber;
}

function rollDice() {

randomNo1 = randomizer();
randomNo2 = randomizer();

str1 = "./images/dice-" + randomNo1 + ".png";
str2 = "./images/dice-" + randomNo2 + ".png";

document.querySelector(".img1").setAttribute("src",str1);
document.querySelector(".img2").setAttribute("src",str2);

    if (randomNo1 > randomNo2) {
        document.querySelector("h1").innerHTML = "Player 1 Won";
    } else if (randomNo1 < randomNo2) {
        document.querySelector("h1").innerHTML = "Player 2 Won";
    } else {
        document.querySelector("h1").innerHTML = "DRAW !!!";
    }
}

document.querySelector(".btn").addEventListener("click", rollDice);


