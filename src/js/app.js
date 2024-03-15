import Board from "./board";
import { rawPosition } from "./goblin";

let board = new Board();
board.draw();
rawPosition();

export { Board, rawPosition };