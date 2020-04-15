
// Random Number Generator for Player 1


var sum1 = 0;
var imageClick1 = document.querySelector('.img1');
var count = 0;
// Function to count the Number of Clicks 

imageClick1.onclick = function(){
    count = count + 1;
    // alert(count);
};

document.querySelector('.img1').addEventListener('click', spinDiceone);

function spinDiceone() {
    
    if(count <= 10){

        var randomNumber1 = Math.floor(Math.random() * 6) + 1;

        // Changing the images attritube for the player1
        
        var randomSrcimage1 = "images/dice" + randomNumber1 + ".png";
        document.querySelectorAll('img')[0].setAttribute('src', randomSrcimage1); 
        
        sum1 = sum1  + randomNumber1;
        // alert(sum1);
        document.querySelector('.score1').innerHTML = "Score :"+sum1;

    }
    
}

//Random number Generator for Player 2

var sum2 = 0;
var count2 = 0;
var click2Image = document.querySelector(".img2");

//function to find the click count on 2nd image

click2Image.onclick = function(){
    count2 = count2 + 1;
};

document.querySelector('.img2').addEventListener('click', spineDicetwo);

function spineDicetwo(){
    if(count2 <= 10){

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
        // Changing the images attritube for the player2
        
        var randomSrcimage2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll('img')[1].setAttribute('src', randomSrcimage2);
    
        sum2 = sum2 + randomNumber2;
        document.querySelector('.score2').innerHTML = "Score :"+ sum2;
    
    
    }
    

}

    //Wining Checking
document.querySelector('h1').addEventListener('click', checkwinner);

function checkwinner(){
    if(sum1 > sum2){
        document.querySelector('h1').innerHTML = "Player 1 Wins";
    }
    
    else if(sum2 > sum1){
        document.querySelector('h1').innerHTML = "Player 2 Wins";
    }
    else if(sum1 = sum2){
        document.querySelector('h1').innerHTML = "Draw!";
    }
    else{
        document.querySelector('h1').innerHTML = "Refresh Me";
    }
}
   
