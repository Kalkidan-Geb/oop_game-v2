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
    startGame(){
        const startScreen = document.querySelector()
        startScreenOverlay.style.display= 'show';
        startScreenOverlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomPhrase];
    }
    handleInteraction(button) {
        if(this.activePhrase.phrase.includes(button.innerHTML)) {
            button.classList.add('chosen');
            button.disbaled = true;
            this.activePhrase.showMathcedLetter(button.innerHTML);

        if (this.checkForWin() === true) {
            this.gameOver(this.checkForWin());

            }else {
                button.classList.add('wrong');
                button.disabled = true;
                this.removeLife();
            }
        }
removeLife() 
    this.missed ++;
        const remainingLives = document.querySelectorAll('.tries img');
        remainingLives[this.missed].src = 'images/lostHeart.png';
// if maxiumum amount of guesses have been reached
    if (this.missed >= 5) {
        this.gameOver();
    }
}}

checkforWin(); {
    const hiddenLetters = document.querySelectorAll('.hide');
    return hiddenLetters.length === 0;
}

gameOver(gameWon); {
    startScreen.style.display = 'block';
    if (gameWon === true) {
        gameOverMessage.text.Content = "Correct!";
        startScreen.classList.remove('lose');
        startScreen.classList.add('win');
    } else {
        gameOverMessage.textContent = "Not quite! Try again!";
        startScreen.classlist.remove('win');
        startScreen.classList.add('lose');
    }
    this.reset();
    }
