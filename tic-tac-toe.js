/*document.addEventListener("DOMContentLoaded", function() {
    
    const board = document.getElementById('board');

    const square = board.querySelectorAll('div');
        
        square.forEach(square => {
            square.classList.add('square');
        });
}); */

window.onload = function() {
    const board = document.getElementById('board');

    const square = board.querySelectorAll('div');
        
        square.forEach(square => {
            square.classList.add('square');
        });
};