let wins = 0;
let losses = 0;
// initial values before each game
let hangman = {
    alphabet : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'],
    words : ["accommodate", "business", "calendar", "definitely", "embarrass", "february", "grammar",
        "humorous", "intelligence", "jewellery", "leisure", "misspell", "neighbour", "occurrence",
        "parliament", "questionnaire", "recommend", "separate", "tomorrow", "weird"],
    optedWords : "",
    remainedGuess : -10,
    correctGuessed : [],
    wrongGuessed : "",
    setInit : function(){ // initial values before each game
        hangman.optedWords = hangman.words[Math.floor(Math.random() * hangman.words.length)];
        console.log(`Opted word here ${hangman.optedWords}`);
        hangman.remainedGuess = hangman.optedWords.length;
        for (let i=0;i<hangman.optedWords.length;i++)
        {
            hangman.correctGuessed[i] = '-';
            this.wrongGuessed = "";
        }
        
    },
    checker : function(userKey) { 
        if(hangman.alphabet.indexOf(userKey) >= 0){   
            if(hangman.remainedGuess == -10) {
                hangman.setInit();
            }
            else {
                    if ( hangman.remainedGuess>0)
                    {
                        charPosition = hangman.optedWords.indexOf(userKey);
                        
                        if(charPosition == -1){
                            if(hangman.wrongGuessed.indexOf(userKey)>=0)
                            {
                                alert('You are selected this wrong character before!')
                            }
                            else{
                                hangman.remainedGuess--;
                                if(hangman.wrongGuessed.length>0)
                                    hangman.wrongGuessed += (", "+userKey);
                                else
                                    hangman.wrongGuessed += userKey;
                                console.log(`wrongGuessed: ${hangman.wrongGuessed}`);
                            }
                        }
                        if(charPosition >=0)
                        {
                            for(let j=0; j<hangman.optedWords.length;j++) {
                                if (hangman.optedWords[j] === userKey){
                                    hangman.correctGuessed[j] = userKey;
                                }
                            }
                        }
                        console.log(`correctGuessed: ${hangman.correctGuessed} remainedGuess: ${hangman.remainedGuess}`);
                        if(hangman.correctGuessed.indexOf('-') == '-1'){
                            wins++;
                            alert("YOU WON!!! \n Press OK for new game!");
                            hangman.setInit();
                        }
                        hangman.printInfo();
                    }
                    else
                    {
                        losses++;
                        hangman.printInfo();
                        hangman.setInit();
                        alert(`Game Over!!!\nTry again!`);
                    }
            }
        }
        else
            alert("You are allowed to select among Alphabet characters");
        
    },
    printInfo : function (){
        document.getElementById("gameInfo").innerHTML = `Press any key to start <br> Wins: ${wins} <br> Losses: ${losses} <br> Correct Guessed: ${ hangman.correctGuessed } <br> Wrong Guessed: ${ hangman.wrongGuessed }`;
    }

  };
