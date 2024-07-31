const board = document.getElementById('board')

const columns = 7

const rows = 6

let turn = 0

const player = ['red', 'blue']

const playerSpan = document.getElementById('player')

addEventListener('click', onClick)

function initializeBoard() {
    for (let i = 0 ; i < columns ; i++) {
        for (let j = 0 ; j < rows ; j++) {
            const div = document.createElement('div')
            board.appendChild(div)
        }
    }
}

initializeBoard()

function onClick() {
    turn = 1 - turn
    playerSpan.innerHTML = turn + 1
}