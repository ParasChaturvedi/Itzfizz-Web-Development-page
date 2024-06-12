
const _scramble = document.getElementById('scramble'),
      sentences = [
        "Coding",
        "Development",
        "Creation",
      ];

let lastr = sentences.length + 1;
let intervalId;

function changeText() {
    //Getting a non-repeating random number
    let r;
    do {
        r = Math.floor((Math.random() * sentences.length) + 0);
    } while(r === lastr);
    lastr = r;

    //Checking if the string on the page or the new String are longer
    let max = 0,
        min = 0;

    if(sentences[r].length > _scramble.innerHTML.length) {
        max = sentences[r].length;
        min = max;
    } else {
        max = _scramble.innerHTML.length;
        min = sentences[r].length;
    }

    //Changing the characters on a timer
    const speed = 30;
    let i = 0,
        j = 0;

    function mainClock(i, j, max) {
        setTimeout(function () {
            if(j < 3 && i < min) {
                _scramble.innerHTML = _scramble.innerHTML.replaceAt(i, randomLetter());
                j++;
                mainClock(i, j, max);
            } else {
                _scramble.innerHTML = _scramble.innerHTML.replaceAt(i, sentences[r][i]);
                if(i < min) {
                    i++
                } else {
                    max--;
                }
                if(i < max) {
                    j = 0;
                    mainClock(i, j, max);
                }
            }
        }, speed);
    }
    mainClock(i, j, max);
}

//Replacing the String
String.prototype.replaceAt = function(index, character) {
    if(character) {
        return this.substr(0, index) + character + this.substr(index + character.length);
    } else {
        return this.slice(0, index) + this.slice(index + 1);
    }
}

//Getting a random character
function randomLetter() {
    const possible = "0123456789";
    return possible.charAt(Math.floor(Math.random() * possible.length));
}

// Start changing text every 3 seconds
intervalId = setInterval(changeText, 2000);

// Stop changing text when the element is clicked
_scramble.addEventListener('click', function() {
    clearInterval(intervalId);
});
