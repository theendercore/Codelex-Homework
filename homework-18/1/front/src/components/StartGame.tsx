import React from "react";
import { useTranslation } from "react-i18next";
import { moves, move } from "../assets/const";

type StartGameProps = {
  playerMove: move;
  setMove: React.Dispatch<React.SetStateAction<"rock" | "paper" | "scissors">>;
  startGame: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function StartGame({
  playerMove,
  setMove,
  startGame,
}: StartGameProps) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="btn-board flex flex-row gap-4">
        {moves.map((move) => {
          return (
            <button
              className={(move === playerMove ? "font-bold " : " ") + "hover:text-xl"}
              key={move}
              onClick={(e) => setMove(move)}
            >
              {t(`move.${move}`)}
            </button>
          );
        })}
      </div>
      <button onClick={startGame}>RPS</button>
    </div>
  );
}
