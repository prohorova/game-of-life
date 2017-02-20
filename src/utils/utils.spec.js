import * as utils from './utils';
import Cell from './Cell';

describe('calculate the next generation of cells', () => {
    describe('should create new cell', () => {
        it('should create live cell', () => {
            expect(new Cell(true, true)).toEqual({alive: true, young: true});
        });

        it('should create dead cell', () => {
            expect(new Cell(false)).toEqual({alive: false, young: false});
        });
    });

    describe('should generate new board', () => {
        it('should generate a board', () => {
            let board = utils.generateBoard(false, 3, 5);
            expect(board.length).toEqual(3);
            expect(board[0].length).toEqual(5);
        })
    });

    describe('should get live neighbors', () => {
        describe('it should get coord if out of borders', () => {
            it('should not change coordinate if in borders', () => {
                expect(utils.getCoord(0, 60)).toEqual(0);
                expect(utils.getCoord(59, 60)).toEqual(59);
            });

            it('should change coordinate if out of borders', () => {
                expect(utils.getCoord(-1, 60)).toEqual(59);
                expect(utils.getCoord(60, 60)).toEqual(0);
            });
        });

        describe('should count live neighboors', () => {
            let board = [
                [new Cell(false), new Cell(false), new Cell(true)],
                [new Cell(false), new Cell(false), new Cell(true)],
                [new Cell(false), new Cell(false), new Cell(true)],
            ];

            it('it should count live neighboors when every cell is in borders', () => {
                expect(utils.countLiveNeighbors(board, 1, 1)).toEqual(3);
            });

            it('it should count live neighboors when some cells out of borders', () => {
                expect(utils.countLiveNeighbors(board, 1, 0)).toEqual(3);
            });
        })
    });

    describe('should create next generation cells', () => {
        it('cell should stay alive', () => {
            expect(utils.getNextGenCell(new Cell(true, true), 2)).toEqual({alive: true, young: false});
            expect(utils.getNextGenCell(new Cell(true), 3)).toEqual({alive: true, young: false});
        });

        it('cell should die', () => {
            expect(utils.getNextGenCell(new Cell(true), 1)).toEqual({alive: false, young: false});
            expect(utils.getNextGenCell(new Cell(true, true), 4)).toEqual({alive: false, young: false});
        });

        it('cell should become live', () => {
            expect(utils.getNextGenCell(new Cell(false), 3)).toEqual({alive: true, young: true});
        });

        it('cell should stay dead', () => {
            expect(utils.getNextGenCell(new Cell(false), 2)).toEqual({alive: false, young: false});
            expect(utils.getNextGenCell(new Cell(false), 4)).toEqual({alive: false, young: false});
        });
    });

    describe('triomino patterns', () => {
        it('triomino pattern 1', () => {
            let firstGenBoard = [
                [new Cell(false), new Cell(false),      new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(true, true), new Cell(false)],
                [new Cell(false), new Cell(true, true), new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(true, true), new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false),      new Cell(false)]
            ];
            let secondGenBoard = [
                [new Cell(false), new Cell(false),       new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),       new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(true, false), new Cell(true, true), new Cell(false)],
                [new Cell(false), new Cell(false),       new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),       new Cell(false),      new Cell(false)]
            ];
            let thirdGenBoard = [
                [new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(false), new Cell(false)]
            ];

            expect(utils.goToNextGeneration(firstGenBoard)).toEqual(secondGenBoard);
            expect(utils.goToNextGeneration(secondGenBoard)).toEqual(thirdGenBoard);
        });

        it('triomino pattern 2', () => {
            let firstGenBoard = [
                [new Cell(false), new Cell(false), new Cell(false),      new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(true, true), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(true, false), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(true, true), new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false), new Cell(false),      new Cell(false), new Cell(false)]
            ];

            let secondGenBoard = [
                [new Cell(false), new Cell(false),      new Cell(false), new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false), new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(true, true), new Cell(true),  new Cell(true, true), new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false), new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false), new Cell(false),      new Cell(false)]
            ];

            expect(utils.goToNextGeneration(firstGenBoard)).toEqual(secondGenBoard);
            expect(utils.goToNextGeneration(secondGenBoard)).toEqual(firstGenBoard);
        });

        it('triomino pattern 3', () => {
            let firstGenBoard = [
                [new Cell(false), new Cell(false),      new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(true, true), new Cell(true, true), new Cell(false)],
                [new Cell(false), new Cell(true, true), new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false),       new Cell(false)]
            ];
            let secondGenBoard = [
                [new Cell(false), new Cell(false),      new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(true),       new Cell(true),       new Cell(false)],
                [new Cell(false), new Cell(true),       new Cell(true, true), new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false),       new Cell(false)]
            ];
            let thirdGenBoard = [
                [new Cell(false), new Cell(false),      new Cell(false),      new Cell(false)],
                [new Cell(false), new Cell(true),       new Cell(true),       new Cell(false)],
                [new Cell(false), new Cell(true),       new Cell(true),       new Cell(false)],
                [new Cell(false), new Cell(false),      new Cell(false),       new Cell(false)]
            ];

            expect(utils.goToNextGeneration(firstGenBoard)).toEqual(secondGenBoard);
            expect(utils.goToNextGeneration(secondGenBoard)).toEqual(thirdGenBoard);
            expect(utils.goToNextGeneration(thirdGenBoard)).toEqual(thirdGenBoard);
        });
    });

    describe('should toggle cell', () => {
        let board = [
            [new Cell(false)]
        ];
        let nextBoard = [
            [new Cell(true, true)]
        ];
        expect(utils.toggleCell(board, 0, 0)).toEqual(nextBoard);
    });

    describe('check if there are live cells', () => {
        it('should has live cells', () => {
            let board = [
                [new Cell(false), new Cell(false)],
                [new Cell(true), new Cell(false)]
            ];

            expect(utils.hasLiveCells(board)).toEqual(true);
        });

        it('should not have live cells', () => {
            let board = [
                [new Cell(false), new Cell(false)],
                [new Cell(false), new Cell(false)]
            ];

            expect(utils.hasLiveCells(board)).toEqual(false);
        });
    })

});