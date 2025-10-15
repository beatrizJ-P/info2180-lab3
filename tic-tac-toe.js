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

    board.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('square')) {
            e.target.classList.add('hover');
        }
    });
    
    board.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('square')) {
            e.target.classList.remove('hover');
        }
    });

    let play, lastPlay;
    let playerOne = 'X';
    let playerTwo = 'O';
    board.addEventListener('click', function(e) {
        if (e.target.classList.contains('square') && e.target.innerHTML === "") {
            
            if (lastPlay == playerOne) {
                play = playerTwo;
                e.target.innerHTML = play;
                e.target.classList.add('O');
                lastPlay = play;
            } else{
                play = playerOne;
                e.target.innerHTML = play;
                e.target.classList.add('X');
                lastPlay = play;
            }
        };
    });

    

};

