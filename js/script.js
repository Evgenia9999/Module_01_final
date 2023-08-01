'use strict';

const langChoice = prompt('На каком языке вы хотите играть? \r\nВведите ENG, если на английском.')
const startGame = window.RPS(langChoice);
startGame();