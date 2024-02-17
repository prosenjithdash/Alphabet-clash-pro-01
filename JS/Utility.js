
// Hide the home screen with function

function hideScreen(elementId) {
    const hide = document.getElementById(elementId);
    hide.classList.add('hidden');
}


// Show the Play Ground with function

function showScreen(elementId) {
    const show = document.getElementById(elementId);
    show.classList.remove('hidden');
}


// Add background color
function addBackGroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}


// Remove background color
function removeBackGroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


// Get or create an Random Alphabet array

    function getReandomAlphabet() {
    const strings = 'abcdefghijklmnopqurstwxyz';
    const alphabets = strings.split('');
    // console.log(alphabets);



// Get a random index between 0 - 25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    
    const alphabet = alphabets[index];
    console.log(index, alphabet);
        
    return alphabet;

}

