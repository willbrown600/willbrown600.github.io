/*const board = document.querySelector('.board');
const cells = document.querySelector('tbody');
const reset = document.querySelector('reset');
//const player1 = 'X';
//const player2 = 'O';
let player = player1;
let turns = 10;


function addPiece(e) {
    console.log(e.target);
    e.target.innerHTML = player;
    if (player === player1) {
        player = player2;
    } else {
        player = player1;
    }

    checkWinner();
}

function checkWinner() {
    turns--;

    let spot1 = document.getElementById('spot1');
    let spot2 = document.getElementById('spot2');
    let spot3 = document.getElementById('spot3');
    let spot4 = document.getElementById('spot4');
    let spot5 = document.getElementById('spot5');
    let spot6 = document.getElementById('spot6');
    let spot7 = document.getElementById('spot7');
    let spot8 = document.getElementById('spot8');
    let spot9 = document.getElementById('spot9');

    if (spot1 === "O" && spot2 === "O" && spot3 === "O" ||
        spot4 === "O" && spot5 === "O" && spot6 === "O" ||
        spot7 === "O" && spot8 === "O" && spot9 === "O" ||
        spot1 === "O" && spot4 === "O" && spot7 === "O" ||
        spot2 === "O" && spot5 === "O" && spot8 === "O" ||
        spot3 === "O" && spot6 === "O" && spot9 === "O" ||
        spot1 === "O" && spot5 === "O" && spot9 === "O" ||
        spot3 === "O" && spot5 === "O" && spot7 === "O") {
        alert(`Winner is Player2!`);
    } else if (spot1 === "X" && spot2 === "X" && spot3 === "X" ||
        spot4 === "X" && spot5 === "X" && spot6 === "X" ||
        spot7 === "X" && spot8 === "X" && spot9 === "X" ||
        spot1 === "X" && spot4 === "X" && spot7 === "X" ||
        spot2 === "X" && spot5 === "X" && spot8 === "X" ||
        spot3 === "X" && spot6 === "X" && spot9 === "X" ||
        spot1 === "X" && spot5 === "X" && spot9 === "X" ||
        spot3 === "X" && spot5 === "X" && spot7 === "X") {
        alert(`Winner is Player1!`);
    } else if (turns === 0) {
        alert(`Tie Game`);
    }

}


function resetBoard() {
    console.table(board);
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = '';
        }
    }
}

// div version

function resetBoardDiv() {
    const cells = document.querySelector('tbody');
    for (let i = 0; i < cells.children.length; i++) {
        cells.children[i].innerText = '';
    }
    const children = Array.from(cells.children);
    const empty = children.filter(function (child) {
        return child.innerText == 'X' || child.innerText == 'O';
    });
    console.log(empty);
}

/*const cells = document.querySelector('tbody');
    const children = Array.from(cells.children);

    children.forEach(child => {
        cells.children.innerText = '';
        console.table(child);
    });
    
    const empty = children.filter(function (child) {
        return child.innerText == 'X' || child.innerText == 'O';
    });
    console.log(empty);
}

function Piece(){
    if(container.querySelector('tbody'));
}



board.addEventListener('click', addPiece);
cells.addEventListener('click', addPiece);
reset.addEventListener('click', resetBoardDiv);*/



const x_class = 'x';
const o_class = 'o';
let circleTurn;

const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e){
    //console.log(e);
    const cell = e.target
    const currentClass = circleTurn ? o_class : x_class
    placeMark(cell, currentClass)



    swapTurns();
    setBoardHoverClass();


}
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleTurn = !circleTurn;
}

function 