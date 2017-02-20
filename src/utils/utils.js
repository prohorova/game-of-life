import Cell from './Cell';

export const generateBoard = (shouldFillRandomly, colSize, rowSize) => {
    let board = [];
    for (let i = 0, l = colSize; i < l; i++) {
        board[i] = [];
        for (let j = 0, m = rowSize; j < m; j++) {
            let alive = shouldFillRandomly ? (Math.random() >= 0.5) : false;
            board[i][j] = new Cell(alive, alive);
        }
    }
    return board;
};

export const goToNextGeneration = (board) => {
    let nextGenBoard = [];
    for (let i = 0, l = board.length; i < l; i++) {
        nextGenBoard[i] = [];
        for (let j = 0, m = board[i].length; j < m; j++) {
            let liveNeighbors = countLiveNeighbors(board, i, j);
            nextGenBoard[i][j] = getNextGenCell(board[i][j], liveNeighbors); }
    }
    return nextGenBoard;
};

export const countLiveNeighbors = (board, col, row) => {
    let count = 0,
        colSize = board.length,
        rowSize = board[0].length;
    for (let i = col - 1, l = col + 1; i <= l; i++) {
        for (let j = row - 1, m = row + 1; j <= m; j++) {
            if (i === col && j === row) continue;
            let calcCol = getCoord(i, colSize);
            let calcRow = getCoord(j, rowSize);
            if (board[calcCol][calcRow].alive) {
                count++;
            }
        }
    }
    return count;
};

export const getCoord = (coord, size) => {
    if (coord < 0) return size + coord;
    if (coord >= size) return size - coord;
    return coord;
};

export const getNextGenCell = (prevCell, liveNeighbors) => {
    let nextGenCell;
    if (prevCell.alive) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
            nextGenCell = new Cell(false);
        } else nextGenCell = new Cell(true);
    } else {
        if (liveNeighbors === 3) {
            nextGenCell = new Cell(true, true);
        } else {
            nextGenCell = new Cell(false);
        }
    }
    return nextGenCell;
};

export const toggleCell = (board, col, row) => {
    let nextBoard = [];
    for (let i = 0, l = board.length; i < l; i++) {
        nextBoard[i] = [];
        for (let j = 0, m = board[i].length; j < m; j++) {
            if (i === col && j === row) {
                nextBoard[i][j] = new Cell(!board[i][j].alive, !board[i][j].alive);
            } else {
                nextBoard[i][j] = new Cell(board[i][j].alive, board[i][j].young);     
            }
        }
    }
    return nextBoard;
};

export const hasLiveCells = (board) => {
    let liveCellsCount = 0;
    for (let i = 0, l = board.length; i < l; i++) {
        for (let j = 0, m = board.length; j < m; j++) {
            if (board[i][j].alive) {
                liveCellsCount++;
            }
        }
    }
    return liveCellsCount > 0;
};