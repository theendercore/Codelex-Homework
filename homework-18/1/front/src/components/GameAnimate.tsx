import React from "react";
import { move } from "../assets/const";

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

export default async function GameAnimate({
  playerMove,
  aiMove,
  animTime,
  endGame,
}: GameAnimateProps) {
  return (
    <div>
      <div className="btn-board flex flex-row gap-4">
        {await wait(animTime)}
        <div className="display">
          {playerMove} {aiMove}
        </div>
      </div>
    </div>
  );
}
