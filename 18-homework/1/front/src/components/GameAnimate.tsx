import React from "react";
import { move, moves } from "../assets/const";

type GameAnimateProps = {
  playerMove: move;
  aiMove: move;
  animTime: number;
  endGame: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

async function wait(time: number) {
  new Promise((resolve) => setTimeout(resolve, time));
  return true;
}
function whoWon(playerMove: move, aiMove: move) {
  var map: any = {};

  moves.forEach(function (move, i) {
    map[move] = {};
    map[move][move] = "Was a tie";
    map[move][moves[(i + 1) % 3]] = moves[(i + 1) % 3] + " wins";
    map[move][moves[(i + 2) % 3]] = move + " wins";
  });

  function compare(choice1: move, choice2: move) {
    return (map[choice1] || {})[choice2] || "Invalid choice";
  }
}

export default function GameAnimate({
  playerMove,
  aiMove,
  animTime,
  endGame,
}: GameAnimateProps) {
  return (
    <div>
      <div className="btn-board flex flex-row gap-4">
        <div className="display">
          {playerMove} {aiMove}
        </div>
      </div>
    </div>
  );
}
