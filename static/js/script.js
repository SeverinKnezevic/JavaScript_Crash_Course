// Challenge 1: Your Age in Days

function AgeInDays() {
 var birthYear = prompt('What year were you born... Good friend?');
 var AgeInDayss = (2021 - birthYear) * 365;
 var h1 = document.createElement('h1');
 var textAnswer = document.createTextNode('You are ' + AgeInDayss + ' days old.');
 h1.setAttribute('id','AgeInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
 console.log(AgeInDayss);
}

function reset() {
    document.getElementById('AgeInDays').remove(); 
 }



// Challenge 1: Your Age in Days
// Moj način //
//
//Napomena: u index.html treba dodati dodati
//                                  <div id="flex-box-result">
//                                      <h1 id="ispis"> </h1>
//                                  </div> 

/*
function AgeInDays() {
    var birthYear = prompt('What year were you born... Good friend?');
    var AgeInDayss = (2021 - birthYear) * 365;
    //var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + AgeInDayss + ' days old.');
    //h1.setAttribute('id','AgeInDays');
    //h1.appendChild(textAnswer);
    document.getElementById('ispis').appendChild(textAnswer);
    console.log(AgeInDayss);
   }


// Ovo ne funcionira!
// jer se obrise cijeli <h1>

   function reset() {
    document.getElementById('ispis').remove(); 
 }
   
*/

//---------------------------------------------------------------------------------
//  Challenge 2: Cat Generator
//
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://cdn2.thecatapi.com/images/4mk.gif";
    div.appendChild(image);
}


//  Challenge 2: Cat Generator
// Moj način
/*
function generateCat() {
    var image = document.createElement('img');
    image.src="https://cdn2.thecatapi.com/images/4mk.gif";
    document.getElementById('flex-cat-gen').appendChild(image);
}
*/

//----------------------------------------------------------------------------------
//  Challenge 2: Cat Generator
//

function rpsGame(yourChoice) {
    console.log(yourChoice);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log('MyChoice:' , humanChoice)
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('ComputerChoice:', botChoice);
    
    result = decideWinner(humanChoice, botChoice); // [1, 0] human lost | bot won 
    console.log(result);
    
    message = finalMessage(result); // {'message': 'You won!', color: 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'] [number] ;
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore]

}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied', 'color': 'yellow'};
    } else if (yourScore === 1) {
        return {'message': 'You won', 'color': 'green'};
    }
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + " ; font-size:60px; padding: 30px '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 50, 233, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// THE END Challenge 2


// Moj pokušaj
//
//
/*
function rpsGame(moj_potez) {
    console.log(moj_potez);

    var prvi_igrač, drugi_igrač;
    prvi_igrač = moj_potez.id;
    console.log('Prvi igrač: ', prvi_igrač);

    prvi_igrač = prijevod(prvi_igrač)
    console.log('Prvi igrač: ' + prvi_igrač.toUpperCase() + ' /hr')

    drugi_igrač = igra(igrači());
    console.log('Drugi igrač: ' + drugi_igrač.toUpperCase());

    result = rješenje(prvi_igrač, drugi_igrač);
    console.log(result);

}

function igrači() {
    return Math.floor(Math.random() * 3);
}

function igra(broj) {
    return ['kamen', 'papir', 'škare'] [broj];
}

function prijevod(prvi_igrač_hr) {
    if(prvi_igrač_hr == 'rock') {
        return ('kamen');
    } else if(prvi_igrač_hr == 'paper') {
        return ('papir');
    } else if(prvi_igrač_hr == 'scissors') {
        return ('škare');
    }
}

function rješenje(moj_potez, kompjuter_potez) {
    var bazapodataka_igre = {
        'kamen' : {'škare': 1, 'kamen': 0.5, 'papir': 0},
        'papir' : {'kamena': 1, 'papir': 0.5, 'škare': 0},
        'škare' : {'papir':1, 'škare': 0.5, 'kamen': 0},
    }

    moj_skor = bazapodataka_igre [moj_potez][kompjuter_potez];
    kompjuter_skor = bazapodataka_igre [kompjuter_potez] [moj_potez];

    return [moj_skor, kompjuter_skor];
}
*/


//
// Challenge 4: Change the Color of All Buttons
//

var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
// console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
  //  console.log(buttonThingy.value);
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    } 
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    } 
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    } 
}

function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']; 

    for(let i = 0; i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

//
// Challenge 5: Blackjack
//

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#deal-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        console.log(YOU['score']);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer){
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    // let winner = computeWinner();
    // showResult(winner);

    // showResult(computeWinner());
    if (blackjackGame['turnsOver'] === true){

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (i=0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }

        for (i=0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#deal-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#deal-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjackGame['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer){
    if (card === 'A') {
    // If adding 11 keeps me below 21, add 11. Otherwise, add 1.
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
         document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard(); 
    console.log(card);
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
    }   

    // if (DEALER['score'] > 15) {
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        // console.log(blackjackGame['turnsOver']);
    // }
}


// compute winner and return who just won
// update the wins, draws, and losses
function computeWinner() {
    let winner;

    if(YOU['score'] <= 21) {
        // condition: higher score than dealer or when dealer busts but you're 2
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            // console.log('You won!');
            blackjackGame['wins']++;
            winner = YOU; 

        } else if 
            (YOU['score'] < DEALER['score']) {
            // console.log('You lost!');
            blackjackGame['losses']++;
            winner = DEALER;

        } else if (YOU['score'] === DEALER['score']) {
            // console.log('You drew!');
            blackjackGame['draws']++;

        }

        // condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
        // console.log('You lost!');
        blackjackGame['losses']++;
        winner = DEALER;

    // condition: when you AND the deler busts
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        // console.log('You drew!');
        blackjackGame['draws']++;

    }

    // console.log('Winner is', winner);
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor; 

    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green'; 
            winSound.play();

        } else if (winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red'; 
            lossSound.play();

        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black'; 
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;

    }
}


