
window.onload = function() {
    const board = document.getElementById('board');
    const winner = document.getElementById('status');
    const square = board.querySelectorAll('div');
    
    const playerOne = 'X';
    const playerTwo = 'O';

    const winningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    let gameData = ['', '', '', '', '', '', '', '', ''];
    let play, lastPlay, win;
    let gameOver = false;

    square.forEach(square => {
        square.classList.add('square');
    });

    square.forEach((cell, index) => {
        cell.setAttribute('data-squareNo', index);
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

    
    board.addEventListener('click', makeAPlay);

    function makeAPlay(e) {
        let squareNo = parseInt(e.target.getAttribute('data-squareNo'));

        if (gameOver === false && gameData[squareNo] === "") {
            
            if (lastPlay == playerOne) {
                play = playerTwo;
                gameData[squareNo] = play;
                e.target.innerHTML = play;
                e.target.classList.add('O');
                lastPlay = play;
            } else{
                play = playerOne;
                gameData[squareNo] = play;
                e.target.innerHTML = play;
                e.target.classList.add('X');
                lastPlay = play;
            }
            checkWinner();
        };
    };

    function checkWinner() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a,b,c] = winningConditions[i];
            if (gameData[a] != "" && gameData[a] === gameData[b] && gameData[a] === gameData[c]) {
                win = gameData[a];
                winner.textContent = `Congratulations! ${win} is the Winner!`;
                winner.classList.add('you-won');
                gameOver = true;
                break;
            }
        };
        if (!gameData.includes("")) {
                winner.textContent = "It's a Draw! Click 'New Game' to play again.";
                gameOver = true;
        };
        return;
    };


    const resetBtn = document.getElementsByClassName('btn')[0];

    resetBtn.addEventListener('click', function() {
        location.reload();
    }); 

};

/*resetBtn.addEventListener('click', function() {
        square.forEach(square => {
            square.innerHTML = "";
            square.classList.remove('X');
            square.classList.remove('O');
            lastPlay = null;
        });
    });*/


/*This is an alternative to set up the board using DOMContentLoaded event

    document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('board');
    const square = board.querySelectorAll('div');
        
        square.forEach(square => {
            square.classList.add('square');
        });
}); 



This is an alternative to reset the game by reloading the page

    resetBtn.addEventListener('click', function() {
        location.reload();
    }); */

