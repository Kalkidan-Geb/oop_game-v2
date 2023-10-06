/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Go for it'),
            new Phrase('Football or soccer'),
            new Phrase('Wonderful'),
            new Phrase('Keep going'),
            new Phrase('Go for it')
        ];
        this.activePhrase = null;
    }
    startGame() {
        const startScreen = document.querySelector('#overlay');
        startScreen.style.display = 'show';
        startScreen.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);
    }
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase];
    }
    handleInteraction(button) {
        if (this.activePhrase.phrase.includes(button.innerHTML)) {
            button.classList.add('chosen');
            button.disabled = true;
            this.activePhrase.showMatchedLetter(button.innerHTML);

            if (this.checkForWin() === true) {
                this.gameOver(this.checkForWin());

            } 
        } else {
                button.classList.add('wrong');
                button.disabled = true;
                this.removeLife();
            }
    }
    removeLife() {
        const remainingLives = document.querySelectorAll('.tries img');
        remainingLives[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        // if maxiumum amount of guesses have been reached
        if (this.missed >= 5) {
            this.gameOver(false);
        }
    };

    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        return hiddenLetters.length === 0;
    };

    gameOver(gameWon) {
        const startScreen = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        startScreen.style.display = 'block';
        if (gameWon === true) {
            gameOverMessage.textContent = "Correct!";
            startScreen.classList.remove('lose');
            startScreen.classList.add('win');
        } else {
            gameOverMessage.textContent = "Not quite! Try again!";
            startScreen.classList.remove('win');
            startScreen.classList.add('lose');
            
        }
    }
    
       



        // remove all li elements

       // console.log("reset");
}
