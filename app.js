/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const startButton = document.querySelector('#btn__reset');
const keyBoard = document.querySelector('#qwerty');



// select reset button and add event listener
startButton.addEventListener('click', () => {
    // start a new game

    newGame = new Game();
    newGame.startgame();
    newGame.reset();
})

// try to add the event listener to the onscreen keyboard
keyBoard.addEventListener('click', (e) => {
if (e.target.tagName === 'BUTTON') {
    newGame.handleInteraction(e) }
})

// add
