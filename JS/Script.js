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



function continuePlay() {

    // Generate a random alphabet
    const alphabet = getReandomAlphabet();
    // console.log(alphabet)

    // set a randomly generate alphabet to the screen
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;

    //setBackground Color
    getBackGroundColor(alphabet);
    
}

// For use Functions

function play() {
    hideScreen('home-screen');
    showScreen('playGround');
    continuePlay();
}