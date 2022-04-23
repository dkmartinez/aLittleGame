var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomNumber2 = Math.floor(Math.random()*6 +1);


function playerOne(n){
    if(n === 1){
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
    }
    else if( n === 2){
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
    }
    else if( n === 3){
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
    }
    else if( n === 4){
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
    }
    else if( n === 5){
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
    }
    else if( n === 6){
        document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
    }
}

function playerTwo(j){
    if(j=== 1){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
    }
    else if( j=== 2){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
    }
    else if( j=== 3){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
    }
    else if( j=== 4){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
    }
    else if( j=== 5){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
    }
    else if( j=== 6){
        document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
    }
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Play 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}

playerOne(randomNumber1);
playerTwo(randomNumber2);
