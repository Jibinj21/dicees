
// Random Number Generator for Player 1
var randomNumber1 = 0;
randomNumber1 =Math.round(Math.random() * 5);
randomNumber1 = randomNumber1 + 1;

//Random number Generator for Player 2

var randomNumber2 =0;
randomNumber2 = Math.round(Math.random() * 5);
randomNumber2 = randomNumber2 + 1;

// Changing the images attritube for the player1

if(randomNumber1 === 1){
    document.querySelector('.img1').setAttribute('src', 'images/dice1.png')
}

if(randomNumber1 === 2){
    document.querySelector('.img1').setAttribute('src', 'images/dice2.png')
}

if(randomNumber1 === 3){
    document.querySelector('.img1').setAttribute('src', 'images/dice3.png')
}

if(randomNumber1 === 4){
    document.querySelector('.img1').setAttribute('src', 'images/dice4.png')
}

if(randomNumber1 === 5){
    document.querySelector('.img1').setAttribute('src', 'images/dice5.png')
}

if(randomNumber1 === 6){
    document.querySelector('.img1').setAttribute('src', 'images/dice6.png')
}

// Changing the images attritube for the player2

if(randomNumber2 === 1){
    document.querySelector('.img2').setAttribute('src', 'images/dice1.png')
}

if(randomNumber2 === 2){
    document.querySelector('.img2').setAttribute('src', 'images/dice2.png')
}

if(randomNumber2 === 3){
    document.querySelector('.img2').setAttribute('src', 'images/dice3.png')
}

if(randomNumber2 === 4){
    document.querySelector('.img2').setAttribute('src', 'images/dice4.png')
}

if(randomNumber2 === 5){
    document.querySelector('.img2').setAttribute('src', 'images/dice5.png')
}

if(randomNumber2 === 6){
    document.querySelector('.img2').setAttribute('src', 'images/dice6.png')
}

//Wining Checking

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins";
}

else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player 2 Wins";
}
else{
    document.querySelector('h1').innerHTML = "Draw!"
}