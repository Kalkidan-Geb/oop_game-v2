/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay(){
        const phraseLetters = this.phrase.split('');
        const checkPhrase = document.querySelector('#phrase ul');
    

        phraseLetters.forEach(letter => {
            const li = document.createElement('li');
            if (letter === ' '){
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            }
            checkPhrase.appendChild(li);
        });
    }

checkLetter(letter){
    return this.phrase.includes(letter);
}

showMatchedLetter(letter){
    const lettersMatched = document.querySelectorAll(`.letter.${letter}`);
    lettersMatched.forEach(letterMatched => {
        letterMatched.classList.remove('hide');
        letterMatched.classList.add('show');
    });
}
}