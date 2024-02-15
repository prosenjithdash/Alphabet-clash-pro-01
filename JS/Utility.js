
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

