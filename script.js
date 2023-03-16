'use strict';

const score1 = document.getElementById('score--1');
const score0 = document.getElementById('score--0');
const dice = document.querySelector('.dice');

console.log(dice);

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');
