//For use Non Functions

// function play() {

//     // Hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);

//     homeSection.classList.add('hidden');
//     // Show the play ground
//     const playGroundSection = document.getElementById('playGround');
//     playGroundSection.classList.remove('hidden');

//     // document.addEventListener('click', function () {
//     //     const pg = document.getElementsByClassName('play_ground');
   
        
//     // })
// }


function handleKeybroadPress(event) {
    const playerPrassed = event.key;
    console.log('Player passed', playerPrassed)
    
    // Get the expected to press
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlpabhet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlpabhet.toLowerCase();
    console.log('Expected press', currentAlpabhet);
    console.log(playerPrassed, expectedAlphabet)
    

    // Checked matched or not
    if (playerPrassed === expectedAlphabet) {
        console.log('You get a point');

        //Score update:

        // 1. get the current score:
        const currentScoreElement = document.getElementById('currentScore');
        const currentScoreElementText = currentScoreElement.innerText;
        const currentScoreElementNum = parseFloat(currentScoreElementText)
        

        // 2. increase the score by 1:

        const newScore = currentScoreElementNum + 1;

        // 3. show the update score:
        currentScoreElement.innerText = newScore;


        // Start New Round
        // remove expectedAlphabet background color
        removeBackGroundColorById(expectedAlphabet);
        //Continue play
        continuePlay();
        
    }
    else {
        console.log('You missed point and lost a life so try again.')

        // Life update:

        // 1. get the current life:
        const currentLifeElement = document.getElementById('currentLife');
        const currentLifeElementText = currentLifeElement.innerText;
        const currentLifeElementNum = parseFloat(currentLifeElementText)
        

        // 2. increase the score by 1:

        const newScore = currentLifeElementNum - 1;

        // 3. show the update score:
        currentLifeElement.innerText = newScore;

    }
}

//Capture keyboard key press
document.addEventListener('keyup', handleKeybroadPress)

function continuePlay() {

    // Generate a random alphabet
    const alphabet = getReandomAlphabet();
    // console.log(alphabet)

    // set a randomly generate alphabet to the screen
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;
    // console.log('Your random element',currentAlphabetElement)

    //setBackground Color
    addBackGroundColorById(alphabet);
    
}

// For use Functions

function play() {
    hideScreen('home-screen');
    showScreen('playGround');
    continuePlay();
}