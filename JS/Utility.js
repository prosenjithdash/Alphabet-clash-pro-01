
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