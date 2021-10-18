const cells = document.getElementsByClassName('cell');
let hasWinner = false;

for (const cell of cells) {
    cell.addEventListener('click', (e) => {
        //console.log(e.target.id);
        if (hasWinner) {
            console.log("please reset, there is a winner");
            return
        }
        e.target.innerHTML = 'X';
        computerMove();
        checkForWin();
    });
}

function computerMove() {
    for (const cell of cells) {
        //console.log(cell.id);
        if (cell.innerHTML.length == 0) {
            cell.innerHTML = 'O';
            break;
        }
    }
}

function checkForWin() {
    console.log('checking for win');
    var winComs = [
        ['c11', 'c12', 'c13'],
        ['c21', 'c22', 'c23'],
        ['c31', 'c32', 'c33'],
        ['c11', 'c21', 'c31'],
        ['c12', 'c22', 'c32'],
        ['c31', 'c32', 'c33'],
        ['c11', 'c22', 'c33'],
        ['c13', 'c22', 'c31'],
    ];
    for (const row of winComs) {
        let firstCell = document.getElementById(row[0]);
        let secondCell = document.getElementById(row[1]);
        let thirdCell = document.getElementById(row[2]);
        console.log("checking " + firstCell.id + secondCell.id + thirdCell.id);
        if (firstCell.innerHTML != '' &&
            secondCell.innerHTML != '' &&
            thirdCell.innerHTML != '') {
            console.log("found full row");
            let checkVal = firstCell.innerHTML;
            if (secondCell.innerHTML == checkVal && thirdCell.innerHTML == checkVal) {
                console.log("Winner is: " + checkVal);
                hasWinner = true;
                return true;
            }
        }
    }
    return false;
}

function reset() {
    for (const cell of cells) {
        cell.innerHTML = "";
    }
    hasWinner = false;
}