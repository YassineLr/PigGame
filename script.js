'use strict';

const score1 = document.getElementById('score--1');
const score0 = document.getElementById('score--0');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore = document.querySelector('.current-score');


score0.textContent = 0;
score1.textContent = 0;
diceElement.classList.add('hidden');

const switchPlayer = function(){
    
}


btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random()*6)+1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    if (dice !== 1){
        let thecurrent = Number(currentScore.textContent);
        thecurrent += dice;
        console.log(thecurrent);
        currentScore.textContent = thecurrent;
    }
})

