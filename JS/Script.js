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


// For use Functions

function play() {
    hideScreen('home-screen');
    showScreen('playGround');
}