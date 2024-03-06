const ranum = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guesslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')
const p = document.createElement('p')
let prevguess = []
let numguess = 1
let playgame = true
if (playgame) {
    submit.addEventListener('click', function (e) { e.preventDefault(); const guess = parseInt(userinput.value); validateguess(guess) })
}
function validateguess(guess) {
    if (isNaN(guess)) { alert('please enter a valid number') }
    else if ((guess < 1)) { alert('please enter a number >1') }
    if ((guess > 100)) { alert('please enter a number<100') }
    else {
        prevguess.push(guess); if (numguess === 11) {
            dispguess(guess); dispmessage(`Game Over:Random num=${ranum}`)
            endgame()
        }else{dispguess(guess);checkguess(guess)}
    }
}
function checkguess(guess) {
    if(guess===rannum){displaymessage(`You guessed it right`);endgame()}
    else if(guess<rannum){displaymessage(`Number is tooooo low`)}
    else if(guess>rannum){displaymessage(`Number is toooo high`)}

 }
 function dispguess(){userinput.value='';guess.innerHTML+=`${guess},`;numguess++;remaining.innerHTML=`${11-numguess}`}
function dispmessage(message) {lowOrhigh.innerHTML=`<h2>${message}</h2>` }

function endgame() {  userInput.value = '';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p);
playGame = false;
;}
function newGame( ){const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', function (e) {
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);

  playGame = true;});}