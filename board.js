import Tile from './tile';

export default class Board {


    constructor(numOfRows, numOfCols, ...colors) {
        this._numOfCols = numOfCols;
        this._numOfRows = numOfRows;
        this._colors = [];

        for (let index = 0; index < colors.length; index++) {
            this._colors.push(colors[index]);

        }
        this.buildBoard();

    }

    buildBoard() {
        let numOfCells = this._numOfCols * this._numOfRows;
        let board = this.create(this._numOfRows, this._numOfCols);

        let shuffledColors = [];
        shuffledColors = this.shuffle(shuffledColors, this._colors, numOfCells);


        this.fillBoard(board, shuffledColors);


    }

    create(x, y) {
        let arr = new Array(x);

        for (let i = 0; i < x; i++) {
            arr[i] = new Array(y);
        }

        return arr;
    }

    fillBoard(board, shuffledColors) {
        let cellsNum = shuffledColors.length - 1;
        for (var i = 0; i < board.length; i++) {

            var innerArrayLength = board[i].length;

            for (var j = 0; j < innerArrayLength; j++) {

                board[i][j] = new Tile(shuffledColors[cellsNum]);
                cellsNum -= 1;

            }
        }
    }


    shuffle(shuffledColors, colors, numOfCells) {
        var currentIndex = numOfCells,
            randomIndex;


        while (0 !== currentIndex) {


            randomIndex = Math.floor(Math.random() * (colors.length + 1) - 1);

            currentIndex -= 1;
            shuffledColors[currentIndex] = colors[randomIndex];

        }

        return shuffledColors;
    }


}
